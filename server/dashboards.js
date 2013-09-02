var logger = require("./logger.js");
var path = require("path");
var dates = require("./dates.js");
var prototypes = require("./prototypes.js");
var countersLib = require("./counter.js");
var fs = require('fs');
var urlUtils = require("./url-utils.js");
var path = require("path");

var staticDir = path.normalize(__dirname + '/../static');
var dashboardsDir = "/dashboards/";
var dsahboardsConf = staticDir + dashboardsDir + "dashboards.conf";


// Set the global services for this module
var contextLib;
module.exports.setContextLib = function(l) { contextLib = l; };

//security check for URL validity after building the URL from an ID received as a request parameter
function getDashboardFile(id) {
	var newPath = path.normalize(dashboardsDir + id + ".json"); 
	
	if (!urlUtils.validateUrlString(newPath, dashboardsDir)) {
		logger.error("illegal URL: " + dashboardsDir);
		return null;
	}
	
	return newPath;
}

module.exports.deleteDashboard = function(callContext) {
	var dashboardId = callContext.args["id"];
	var newPath = getDashboardFile(dashboardId); 
	
	if (newPath === null) {
		callContext.respondText(401, "illegal URL");
		logger.error("illegal URL based on dashboard id: " + dashboardId);
		return;
	}
	
	var confText = fs.readFileSync(dsahboardsConf); //TODO:REVIEW better use fs.readFile
	var confLines = confText.toString().split('\n');
	var newConfLines = [];
	for (var i in confLines) {
		var confLine = confLines[i];
		if (confLine.indexOf(newPath) != -1) {
		} else {
			newConfLines.push(confLine);
		}
	}

	var newConfText = newConfLines.join("\n");
	fs.unlink(staticDir + newPath, function(err) { 
    	if(err) {
	        callContext.respondJson(500,{error:"Failed removing dashboard from '" + newPath + "':" + err});
	        logger.error("failed to unlink "+newPath+": "+err);
	        return;
	    } 

		fs.writeFile(dsahboardsConf, newConfText, function(err) {
		    if(err) {
		        callContext.respondJson(500, {error:"Failed saving dashboards.conf: " + err});
		        logger.error("Failed saving dashboards.conf: " + err);
		        return;
		    } 

		    callContext.respondJson(200, {});
		}); 
	});
};

module.exports.saveDashboard = function(callContext) {
	var dashboardText = callContext.body;
	var dashboard = JSON.parse(dashboardText);
	
	var newPath = getDashboardFile(dashboard.id); 
	
	if (newPath === null) {
		callContext.respondText(401, "illegal URL");
		logger.error("illegal URL based on dashboard id: " + dashboard.id);
		return;
	}
	
	
	var confText = fs.readFileSync(dsahboardsConf); //TODO:REVIEW better use fs.readFile
	var confLines = confText.toString().split('\n');
	var newConfLines = [];
	var added = false;
	for (var i in confLines) {
		var confLine = confLines[i];
		if (confLine.indexOf(newPath) != -1) {
			newConfLines.push(dashboard.sidebarText + " = " + newPath);
			added = true;
		} else {
			newConfLines.push(confLine);
		}
	}

	if (!added) {
		newConfLines.push(dashboard.sidebarText + " = " + newPath);
	}

	var newConfText = newConfLines.join("\n");
	fs.writeFile(staticDir + newPath, dashboardText, function(err) { 
    	if(err) {
	        callContext.respondJson(500,{error:"Failed saving dashboard to '" + newPath + "':" + err});
	        logger.error("Failed saving dashboard to '" + newPath + "':" + err);
	        return;
	    } 

		fs.writeFile(dsahboardsConf, newConfText, function(err) { 
		    if(err) {
		        callContext.respondJson(500, {error:"Failed saving dashboards.conf: " + err});
		        logger.error("Failed saving dashboards.conf: " + err);
		        return;
		    } 

		    callContext.respondJson(200, {});
		}); 
	});
};