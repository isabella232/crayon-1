// Global members
var serverPort = 54321;
var isJobManager = false;
var uiOnly = false;
var hostname = require("os").hostname();
var portForGraphiteFormat = null;
var noAggregations = false;
var demoMode = false;

for (var argIndex in process.argv) {
	var arg = process.argv[argIndex];
	if (arg.indexOf("--port=") === 0) serverPort=Number(arg.substring("--port=".length));
	if (arg.indexOf("--graphite-api-port=") === 0) portForGraphiteFormat=Number(arg.substring("--graphite-api-port=".length));
	if (arg.indexOf("--jobmanager") === 0) isJobManager = true;
	if (arg.indexOf("--noAggregations") === 0) noAggregations = true;
	if (arg.indexOf("--uiOnly") === 0) uiOnly = true;
	if (arg.indexOf("--demoMode") === 0) { demoMode = true; noAggregations = true; }
}

console.log(process.argv); //TODO:REVIEW - change to logger
console.log("Hostname: " + hostname); //TODO:REVIEW - change to logger

// Priority imports
var countersLib = require("./counter.js");
countersLib.setHostname(hostname);
countersLib.setCrayonId(serverPort);

//TODO:REVIEW we should probably commit to git (at least for the production servers) node_modules
//See http://www.futurealoof.com/posts/nodemodules-in-git.html

// Imports
var sys = require("util"); 
var http = require("http");  
var path = require("path");
var fs = require("fs");
var logger = require("./logger.js");
var contextLib = require("./callContext.js");
var measurements = require("./measurements.js");
var dashboards = require("./dashboards.js");
var thresholds = require("./thresholds.js");
var graphiteUtil = require("./graphite-util.js");
var configLib = require("./configuration.js");
var pluginManager = new (require("./pluginManager.js").PluginManager)(logger,contextLib);
var JobManager = require("./jobManager.js").JobManager;
var mail = require("./crayonMail.js");
var rabbitmq = require("./rabbitmq-util.js");


//TODO:REVIEW cosmetic - either use an init function per module (instead of multiple functions), or use a global config object that everyone uses and rely on node.js module caching
// Pass global instances to sub modules
contextLib.setLogger(logger);
configLib.setLogger(logger);
measurements.setLogger(logger);
measurements.setContextLib(contextLib);
dashboards.setLogger(logger);
dashboards.setContextLib(contextLib);
thresholds.setLogger(logger);
thresholds.setContextLib(contextLib);

// Init sub modules
pluginManager.loadPlugins();

// ===================================
// =========== Startup ===============
// ===================================

if (demoMode) {
	logger.warn("Running in demo mode!");
}


//TODO:REVIEW Cosmetic. Why is mail.connect critical in the startup chain? can't the graphing system work without it? 
//Also email.server.connect is synchornous, so why use the callback pattern at all? just name it connectSync and eliminate the callback. 
mail.connect(function(err) {
	if (err) return;	//TODO:REVIEW add logging

	// Start server
	logger.info("Creating server on " + serverPort.toString().colorMagenta() + "...");
	var httpServer = http.createServer(function(request,response){  
		
		//logger.info("Got request: [" + (request.method||"NoMethod") + "] " + request.url.colorBlue());
		var callContext = new contextLib.CallContext(request, response);

		callContext.parseArgs(function(err) {
			if (err) {
				callContext.respondText(400, "Error parsing arguments of post request: " + err);
				logger.error("Error parsing arguments of post request: " + err);
				return;
			}

			if (callContext.uri == "/addAggregate") {
				return measurements.addAggregate(callContext);
			} else if (callContext.uri == "/addRaw") {
				return measurements.addRaw(callContext);
			} else if (callContext.uri == "/find") {
				return measurements.find(callContext);
			} else if (callContext.uri == "/dashboards") {
				return pluginManager.getDashboards(callContext);
			} else if (callContext.uri == "/matchSeriesName") {
				return measurements.matchSeriesName(callContext);
			} else if (callContext.uri == "/getPort") {
				return callContext.respondText(200, serverPort.toString());
			} else if (callContext.uri == "/echo") {
				return callContext.respondJson(200, callContext.args||{});
			} else if (callContext.uri == "/getConfig") {
				return callContext.respondJson(200,configLib.getConfig());
			} else if (callContext.uri == "/setConfig") {
				if (demoMode) {
					callContext.respondText(200,"Feature Not Available In Demo Mode");
					return;
				}

				configLib.setConfig(callContext.body);
				return callContext.respondText(200,"OK");
			} else if (callContext.uri == "/saveDashboard") {
				if (demoMode) {
					callContext.respondText(200,"Feature Not Available In Demo Mode");
					return;
				}

				return dashboards.saveDashboard(callContext);
			} else if (callContext.uri == "/deleteDashboard") {
				if (demoMode) {
					callContext.respondText(200,"Feature Not Available In Demo Mode");
					return;
				}

				return dashboards.deleteDashboard(callContext);
			} else if (callContext.uri == "/saveThresholds") {
				if (demoMode) {
					callContext.respondText(200,"Feature Not Available In Demo Mode");
					return;
				}

				return thresholds.saveThresholds(callContext);
			} else if (callContext.uri.indexOf("plugins/") > 0 && pluginManager.tryRun(callContext)) {
				return;
			}
			
			callContext.getRequestedFile();
		});
	});
	httpServer.listen(serverPort);	
	logger.info("Server started");

	if (!uiOnly) {
		if (isJobManager) {
			var jobManager = new JobManager(logger, noAggregations);
		} else {
			rabbitmq.connect();
		}
	}

	if (portForGraphiteFormat) {
		graphiteUtil.init(portForGraphiteFormat);
	}
});