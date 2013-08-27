//TODO:REVIEW synchronous outputting to the console should be eliminated and instead replaced by evented/async output to a file
//multiple options are here - https://github.com/joyent/node/wiki/modules#wiki-logs
//Winston seems to have what a "real" server app really requires - https://github.com/flatiron/winston

var sys = require("util"); 
var countersLib = require("./counter.js");

// Keep a counter of errors
var errorCounter = countersLib.getOrCreateCounter(countersLib.systemCounterDefaultInterval, "Errors Logged", "crayon");

// The log date prefix for each record
var getLogDate = function() {
	var t = new Date();
	return t.toISOString();
};

var debug = function(str) {
	sys.puts("[" + getLogDate() + "] [DEBUG] " + str);
};

var error = function(str) {
	errorCounter.increment();
	sys.puts(("[" + getLogDate() + "] [ERROR] " + str).colorRed());
};

var info = function(str) {
	sys.puts("[" + getLogDate() + "] [INFO] " + str);
};

var warn = function(str) {
	sys.puts(("[" + getLogDate() + "] [WARN] " + str).colorYellow());
};

module.exports.debug = debug;
module.exports.info = info;
module.exports.error = error;
module.exports.warn = warn;