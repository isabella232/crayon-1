// Imports
var logger = require("./logger.js");
var contextLib = require("./callContext.js");
var measurements = require("./measurements.js");
var configLib = require("./configuration.js");
var net = require('net');
var countersLib = require("./counter.js");
var util = require("util");

var graphiteMessagesCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "graphite API messages", "crayon");

module.exports.init = function(portForGraphiteFormat) {
	logger.info("Starting graphite metric format listener on port " + (portForGraphiteFormat.toString()).colorMagenta());
	var config = configLib.getConfig();
	var graphiteHostnameIndexInNamespace = config.graphiteHostnameIndexInNamespace;
	var graphiteComponentIndexInNamespace = config.graphiteComponentIndexInNamespace;

	net.createServer(function(socket) {
	  	try {
			socket.buffer = [];
			socket.name = socket.remoteAddress + ":" + socket.remotePort;
			logger.info("got new socket connection: " + (socket.name).colorBlue());
			socket.on('data', function (data) {
				try {
					socket.buffer.push(data.toString("utf8"));
				} catch (ex) {
					logger.error("Failed handling graphite message (during receive): " + ex.stack);
				}
			});
						
			socket.on('error', function(err) {
				logger.error("socket error occored (graphite) "+util.inspect(err));
			});

			socket.on('close', function() {
				try {
					graphiteMessagesCounter.increment();

				    var body = socket.buffer.join("");

				    var lines = body.split("\n");
				    var docs = [];
				    logger.debug("Got " + (lines.length.toString()).colorBlue() + " metrics via graphite API");

				    for (var lineIndex = 0; lineIndex < lines.length; ++lineIndex) {
				    	var line = lines[lineIndex].trim().replace(/[ ]+/g," ");
				    	if (line.length == 0) continue;

				    	var lineParts = line.split(' ');
				    	if (lineParts.length < 3) {
				    		throw new Error("Failed reading graphite message, invalid line: " + line);
				    	}

				    	var metric = lineParts[0];
				    	var value = Number(lineParts[1]);
				    	var time = Number(lineParts[2]);
						var server = null;
						var component = null;

						var metricParts = null; 
						var indicesToRemove = [];

						if (graphiteHostnameIndexInNamespace != null) {
							metricParts = metricParts || metric.split('.');
							server = metricParts[graphiteHostnameIndexInNamespace - 1];
							indicesToRemove.push(graphiteHostnameIndexInNamespace - 1);
						}

						if (graphiteComponentIndexInNamespace != null) {
							metricParts = metricParts || metric.split('.');
							component = metricParts[graphiteComponentIndexInNamespace - 1];
							indicesToRemove.push(graphiteComponentIndexInNamespace - 1);
						}

						if (indicesToRemove.length > 0) {
							indicesToRemove.sort().reverse();
							for (var i in indicesToRemove) {
								var indexToRemove = indicesToRemove[i];
								metricParts.splice(indexToRemove, 1);
							}
							metric = metricParts.join(".");
						}

						var doc = {
							n: metric,
							s: server,
							c: component,
							val: value,
							t: time
						};
						docs.push(doc);
				    }

				    var callContext = contextLib.mockCallContext(
						"http://localhost/addRaw", 
						function() {
							// completed request
						},
						docs
					);

					callContext.body = JSON.stringify(docs);
					callContext.provider = "graphiteAPI";
					measurements.addRaw(callContext);
				} catch (ex) {
					logger.error("Failed handling graphite message: " + ex.stack);
				}
			});
		} catch (ex) {
			logger.error("Failed handling graphite message (during connection): " + ex.stack);
		}

	}).listen(portForGraphiteFormat);		
};