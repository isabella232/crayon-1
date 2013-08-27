//var countersLib = require("./counter.js");
var winston = require('winston');

// Keep a counter of errors
var errorCallback;
var crayonCustomLog = {
	    levels: {
	      "[DEBUG]": 0,
	      "[INFO]": 1,
	      "[WARN]": 2,
	      "[ERROR]": 3
	    },
	    colors: {
	      "[DEBUG]": 'blue',
	      "[INFO]": 'green',
	      "[WARN]": 'yellow',
	      "[ERROR]": 'red'
	    },
	    filename: __dirname+'/crayon.log' 
	  };
var initialized = false;

function setErrorCallback(cb) {
	errorCallback = cb;
}

var debug = function(str) {
	winston.log('[DEBUG]', str);
};

var error = function(str) {
	if (typeof errorCallback == "function")
		errorCallback();
	//winston.error(str);
	winston.log('[ERROR]', str);
};

var info = function(str) {
	//winston.info(str);
	winston.log('[INFO]', str);
};

var warn = function(str) {
	//winston.warn(str);
	winston.log('[WARN]', str);
};

function init() {
	if (initialized) {
		console.log("LOGGING INITIALIZED TWICE - SHOULD NEVER HAPPEN"); //node.js caches the modules, so the initialization code should only be called once by node.js
		return;
	}
	
	
	winston.setLevels(crayonCustomLog.levels);
	winston.addColors(crayonCustomLog.colors);
	winston.remove(winston.transports.Console);
	winston.add(winston.transports.Console, {level: '[DEBUG]', timestamp: 'true', colorize: 'true'});
	winston.add(winston.transports.File, {
	    filename: crayonCustomLog.filename,
	    handleExceptions: true,
	    timestamp: true,
	    json: false,
	    level: '[DEBUG]',
	    colorize: false,
	    maxsize: 10000000,
	    maxFiles: 10
	  });
	initialized = true;
}

init();

module.exports.debug = debug;
module.exports.info = info;
module.exports.error = error;
module.exports.warn = warn;
module.exports.setErrorCallback = setErrorCallback;