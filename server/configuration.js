var fs = require('fs');
var config = {};
var logger;
module.exports.setLogger = function(l) { logger = l; };
module.exports.getConfig = function() { return config; };
module.exports.setConfigValue = function(name, value) { config[name] = value; };
module.exports.setConfig = function(configText) {
	if (configText != null) {

		// We're getting the text prettefied from the client, we want to keep it that way
		// So we're going to assume we get it as text, and save it like we got it.
		if (typeof configText != "string") {
			configText = JSON.stringify(configText);
		}

		console.log(configText); //TODO:REVIEW - change to logger
		config = JSON.parse(configText);
		logger.info("Configuration changed: \n" + JSON.stringify(config));
		saveConfigToDisk(configText);

	} else {
		logger.error("Can not change configuration to a null value");
	}
};

var reloadConfigFileFromDisk = function() {
	var text = fs.readFileSync("crayon.conf");
	config = JSON.parse(text);
};

var saveConfigToDisk = function(configText) {
	fs.writeFile("crayon.conf", configText, function(err) {
	    if(err) {
	        logger.error("Failed persisting configuration: " + err);
	    } else {
	        logger.info("Configuration persisted.");
	    }
	}); 
};


//TODO:REVIEW use fs.watch to trigger a config reload. Can Crayon handle dynamic config changes? Do we need to emit any event when the config changes?

reloadConfigFileFromDisk();