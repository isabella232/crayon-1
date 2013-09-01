var winston = require('winston');

// Keep a counter of errors
var errorCallback;
var crayonCustomLog = {
	    levels: {
	      "[DEBUG]": 0,
	      "[INFO]": 1,
	      "[WARN]": 2,
	      "[ERROR]": 3,
	      "[FATAL]": 4
	    },
	    colors: {
	      "[DEBUG]": 'blue',
	      "[INFO]": 'green',
	      "[WARN]": 'yellow',
	      "[ERROR]": 'red',
	      "[FATAL]": 'red'
	    },
	  };

var initialized = false;
var consoleLog = true;
var fileLog = false;
var logFilename = __dirname+"/crayon.log";

function config(toConsole, toFile, filename) {
	if (typeof toConsole == "boolean")
		consoleLog = toConsole;
	if (typeof toFile == "boolean")
		fileLog = toFile;
	if (typeof filename == "string")
		logFilename = __dirname+"/"+filename;
	
	winston.setLevels(crayonCustomLog.levels);
	winston.addColors(crayonCustomLog.colors);
	
	try {
		if (consoleLog) {
			try {
				winston.remove(winston.transports.Console);
			}
			catch (ex) { //ignore removal error - workaround for winston issue
			}
			winston.add(winston.transports.Console, {level: '[DEBUG]', timestamp: 'true', colorize: 'true'});
		}
		else {
			winston.remove(winston.transports.Console);
		}
	}
	catch (ex) {
		console.log("error configuring winston console "+ex);
	}
	
	try {
		if (fileLog) {
			try {
				winston.remove(winston.transports.File);
			}
			catch (ex) { //ignore removal error - workaround for winston issue
			}
			winston.add(winston.transports.File, {
			    filename: logFilename,
			    handleExceptions: true,
			    timestamp: true,
			    json: false,
			    level: '[DEBUG]',
			    colorize: false,
			    maxsize: 10000000,
			    maxFiles: 10
			  });
		}
		else {
			winston.remove(winston.transports.File);
		}
	}
	catch (ex) {
		console.log("error configuring winston log file "+ex);
	}
	
}

function setErrorCallback(cb) {
	errorCallback = cb;
}

var debug = function(str) {
	winston.log('[DEBUG]', str);
};

var error = function(str) {
	if (typeof errorCallback == "function")
		errorCallback();
	winston.log('[ERROR]', str);
};

var info = function(str) {
	winston.log('[INFO]', str);
};

var warn = function(str) {
	winston.log('[WARN]', str);
};

var fatal = function(str) {
	winston.log('[FATAL]', str);
	process.exit(1);
};

function init() {
	if (initialized) {
		console.log("LOGGING INITIALIZED TWICE - SHOULD NEVER HAPPEN"); //node.js caches the modules, so the initialization code should only be called once by node.js
		process.exit(1);
		return;
	}
	
	config(); //using defaults
	
	initialized = true;
}

init();

module.exports.debug = debug;
module.exports.info = info;
module.exports.error = error;
module.exports.warn = warn;
module.exports.fatal = fatal;
module.exports.setErrorCallback = setErrorCallback;
module.exports.config = config;