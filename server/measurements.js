var logger = require("./logger.js");
var dates = require("./dates.js");
var prototypes = require("./prototypes.js");
var countersLib = require("./counter.js");
var fs = require('fs');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var cityhash = require("cityhash");
var configLib = require("./configuration.js");
var request = require('request');
var zlib = require('zlib');

// Set the global services for this module
var contextLib;
module.exports.setContextLib = function(l) { contextLib = l; };

// Converts the time field in the arguments to a valid date object
var validateTimeField = function(args, callContext) {

	var time;
	try {

		// If we don't have time in the arguments it's a bad call
		if (args.t == null) {
			callContext.respondText(400, "Missing time field: " + JSON.stringify(args));
			logger.error("Missing time field: " + JSON.stringify(args));
			return;

		// If it's a number, convert it
		} else if (!isNaN(Number(args.t))) {
			
			time = new Date(Number(args.t));

			// Adjustment for unix date +%s
			if (time.getUTCFullYear() < 2000) {
				time = new Date(Number(args.t*1000));
			}

		// Could be a string if it's not a number
		} else {
			time = new Date(args.t);
		}
		
		return time;
	} catch (timeError) {
		callContext.respondText(400, "Invalid time field: " + timeError);
		logger.error("Error parsing time: " + timeError + " for " + JSON.stringify(args) );
		return;
	}
};

function cleanShellCharacters(str) {
	return str.replace(/[ ;\/]/g,"_");
}

function queryDataSource(ds, callContext, onDatasourceQueryDone, args) {
	try {
		var now = new Date();

		var config = configLib.getConfig();
		var coresToUsePerQuery = config.coresToUsePerQuery || 1;

		var dateFrom = now;
		if (ds.from) dateFrom = ds.from.understandTime();
		var dateTo = now;
		if (ds.to) dateTo = ds.to.understandTime();		
		var dateFromStr = dateFrom.toISOString().substring(0,19);
		var dateToStr = dateTo.toISOString().substring(0,19);
		var serverWildcard = cleanShellCharacters(ds.server || "*")
		var componentWildcard = cleanShellCharacters(ds.component || "*");
		if (ds.originalIndex) ds.originalIndex = cleanShellCharacters(ds.originalIndex);
		if (ds.name) ds.name = cleanShellCharacters(ds.name);
		if (ds.exclude) ds.exclude = cleanShellCharacters(ds.exclude);

		var maxBufferMB = ds.bufferMB || 4;

		var dateCursor = dateFrom;
		var inputFilesString = "";
		var inputFilesArr = [];
		var inputFile;
		
		var lookupPrefixEndIndex;

		// Replacements
		if (serverWildcard == "$crayon-server") serverWildcard = countersLib.getShortHostname();

		var plan = "";
		var planSuffix = "";
		var timeField = "";
		var planSeed = Math.round(Math.random()*99999999);
		if (ds.unit == 'r') {
			timeField = "$4";
			if (!args.noDsIndex) plan += "echo '" + ds.originalIndex + "';";
			while (dateCursor <= dateTo) {
				inputFile = "minutes_ram/" + dateCursor.toISOString().substring(0,16) + "/" + serverWildcard + "/" + componentWildcard;
				inputFilesString += " " + inputFile;
				inputFilesArr.push(inputFile);
				dateCursor = dateCursor.addMinutes(1);
			}
			if (ds.aggregateOnServer) {
				 planSuffix += " | awk -f ../aggregateMinutesInline.sh";
			}
		} else if (ds.unit == 'm') {
			timeField = "$4";
			if (!args.noDsIndex) plan += "echo '" + ds.originalIndex + "';";
			while (dateCursor <= dateTo) {
				inputFile = "minutes/" + dateCursor.toISOString().substring(0,15) + "/" + serverWildcard + "/" + componentWildcard + ".@*";
				inputFilesString += " " + inputFile;
				inputFilesArr.push(inputFile);
				dateCursor = dateCursor.addMinutes(10);
			}
		} else if (ds.unit == 'h') {
			timeField = "$4";
			if (!args.noDsIndex) plan += "echo '" + ds.originalIndex + "';";
			//dateCursor = dateCursor.addHours(-(dateCursor.getUTCHours()%3));
			while (dateCursor <= dateTo) {
				inputFile = "hours/" + dateCursor.toISOString().substring(0,13) + "/" + serverWildcard + "/" + componentWildcard + ".@*";
				inputFilesString += " " + inputFile;
				inputFilesArr.push(inputFile);
				dateCursor = dateCursor.addHours(1);
			}
		} else if (ds.unit == 'd') {
			timeField = "$4";
			if (!args.noDsIndex) plan += "echo '" + ds.originalIndex + "';";
			//dateCursor = dateCursor.addHours(-(dateCursor.getUTCHours()%3));
			while (dateCursor <= dateTo) {
				inputFile = "days/" + dateCursor.toISOString().substring(0,10) + "/" + serverWildcard + "/" + componentWildcard + ".@*";
				inputFilesString += " " + inputFile;
				inputFilesArr.push(inputFile);
				dateCursor = dateCursor.addDays(1);
			}			
		} else {
			callContext.respondJson(200, {error: "Invalid unit: " + ds.unit });
			logger.error("Query plan failed: " + error.stack, "utf-8");
			return;
		}

		var execConfig = {
		    maxBuffer: maxBufferMB * 1024 * 1024,
		    env: process.env
		};

		function executePlan(plan, config, callback) {
			logger.info("Executing query plan: " + plan.colorBlue());
			exec(plan, config, function(error, out, err) {  

				// If we failed querying
				if (error) {
					//callContext.respondJson(200, {error: "Failed querying: " + error.stack});
					logger.error("Query plan failed: " + error.stack, "utf-8");
					return;
				}

				if (err) {
					logger.error("Query plan error: " + err, "utf-8");
				}

				callback(ds, out);
			});
		}

		var useMultipleCores = (coresToUsePerQuery > 1);
		if (useMultipleCores) {
			plan += "ls " + inputFilesString + " 2>/dev/null | xargs -n 1 -P " + coresToUsePerQuery + " -I {} ";
			fileName = "{}";

			if (ds.unit == 'r') {
				plan += "egrep -s -h '^" + ds.name + "' " + fileName + " ";
			} else {
				lookupPrefixEndIndex = ds.name.search("[^0-9a-zA-Z]");
				if (lookupPrefixEndIndex > 0) {
					plan += "./synced_egrep.sh " + planSeed + " '" + ds.name.substring(0,lookupPrefixEndIndex) + "' " + fileName + " '" + ds.name + "'";
					//plan += "look '" + ds.name.substring(0,lookupPrefixEndIndex) + "' " + fileName + " 2>/dev/null | egrep -s -h '" + ds.name + "'"
				} else {
					plan += "./synced_egrep.sh " + planSeed + " '-' " + fileName + " '" + ds.name + "'";
					//plan += "egrep -s -h '" + ds.name + "' " + fileName + " "
				}
			}

			if (ds.exclude) plan += " | egrep -v '" + ds.exclude + "' ";
			plan += " | awk '{if (" + timeField + " > \"" + dateFromStr + "\" && "+  timeField + " < \"" + dateToStr + "\") print;}'" + planSuffix;
			plan += "; rm -f /tmp/crayon-query-" + planSeed + ".lck";
		} else { 
			plan += "for f in $(ls " + inputFilesString + " 2>/dev/null); do ";
			fileName = "$f";

			if (ds.unit == 'r') {
				plan += "egrep -s -h '^" + ds.name + "' " + fileName + " ";
			} else {
				lookupPrefixEndIndex = ds.name.search("[^0-9a-zA-Z]");
				if (lookupPrefixEndIndex > 0) {
					plan += "look '" + ds.name.substring(0,lookupPrefixEndIndex) + "' " + fileName + " 2>/dev/null | egrep -s -h '^" + ds.name + "'";
				} else {
					plan += "egrep -s -h '^" + ds.name + "' " + fileName + " ";
				}
			}

			if (ds.exclude) plan += " | egrep -v '" + ds.exclude + "' ";
			plan += "; done | awk '{if (" + timeField + " > \"" + dateFromStr + "\" && "+  timeField + " < \"" + dateToStr + "\") print;}'" + planSuffix;
		}

		executePlan(plan, execConfig, onDatasourceQueryDone);

	} catch (ex) {
		callContext.respondJson(500, {error: "Failed querying raw data: " + ex.stack});
		//logger.error("Failed querying raw data: " + ex);
	}
}

// Exposes the docs to the client 
module.exports.find = function(callContext) {
	var args = callContext.args;
	var dsIndex = null;

	// Validate & cast all input arguments to their proper form
	if (!args.ds || args.ds.length == 0) {
		callContext.respondText(400, "Error: No dataSources supplied for querying: " + JSON.stringify(args));
		return;
	}

	try {
		args.dsString = args.ds;
		args.ds = JSON.parse(args.ds);
	} catch (ex) {
		callContext.respondText(400, "Error: Invalid dataSources supplied (" + args.ds + ")");
		return;
	}

	// Validate
	for (dsIndex in args.ds) {
		var ds = args.ds[dsIndex];
		if (typeof ds == "string") {
			// ignore strings they are filtered out in the next block
		} else if (!ds.unit) {
			callContext.respondText(400, "Error: Missing unit attribute for data source: " + JSON.stringify(args));
			return;
		}
	}

	// Start measuring the query plan time
	var startQueryMs = new Date().getTime();

	// Expand datasources which represent multiple queries
	for (dsIndex in args.ds) {
		if (typeof args.ds[dsIndex] == "object") {
			args.ds[dsIndex].originalIndex = dsIndex;
		}
	}

	var dataSourcesCopy = args.ds;
	var dataSources = [];
	var dataSource = null;
	var dataSourceCopy = null;

	// Expand servers (first pass)
	for (dsIndex in dataSourcesCopy) {
		dataSource = dataSourcesCopy[dsIndex];
		if (typeof dataSource == "string") {
			// ignore strings
			continue;
		} else if (dataSource.server && dataSource.server.join != null) {
			for (var serverId in dataSource.server) {
				dataSourceCopy = JSON.parse(JSON.stringify(dataSource));
				dataSourceCopy.server = dataSource.server[serverId];
				dataSources.push(dataSourceCopy);
			}
		} else {
			dataSources.push(dataSource);
		}
	}

	// Expand component (second pass)
	dataSourcesCopy = dataSources;
	dataSources = [];
	dataSource = null;
	dataSourceCopy = null;
	for (dsIndex in dataSourcesCopy) {
		dataSource = dataSourcesCopy[dsIndex];
		if (dataSource.component && dataSource.component.join != null) {
			for (var componentId in dataSource.component) {
				dataSourceCopy = JSON.parse(JSON.stringify(dataSource));
				dataSourceCopy.component = dataSource.component[componentId];
				dataSources.push(dataSourceCopy);
			}
		} else {
			dataSources.push(dataSource);
		}
	}

	//logger.debug("Received new query: " + (args.dsString).colorBlue() + " dataSources: " + JSON.stringify(dataSources));

	var remainingDatasources = dataSources.length;
	var combinedOutput = "";
	var onDatasourceQueryDone = function(ds, out) {
		combinedOutput += out;

		remainingDatasources--;
		var endQueryMs = new Date().getTime();
		if (typeof ds == "string") {
			logger.info("Shard (" + ds + ") query ended within " + ((endQueryMs-startQueryMs) + "ms").colorMagenta() + " size of output: " + out.length + ". " + remainingDatasources + " remaining.");
		} else {
			logger.info("Datasource (" + ds.index + ") query ended within " + ((endQueryMs-startQueryMs) + "ms").colorMagenta() + " size of output: " + out.length + ". " + remainingDatasources + " remaining.");
		}

		if (remainingDatasources > 0) return;

		// Stop measuring the query time
		var endTotalMs = new Date().getTime();

		logger.info("Query plan ended within " + ((endTotalMs-startQueryMs) + "ms").colorMagenta() + " size of output: " + combinedOutput.length);
		countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Query Plan Execution ms", "crayon").addSample(endTotalMs-startQueryMs);
		callContext.respondText(200, combinedOutput);
	};

	
	var config = configLib.getConfig();
	var myHostname = countersLib.getHostname().toLowerCase().split(":")[0];

	if (args.noShards != "1") {
		for (var shardId in config.shards) {
			var remoteShard = config.shards[shardId];
			var remoteShardShortName = remoteShard.toLowerCase().split(":")[0];
			if (remoteShardShortName == myHostname) continue;

			remainingDatasources++;
			queryShard(args, remoteShard, onDatasourceQueryDone);
			
		}
	}
	

	// Iterate over the datasources and 
	for (dsIndex in dataSources) {
		dataSource = dataSources[dsIndex];
		dataSource.index = dsIndex;
		queryDataSource(dataSource, callContext, onDatasourceQueryDone, args);
	}
};

function queryShard(args, remoteShard, onDatasourceQueryDone) {
	var dsString = encodeURIComponent(JSON.stringify(args.ds));
	logger.debug("Querying shard: " + remoteShard.colorBlue());
	
	var extraShardArgs = "";
	if (args.noDsIndex) {
		extraShardArgs = "noDsIndex=true&";
	}

	var reqObj = { 
		url: 'http://' + remoteShard + '/find?' + extraShardArgs + 'noShards=1&ds=' + dsString, 
		headers: {'accept-encoding': 'gzip'},
		encoding: null
	};

	request.get(reqObj, function (err, resp, body) { 
		if (err) {
			logger.error("Error communicating with shard: " + err);
			return;
		}

		if (resp.statusCode != 200) {
			logger.error("Error communicating with shard: " + body);
			return;
		}

		if (body[0] == 0x1f && body[1] == 0x8b) {
			try {
				zlib.gunzip(body, function(err, uncompressedMsgBuff) {
			 		if (err) {
			 			logger.error("Error gunzipping a shard's response: " + err);
			 			return;
			 		}
			 		
			 		onDatasourceQueryDone(remoteShard, uncompressedMsgBuff.toString('utf8'));
			 	});
			} catch (ex) {
				logger.error("Exception gunzipping a shard's response: " + ex.stack);
				return;
			}
		} else {
			onDatasourceQueryDone(remoteShard, body.toString("utf8"));
		}	
	});
}

// Adding a raw sample is adding a sample which is not aggregated (basically only time & name & value)
// When we add a raw value, we simulate an aggregative value of 1 sample based on this raw value
// and call addAggregate
module.exports.addRaw = function(callContext) {
	addAggregate(callContext);
};

// Adding a an aggregate sample is adding a sample which contains all values as aggregatives (min/max/ave/var...)
var addAggregate = function(callContext) {

	// If the value is not a list, make it a list (simpler code for processing both cases)
	if (!callContext.args.length) callContext.args = [callContext.args];
	if (!validateSamples(callContext)) return;

	countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Added Metrics", "crayon").increment(callContext.args.length);
	countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "AddRaw message bytes", "crayon").addSample(callContext.body.length);
	addBulkTimeslotsByDate(callContext.body.length, callContext.args);

	callContext.respondText(200, "OK");
};

// Make sure each of the samples has what it takes
function validateSamples(callContext) {

	for (var argsNum in callContext.args) {
		var args = callContext.args[argsNum];

		// Minify the arguments and validate their value
		callContext.minifyArgNames(args);
		//callContext.numberifyArg("N",argsNum);
		callContext.numberifyArg("S",argsNum);
		//callContext.numberifyArg("M",argsNum);
		//callContext.numberifyArg("m",argsNum);
		
		// Validate that the name field exists
		if (!args.n) {
			callContext.respondText(400, "Missing name field: " + JSON.stringify(args));
			return false;
		}

		// Validate the value of the time field
		args.t = validateTimeField(args, callContext);
		if (args.t == null) {
			return false;
		}
	}

	return true;
}

// Adds a sample to all the timeslots by calling addTimeslot with different units
// We're doing it sequencial on the table order because we don't want to duplicate the rows in memory
function addBulkTimeslotsByDate(dataSize, argsArr, caller, callback) {

	addTimeslotBulk(dataSize, new Date().getTime(), dates.getSecondBulk, 's', argsArr, function() {
		if (callback != null) callback();
	});
}

// Performing a "pessimistic concurrency" upsert for the timeslot
function addTimeslotBulk(dataSize, beforeMs, timeFormatter, unit, argsArr, callback) {
	var metricsCameFrom = null;
	if (argsArr.length > 0) metricsCameFrom = argsArr[0].s;
	
	// Start log message
	var startLogMessage = "Starting dump of " + (argsArr.length.toString()).colorMagenta() + " metrics";
	if (metricsCameFrom) startLogMessage += " that came from " + metricsCameFrom.colorBlue();
	logger.debug(startLogMessage);

	//var crayonId = countersLib.getCrayonId();
	insertCounter = insertCounter || countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Inserts", "crayon");
	createFolderCounter = createFolderCounter || countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "folder-creations-attempts", "crayon");
	//twoBytesCrayonId = twoBytesCrayonId || crayonId.toString(16).length;
	//var fourBytesSecondsSinceEpoch = (Math.round(beforeMs / 1000)).toString(16);
	//var idPrefix = fourBytesSecondsSinceEpoch + twoBytesCrayonId;
	var remaining = argsArr.length;

	var onSaveCompleted = function() {
		var afterMs = new Date().getTime();

		// Start log message
		var endLogMessage = "Dump of " + (argsArr.length.toString()).colorMagenta() + " metrics";
		if (metricsCameFrom) endLogMessage += " that came from " + metricsCameFrom.colorBlue();
		endLogMessage += " took " + ((afterMs-beforeMs) + "ms").colorMagenta();
		logger.debug(endLogMessage);

		callback();
	};


	var pathHash = {};

	// Prepare the collection specific uniqeness per row variables
	var lastBufObj = null;
	var lastKey = null;
	var minuteStr = new Date().toISOString().substring(0,16);
	var key = null;
	var bufObj = null;

	if (unit == 's') {
		for (var i=0; i <argsArr.length; ++i) {
			var args = argsArr[i];
			//args.t = timeFormatter(args.t);
			
			var valString = args.S.toString();
			var compString = (args.c ? args.c.replace(/ /g,"_") : "-");
			var serverString = (args.s ? args.s.replace(/ /g,"_") : "-");
			var timeString = args.t.toISOString().substring(0,19);

			key = serverString + "/" + compString;

			bufObj = lastBufObj;
			if (key != lastKey) {
				lastKey = key;
				bufObj = pathHash[key];

				// Create first encountered dir
				if (!dirHash[minuteStr + serverString]) {
					dirHash[minuteStr + serverString] = new Date();
					logger.debug("Trying to create dir for " + serverString);
					try { fs.mkdirSync("minutes_ram/" + minuteStr); } catch (e) {}
					try { fs.mkdirSync("minutes_ram/" + minuteStr + "/" + serverString); } catch (e) {}
					createFolderCounter.increment();
				}
			}

			if (bufObj == null) {
				bufObj = {};
				bufObj.buf = new Buffer(dataSize || 10*1024);
				bufObj.pos = 0;
				pathHash[key] = bufObj;
			}
			lastBufObj = bufObj;

			bufObj.pos += bufObj.buf.write(args.n.replace(/ /g,"_"),bufObj.pos);
			bufObj.pos += bufObj.buf.write(" ",bufObj.pos);
			bufObj.pos += bufObj.buf.write(serverString,bufObj.pos);
			bufObj.pos += bufObj.buf.write(" ",bufObj.pos);
			bufObj.pos += bufObj.buf.write(compString,bufObj.pos);
			bufObj.pos += bufObj.buf.write(" ",bufObj.pos);
			bufObj.pos += bufObj.buf.write(timeString,bufObj.pos);
			bufObj.pos += bufObj.buf.write(" ",bufObj.pos);
			bufObj.pos += bufObj.buf.write(valString,bufObj.pos);
			bufObj.pos += bufObj.buf.write("\n",bufObj.pos);
			//allTextToWrite += JSON.stringify(args) + "\n";
		}
	}

	var appendResultHandler = function (err) {
			if (err) {
				logger.error("Failed saving seconds bulk: " + err);

				//try { fs.mkdirSync("minutes_ram/" + server + "/" + component + "/" + name); } catch (e) {}
			}

		if (--remaining === 0) {
				onSaveCompleted();
			}
			
	};
	for (key in pathHash) {
		bufObj = pathHash[key];
		fs.appendFile('minutes_ram/' + minuteStr + "/" + key, bufObj.buf.slice(0, bufObj.pos), appendResultHandler);
	}

	insertCounter.increment(argsArr.length);
}


var dirHash = {};
setInterval(function() {
	try {
		var hashKeys = Object.keys(dirHash);
		for (var i in hashKeys) {
			if (dirHash[hashKeys[i]].addMinutes(2) < new Date()) {
				delete hashKeys[i];
			}
		}
	} catch (ex) {
		logger.error("Failed archiving hashed dir creation keys");
	}
}, 60000);

var insertCounter;
var createFolderCounter;
var twoBytesCrayonId;
var namePath = {};

// Do the actual math of the aggregatives. Min/Max/Ave/Var or anything else like concat etc.
function combineRows(existingRow, newRow) {	
	var combinedRow = null;

	if (existingRow == null) {
		combinedRow = newRow;
	} else {
		// Copy old fields to the combined row first, they are prone to get overrun
		var existingA = existingRow.A;
		var existingN = existingRow.N;
		var existingV = existingRow.V;

		combinedRow = existingRow;

		// Copy new fields to the combiend row, overrun any old fields with the same name
		//for (field in newRow) {
		//	combinedRow[field] = newRow[field];
		//}
	
		combinedRow.m = (existingRow.m < newRow.m ? existingRow.m : newRow.m);
		combinedRow.M = (existingRow.M > newRow.M ? existingRow.M : newRow.M);
		combinedRow.N = existingN + newRow.N;
		combinedRow.A = ((existingN * existingA) + (newRow.N * newRow.A)) / combinedRow.N;
		
		// An incremental calculation of standard deviation.
		// For adding a single value to an aggregated value, simply add the sample's value distance from averages
		if (newRow.N == 1) {
			combinedRow.V += (newRow.M - existingA) * (newRow.M - combinedRow.A);
		} else if (existingN == 1) {
			combinedRow.V += (existingA - newRow.A) * (existingA - combinedRow.A);

		// For combining two Variance*N, do meanOf_MeansSquare + meanOf_Vars - meanOfMeans_Square;
		} else { 
			// Workaround for cases we don't have stdev in the input
			if (newRow.V == null) newRow.V = existingV;
			
			var meanOfMeans_Square = (combinedRow.A * combinedRow.A);
			var meanOf_MeansSquare = ((existingN * existingA * existingA) + (newRow.N * newRow.A * newRow.A)) / combinedRow.N;
			var meanOf_Vars = (existingV + newRow.V) / combinedRow.N;
			combinedRow.V =  meanOf_MeansSquare + meanOf_Vars - meanOfMeans_Square;
		}
		
		/* // Should rounding point be applied to data on re-aggregation? or just when viewing
		   //==================================================================================
		   // Pros: it would save storage
		   // Cons: It would get further from the exact value

			var config = configLib.getConfig();
			if (config != null && config.decimalPointRounding != null) {
				pow = Math.pow(10,config.decimalPointRounding);
				if (pow != null) { combinedRow.V = Math.round(combinedRow.V*pow)/pow; .... to all values }
		}*/
	}
	
	// Make sure these values exist
	combinedRow.m = combinedRow.m || 0;
	combinedRow.M = combinedRow.M || 0;
	combinedRow.N = combinedRow.N || 0;
	combinedRow.A = combinedRow.A || 0;
	combinedRow.V = combinedRow.V || 0;
			
	// For debugging purposes this often helps a lot
	if (false) { 
		logger.debug("===============");
		logger.debug("COMBINED: " + JSON.stringify(combinedRow));
		logger.debug("NEW: " + JSON.stringify(newRow));
		logger.debug("EXISTING: " + JSON.stringify(existingRow));
	}

	return combinedRow;
}

module.exports.matchSeriesName = function(callContext) {
	if (!callContext.args.regex) {
		callContext.respondJson(200,{error:"Argument regex is missing"});
		return;
	}

	
	if (callContext.args.regex == "*") callContext.args.regex = ".*";

	var limit = cleanShellCharacters(callContext.args.limit || "5");
	var regex = cleanShellCharacters(callContext.args.regex || "");
	var planSeed = Math.round(Math.random()*99999999);
	
	var plan = "/bin/bash -i -c './find-metric.sh 10 " + planSeed + " \"" + regex + "\"  " + limit + "; exit'";
	
	//var plan = 'ssh 127.0.0.1 "cd $(pwd); ./find-metric.sh 10 ' + planSeed + ' \'' + regex + '\'  ' + limit + '"';
	//var plan =  "ls minutes_ram/*/*/* | xargs -n 1 -P 10 -I {} " +
	//	"./synced_egrep.sh " + planSeed + " '-' {} '" + regex + "'" + 
	//	"| awk '{if (a[$1] == null && NF > 2) {a[$1]=1; print $1; g += 1; b = 0} else { b += 1 } if (g >= " + limit + " || (g >= 1 && b > 50)) { print \"awkterminating\" }}' " + 
	//	"| head -1000 | grep -v awkterminating | head -" + limit;
//
	//plan += "; rm -f /tmp/crayon-query-" + planSeed + ".lck";
	logger.info("Executing match series name: " + plan.colorBlue());
	var maxBufferMB = 1;
	var execConfig = {
	    maxBuffer: maxBufferMB * 1024 * 1024,
	    env: process.env
	};

/*
    var spawned = spawn("./find-metric.sh",["10",  planSeed.toString(), regex, limit.toString()]);
    var handleSpawned = function(s) {
    	s.dataArr = [];

    	s.stdout.on('data', function (data) {
		  s.dataArr.push(data);
		});

    	var queryOver = function() {
    		if (s.dataCombined) return;
    		s.dataCombined = s.dataArr.join("");
    		callContext.respondText(200, s.dataCombined||"");
    	}

		s.stderr.on('data', function (data) {
			s.kill("SIGHUP");
		  	queryOver();
		});

		s.on('close', function (code) {
		  	queryOver();
		});
    }
    handleSpawned(spawned);
*/

	exec(plan, execConfig, function(error, out, err) {  

		// If we failed querying
		//if (error) {
		//	callContext.respondText(200, "No metric found");
		//	return;
		//}

		if (out == null) {
			logger.debug("0 Metrics found");
		} else {
			logger.debug(out.split('\n').length + " Metrics found");
		}

		callContext.respondText(200, out||"");
	});

};

module.exports.addAggregate = addAggregate;
module.exports.addBulkTimeslotsByDate = addBulkTimeslotsByDate;