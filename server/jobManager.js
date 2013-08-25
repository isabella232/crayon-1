var configLib = require("./configuration.js");
var dates = require("./dates.js");
var prototypes = require("./prototypes.js");
var countersLib = require("./counter.js");
var mail = require("./crayonMail.js");
var exec = require('child_process').exec;
var fs = require('fs');
var staticDir = __dirname + '/../static';
var minutesDelayLagAssuranceForAggregation = 1;
var cpuCounter = null;
var rawRemainingRamCounter = null;

function JobManager(logger, noAggregations) {
	var me=this;
	
	me.logger = logger;
	me.noAggregations = noAggregations;

	
	me.hourTimer = setInterval(function() { me.hourElapsed(new Date()); }, 1000*60*60);
	me.minuteTimer = setInterval(function() { me.minuteElapsed(new Date()); }, 1000*60);
	me.halfMinuteTimer = setInterval(function() { me.halfMinuteElapsed(new Date()); }, 1000*30);
	me.secondTimer = setInterval(function() { me.secondPassed(new Date()); }, 1000);
	me.secondPassed(new Date());
	me.halfMinuteElapsed(new Date());
	me.minuteElapsed(new Date());
	me.hourElapsed(new Date());
	
	//me.minuteTimer = setInterval(function() { me.checkThresholds(); }, 1000*5);
	//me.checkThresholds();
	if (!me.logger) throw new Error("Logger is undefined");
}

JobManager.prototype.secondPassed = function(now) {
	var me=this;

	// Update cpu every 10 seconds
	if (now.getUTCSeconds() % 10 === 0) {
		cpuCounter = cpuCounter || countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Crayon Host CPU", "crayon", null, true);
		rawRemainingRamCounter = rawRemainingRamCounter || countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Remaining Raw RAM", "crayon", null, true);

		//TODO:REVIEW system information and operation functions should be extracted to a separate module and at some point replaced with cross platform modules.
		
		try {
				//TODO:REVIEW sar should be listed as a dependency in the readme. On ubuntu, you need to follow this procedure - http://www.leonardoborda.com/blog/how-to-configure-sysstatsar-on-ubuntudebian/
			exec("sar -u 1 1 | tail -1 | awk '{print $3}'", function(error, out, err) {  
				if (out) {
					var cpu = Number(out);
					if (!isNaN(cpu)) {
						cpuCounter.addSample(cpu);
					}
				}
			});
		} catch (ex) {} //TODO:REVIEW add logging

		try {
			exec("df | grep minutes_ram | awk '{print $(NF-2)}'", function(error, out, err) {  
				if (out) {
					var bytes = Number(out);
					if (!isNaN(bytes)) {
						rawRemainingRamCounter.addSample(bytes);
					}
				}
			});
		} catch (ex) {} //TODO:REVIEW add logging
	}
};

JobManager.prototype.halfMinuteElapsed = function(now) {
	var me=this;
	
	//TODO:REVIEW counter names should be extracted from the function and made available outside it (module level?)

	try {
		var msBefore = new Date().getTime();
				
		var config = configLib.getConfig();

		var hoursToKeepRawData = 1;
		if (config.hoursToRetainSamples && config.hoursToRetainSamples.raw) hoursToKeepRawData = config.hoursToRetainSamples.raw;
		var rawTime = new Date().addMinutes(-60 * hoursToKeepRawData).toISOString().substring(0,16);
		var rawFolder = "minutes_ram";
		var rawCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Raw Archive ms", "crayon");
		me.archive(msBefore, rawTime, rawFolder, rawCounter);

		var hoursToKeepMinutesData = 24;
		if (config.hoursToRetainSamples && config.hoursToRetainSamples.minutes) hoursToKeepMinutesData = config.hoursToRetainSamples.minutes;
		var mTime = new Date().addMinutes(-60 * hoursToKeepMinutesData).toISOString().substring(0,15);
		var mFolder = "minutes";
		var mCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Minutes Archive ms", "crayon");
		me.archive(msBefore, mTime, mFolder, mCounter);

		var hoursToKeepHoursData = 336;
		if (config.hoursToRetainSamples && config.hoursToRetainSamples.hours) hoursToKeepMinutesData = config.hoursToRetainSamples.hours;
		var hTime = new Date().addMinutes(-60 * hoursToKeepHoursData).toISOString().substring(0,13);
		var hFolder = "hours";
		var hCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Hours Archive ms", "crayon");
		me.archive(msBefore, hTime, hFolder, hCounter);

		var hoursToKeepDaysData = 365;
		if (config.hoursToRetainSamples && config.hoursToRetainSamples.days) hoursToKeepMinutesData = config.hoursToRetainSamples.days;
		var dTime = new Date().addMinutes(-60 * hoursToKeepDaysData).toISOString().substring(0,10);
		var dFolder = "days";
		var dCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Days Archive ms", "crayon");
		me.archive(msBefore, dTime, dFolder, dCounter);

	} catch (ex) {
		me.logger.error("Exception removing minute dir: " + ex.stack);
	}
};

JobManager.prototype.archive = function(msBefore, time, folder, counter) {
	if (!folder) return;

	var me=this;
	
	//TODO:REVIEW system information and operation functions should be extracted to a separate module and at some point replaced with cross platform modules.

	var cmd = "rm -rf $(ls "+folder+"/ | awk '{if ($1 < \"" + time + "\") print}' | sed 's|^|./"+ folder +"/|')";
	me.logger.info("Starting archive with command: " + cmd.colorBlue());
	exec(cmd, function(error, out, err) {  
		if (error) {
			me.logger.error("Failed archiving " + time + ": " + error);
		} else if (err) {
			me.logger.error("Error archiving " + time + ": " + error);
		}

		var msAfter = new Date().getTime();
		var duration = msAfter-msBefore;
		counter.addSample(duration);
	});
};

JobManager.prototype.minuteElapsed = function(now) {
	var me=this;

	var config = configLib.getConfig();
	var coresToUseForAggregation = config.coresToUseForAggregation || 1;
	var aggregationInput = "";
	var msBefore = 0;
	var plan;

	var execConfig = {
	    maxBuffer: 50 * 1024 * 1024,
	    env: {
	    }
	};

	if (!me.noAggregations) {
		if (now.getUTCMinutes() % 10 == 1) {
			try {
				msBefore = new Date().getTime();
				me.logger.info("Started aggregating minutes");

				// Aggregate previous 10 minutes
	 
				aggregationInput = "minutes_ram/" + now.addMinutes(-10).toISOString().substring(0,"2013-08-18T19:5".length) + "*/*/*";
				plan = "ls " + aggregationInput + " | xargs -n 1 -P " + coresToUseForAggregation + " -I {} ./sort-file-faster.sh {};" +
					"ls " + aggregationInput + " | " +
				    	"awk -F'[/.]' '{key=$3\"/\"$4; map[key]=map[key]\" \"$0} END { for (key in map) { print map[key];} }' | " +
						"xargs -n 1 -P " + coresToUseForAggregation + " -I {} sh -c 'echo {} | awk -v level=minutes -f merge-aggregate.sh'";

				exec(plan, execConfig, function(error, out, err) {  
					if (error) {
						me.logger.error("Failed aggregating minutes " + aggregationInput + ": " + error);
					} else if (err) {
						me.logger.error("Error aggregating minutes " + aggregationInput + ": " + error);
					} else {
						me.logger.debug(out);
					}
				});

			} catch (ex) {
				me.logger.error("Exception aggregating minutes: " + ex.stack);
			}
		}

		if (now.getUTCMinutes() == 15) {
			try {
				msBefore = new Date().getTime();
				me.logger.info("Started aggregating hours");

				aggregationInput = "minutes/" + now.addMinutes(-30).toISOString().substring(0,"2013-08-18T19".length) + "*/*/*";
				plan = "ls " + aggregationInput + " | xargs -n 1 -P 10 -I {} ./sort-file-faster.sh {};" +
					"ls " + aggregationInput + " | " +
				    	"awk -F'[/.]' '{key=$3\"/\"$4; map[key]=map[key]\" \"$0} END { for (key in map) { print map[key];} }' | " +
						"xargs -n 1 -P " + coresToUseForAggregation + " -I {} sh -c 'echo {} | awk -v level=hours -f merge-aggregate.sh'";

				exec(plan, execConfig, function(error, out, err) {  
					if (error) {
						me.logger.error("Failed aggregating hours " + aggregationInput + ": " + error);
					} else if (err) {
						me.logger.error("Error aggregating hours " + aggregationInput + ": " + error);
					} else {
						me.logger.debug(out);
					}
				});

			} catch (ex) {
				me.logger.error("Exception aggregating hours: " + ex.stack);
			}
		}

		if (now.getUTCMinutes() == 10 && now.getUTCHours() == 1) {
			try {
				msBefore = new Date().getTime();
				me.logger.info("Started aggregating days");

				aggregationInput = "hours/" + now.addHours(-24).toISOString().substring(0,"2013-08-18".length) + "*/*/*";
				plan = "ls " + aggregationInput + " | xargs -n 1 -P 10 -I {} ./sort-file-faster.sh {};" +
					"ls " + aggregationInput + " | " +
				    	"awk -F'[/.]' '{key=$3\"/\"$4; map[key]=map[key]\" \"$0} END { for (key in map) { print map[key];} }' | " +
						"xargs -n 1 -P " + coresToUseForAggregation + " -I {} sh -c 'echo {} | awk -v level=days -f merge-aggregate.sh'";

				exec(plan, execConfig, function(error, out, err) {  
					if (error) {
						me.logger.error("Failed aggregating days " + aggregationInput + ": " + error);
					} else if (err) {
						me.logger.error("Error aggregating days " + aggregationInput + ": " + error);
					} else {
						me.logger.debug(out);
					}
				});


			} catch (ex) {
				me.logger.error("Exception aggregating days: " + ex.stack);
			}
		}
	}

	me.syncSVN();
};

JobManager.prototype.hourElapsed = function(now) {
	var me=this;
};


JobManager.prototype.syncSVN = function() {
	var me=this;

	try {
		var msBefore = new Date().getTime();
		var config = configLib.getConfig();
		if (!config.svn || !config.svn.url || !config.svn.user || !config.svn.password) return;		
		var svnUrl = config.svn.url;
		var user = config.svn.user;
		var pwd = config.svn.password;

		me.logger.info("Started syncing with SVN: " + svnUrl.colorBlue());
		exec("./sync-svn.sh " + svnUrl + " " + user + " " + pwd, function(error, out, err) {  
			if (error) {
				me.logger.error("Failed syncing svn: " + error);
			} else if (err) {
				me.logger.error("Error syncing svn: " + err);
			}

			var msAfter = new Date().getTime();
			var duration = msAfter-msBefore;
			me.logger.info(out);
			me.logger.info("Syncing with SVN took " + (duration + "ms").colorMagenta());
		});
	}
	catch (ex) {
		me.logger.error("Exception committing svn changes: " + ex.stack);
	}
};


module.exports.JobManager = JobManager;