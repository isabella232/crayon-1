
var measurements = require("./measurements.js");
var dates = require("./dates.js");
var counterByKey = {};
var crayonId = "";
var hostname = null;
var shortHostname = null;

module.exports.systemCounterDefaultInterval = 1;

setInterval(function() {
	try {
		var now = new Date();
		var allMetrics = [];
		for (var key in counterByKey) {
			var counter = counterByKey[key];
			if (counter.keepState && counter.args.N == 0) continue;
	
			var metric = counter.getMetric();
			metric.t = now;
			allMetrics.push(metric);
			counter.resetCounter();
		}
	
		measurements.addBulkTimeslotsByDate(1024*allMetrics.length,allMetrics,"counter", function() {});
	} catch (ex) {
		console.log("Cannot flush counters: " + ex.stack); //TODO:REVIEW switch to configured logger
	}
}, 1000);

module.exports.setHostname = function(h) {
	hostname = h;
	shortHostname = h.split('.')[0];
};

module.exports.setCrayonId = function(c) { 
	crayonId = c; 
};

module.exports.getCrayonId = function(c) { 
	return crayonId; 
};

module.exports.getHostname = function(c) { 
	return hostname; 
};

module.exports.getShortHostname = function(c) { 
	return shortHostname; 
};

module.exports.stopAll = function() {
	for (var counter in counterByKey) {
		counterByKey[counter].stop();
	}
};

module.exports.flushAll = function() {
	for (var counter in counterByKey) {
		counterByKey[counter].flushCounter();
	}
};

module.exports.getOrCreateCounter = function(secondsInterval, name, component, server, keepState) {
	if (typeof server != "string") server = shortHostname;
	if (typeof keepState != "boolean") keepState = false;

	var key = name + "_" + component + "_" + server;
	var counter = counterByKey[key];
	if (typeof counter == "object") return counter;

	counter = new Counter(secondsInterval, name, component, server, keepState);
	counterByKey[key] = counter;
	return counter;
};

function Counter(secondsInterval, name, component, server, keepState) {
	var me=this;	
	me.args = {};
	if (server != null) me.args.s = server;
	if (component != null) me.args.c = component + crayonId;
	me.args.n = name;
	me.keepState = keepState;
	me.resetCounter();
	//logger.info("New Counter Created: " + JSON.stringify(me.args));
	//me.timer = setInterval(function() { me.flushCounter() }, secondsInterval*1000);
}

Counter.prototype.resetCounter = function() {
	var me=this;
	me.args.m = 0;
	me.args.M = 0;
	me.args.N = 0;
	me.args.A = 0;
	me.args.V = 0;
	me.args.S = 0;
	me.incrementLastValue = 0;
};

Counter.prototype.getMetric = function() {
	var me=this;

	var argsCopy = {};
	for (var key in me.args) {
		argsCopy[key] = me.args[key];  
	}
	return argsCopy;
};

Counter.prototype.flushCounter = function() {
	var me=this;
	//if (me.args.N > 0) {

		me.args.t = new Date();
		try {
			var argsCopy = {}; //TODO:REVIEW why not use getMetric() . No need to re-implement here.
			for (var key in me.args) {
				argsCopy[key] = me.args[key];
			}

			//if (me.keepState && me.args.N == 0) {
			//	return;
			//}

			measurements.addBulkTimeslotsByDate(1024,[argsCopy],"counter", function() {});
			me.resetCounter();
		} catch (ex) {
			console.log("Cannot flush counter: " + ex.stack); //TODO:REVIEW use the configured logger
			// counter cannot be written, error is ignored not to spam
		}
	//}
	
};

Counter.prototype.stop = function() {
	var me=this;
	try {
		if (me.timer) clearInterval(me.timer);
	} catch (ex) {} ////TODO:REVIEW add log message
};

Counter.prototype.addSample = function(newValue) {
	var me=this;

	var oldAverage = me.args.A;
	me.args.m = (me.args.m < newValue ? me.args.m : newValue);
	me.args.M = (me.args.M > newValue ? me.args.M : newValue);
	me.args.A = ((me.args.N * me.args.A) + (newValue)) / (me.args.N + 1);
	me.args.N += 1;
	me.args.S += newValue;
	me.args.V += (newValue - oldAverage) * (newValue - me.args.A);
	// STDev S(1) = 0, S(k) = S(k-1) + (x(k) - M(k-1)) * (x(k) - M(k))
};

// Sometimes it's easier to just call increment
// Although we could have used the N field of different counter, it's simpler to understand that way
// TODO: Should consider changing this
Counter.prototype.increment = function(count) {
	var me=this;
	if (typeof count != "number") count = 1;
	me.incrementLastValue += count;
	me.args.m = me.incrementLastValue;
	me.args.M = me.incrementLastValue;
	me.args.A = me.incrementLastValue;
	me.args.S = me.incrementLastValue;
	me.args.N += 1;
	me.args.V = 0;
};

module.exports.Counter = Counter;