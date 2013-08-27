var sys = require("sys");
var my_http = require("http");  
var path = require("path");
var fs = require("fs");
var logger = require("./logger.js");
require("./prototypes.js");
var countersLib = require("./counter.js");
var configLib = require("./configuration.js");
var contextLib = require("./callContext.js");
var measurements = require("./measurements.js");

contextLib.setLogger(logger);
configLib.setLogger(logger);
measurements.setLogger(logger);
measurements.setContextLib(contextLib);
configLib.setConfigValue("decimalPointRounding", null);

var failures = 0;
var tests = {};
var testsToRun = [];

function TestContext(name, onCompleted) {
	this.name = name;
	this.completed = onCompleted;
}
TestContext.prototype.Fail = function(message) {
	var me=this;
	console.log(("Test " + me.name + " failed with error: " + message).colorRed());
	if (this.afterTest) this.afterTest();
	failures++;
	me.completed();
};
TestContext.prototype.Pass = function() {
	var me=this;
	console.log(("Test " + me.name + " passed.").colorGreen());
	if (this.afterTest) this.afterTest();
	me.completed();
};
	
function runAllTests() {	
	for (var testName in tests) {
		testsToRun.push(testName);
	}
	
	runNextTest();
}

function allTestsCompleted() {
	console.log("All tests completed, shutting down remaining open resources");	
}

function runNextTest() {
	if (testsToRun.length === 0 || failures > 0) {
		allTestsCompleted();
		return;
	}
	
	var nextTest = testsToRun.shift();
	
	try {
		console.log(("Running " + nextTest + "...").colorMagenta());
		var context = new TestContext(nextTest, runNextTest);
		tests[nextTest](context);
	} catch (ex) {
		console.error(("Test " + nextTest + " failed with exception: \n" + ex.stack).colorRed());
	}
}

function mockCallContext(requestUrl, onEnd, args) {
	var me=this;
	var mockRequest = {url: requestUrl};
	var mockResponse = { 
		writeHeader: function(code, headers) {
			me.headers=headers;
			me.code = code;
		},
		write: function(body,encoding) {
			me.body = body;
			me.encoding = encoding;
		},
		end: function() {
			onEnd();
		}
	};
	var callContext = new contextLib.CallContext(mockRequest, mockResponse);
	callContext.parseArgs(function() {});
	if (args != null) callContext.args = args;
	callContext.verbose = true;
	return callContext;
}

tests = {
	testCombineAggregateRows: function(testContext) {
		testContext.afterTest = function() { mongo.closeDB(); countersLib.stopAll(); };
		mongo.connect(function (err) {
			if (err) {
				testContext.Fail("Failed connecting to mongo: " + err);
			} else {
			
				url1= "http://localhost:13855/addAggregate?time=2013-06-23%2008:10:05&min=1&max=7&samples=6&ave=4.166667&name=" + testContext.name + "&server=other-pc&stdevInc=20.83333";
				url2= "http://localhost:13855/addAggregate?time=2013-06-23%2008:10:06&min=3&max=30&samples=5&ave=17.6&name=" + testContext.name + "&server=other-pc&stdevInc=419.2";
				
				var rowsThatShouldBeCreated = [
					{ "t" : "2013-06-23", "m" : 1, "M" : 30, "N" : 11, "A" : 10.272727454545453, "n" : testContext.name, "s" : "other-pc", "V" : 84.74379912947664,"unit" : "d"},
					{ "t" : "2013-06-23 08", "m" : 1, "M" : 30, "N" : 11, "A" : 10.272727454545453, "n" : testContext.name, "s" : "other-pc", "V" : 84.74379912947664, "unit" : "h"},
					{ "t" : "2013-06-23 08:10", "m" : 1, "M" : 30, "N" : 11, "A" : 10.272727454545453, "n" : testContext.name, "s" : "other-pc", "V" : 84.74379912947664, "unit" : "m"},
					{ "t" : "2013-06-23 08:10:05", "m" : 1, "M" : 7, "N" : 6, "A" : 4.166667, "n" : testContext.name, "s" : "other-pc", "V" : 20.83333, "unit" : "s"},
					{ "t" : "2013-06-23 08:10:06", "m" : 3, "M" : 30, "N" : 5, "A" : 17.6, "n" : testContext.name, "s" : "other-pc", "V" : 419.2, "unit" : "s"},
					{ "unit" : "counterName", "n" : "testCombineAggregateRows" }
				];
				
				mongo.clearTestsDatabase(function (err) {
					setTimeout(function () {
		
						var callsRemaining = 2;
						function onCallOver() {
							if (--callsRemaining === 0) {
								setTimeout(function() {
									mongo.assertRowsExists(rowsThatShouldBeCreated, function(assertErr) {
										if (assertErr == null) testContext.Pass();
										else testContext.Fail(assertErr);
									});
								}, mongoDelayMS);
							}
						}
						
						var callContext1 = mockCallContext(url1, onCallOver);
						var callContext2 = mockCallContext(url2, onCallOver);
						measurements.addAggregate(callContext1);
						measurements.addAggregate(callContext2);
					}, mongoDelayMS);
				});
			}
		});
	},
	testCombineRawRows: function(testContext) {
		testContext.afterTest = function() { mongo.closeDB();countersLib.stopAll(); };
		mongo.connect(function (err) {
			if (err) {
				testContext.Fail("Failed connecting to mongo: " + err);
			} else {
			
				url1= "http://localhost:13855/addRaw?time=2013-06-23%2008:10:05&val=1&name=" + testContext.name + "&server=other-pc";
				url2= "http://localhost:13855/addRaw?time=2013-06-23%2008:10:06&val=2&name=" + testContext.name + "&server=other-pc";
				
				var rowsThatShouldBeCreated = [
					{ "t" : "2013-06-23 08:10:05", "n" : testContext.name, "s" : "other-pc", "N" : 1, "m" : 1, "M" : 1, "A" : 1, "V" : 0, "unit" : "s" },
					{ "t" : "2013-06-23 08:10:06", "n" : testContext.name, "s" : "other-pc", "N" : 1, "m" : 2, "M" : 2, "A" : 2, "V" : 0, "unit" : "s" },
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23 08", "unit" : "h"},
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23", "unit" : "d" },
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23 08:10", "unit" : "m" },
					{ "unit" : "counterName", "n" : "testCombineRawRows" }
				];
				
				mongo.clearTestsDatabase(function (err) {
					setTimeout(function () {
		
						var callsRemaining = 2;
						function onCallOver() {
							if (--callsRemaining === 0) {
								setTimeout(function() {
									mongo.assertRowsExists(rowsThatShouldBeCreated, function(assertErr) {
										if (assertErr == null) testContext.Pass();
										else testContext.Fail(assertErr);
									});
								}, mongoDelayMS);
							}
						}
						
						var callContext1 = mockCallContext(url1, onCallOver);
						var callContext2 = mockCallContext(url2, onCallOver);
						measurements.addRaw(callContext1);
						measurements.addRaw(callContext2);
					}, mongoDelayMS);
				});
			}
		});
	},
	testCombineMultipleRawRowsInBulk: function(testContext) {
		testContext.afterTest = function() { mongo.closeDB();countersLib.stopAll(); };
		mongo.connect(function (err) {
			if (err) {
				testContext.Fail("Failed connecting to mongo: " + err);
			} else {
			
				var rows = [
					{ time: "2013-06-23T08:10:05Z", val:1, name:testContext.name, server:"other-pc" },
					{ time: "2013-06-23T08:10:06Z", val:2, name:testContext.name, server:"other-pc" }
				];
				
				var rowsThatShouldBeCreated = [
					{ "t" : "2013-06-23 08:10:05", "n" : testContext.name, "s" : "other-pc", "N" : 1, "m" : 1, "M" : 1, "A" : 1, "V" : 0, "unit" : "s" },
					{ "t" : "2013-06-23 08:10:06", "n" : testContext.name, "s" : "other-pc", "N" : 1, "m" : 2, "M" : 2, "A" : 2, "V" : 0, "unit" : "s" },
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23 08", "unit" : "h"},
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23", "unit" : "d" },
					{ "A" : 1.5, "M" : 2, "m" : 1, "n" : testContext.name, "N" : 2, "s" : "other-pc", "V" : 0.5, "t" : "2013-06-23 08:10", "unit" : "m" }
				];
				
				mongo.clearTestsDatabase(function (err) {
					setTimeout(function () {
		
						var callsRemaining = 1;
						function onCallOver() {
							if (--callsRemaining === 0) {
								setTimeout(function() {
									mongo.assertRowsExists(rowsThatShouldBeCreated, function(assertErr) {
										if (assertErr == null) testContext.Pass();
										else testContext.Fail(assertErr);
									});
								}, mongoDelayMS);
							}
						}
						
						var callContext = mockCallContext(url1, onCallOver, rows);
						measurements.addRaw(callContext);
					}, mongoDelayMS);
				});
			}
		});
	},
	testCounters: function(testContext) {
		testContext.afterTest = function() { mongo.closeDB(); countersLib.stopAll(); };
		mongo.connect(function (err) {
			if (err) {
				testContext.Fail("Failed connecting to mongo: " + err);
			} else {

				var rowsThatShouldBeCreated = [
					{ "c" : "crayon", "n" : "testCounter1", "m" : 0, "M" : 2, "N" : 2, "A" : 1.5, "V" : 0.5, "unit" : "h" },
					{ "c" : "crayon", "n" : "testCounter1", "m" : 0, "M" : 2, "N" : 2, "A" : 1.5, "V" : 0.5, "unit" : "m" },
					{ "c" : "crayon", "n" : "testCounter1", "m" : 0, "M" : 2, "N" : 2, "A" : 1.5, "V" : 0.5, "unit" : "s" },
					{ "c" : "crayon", "n" : "testCounter1", "m" : 0, "M" : 2, "N" : 2, "A" : 1.5, "V" : 0.5, "unit" : "d" },
					{ "c" : "crayon", "n" : "testCounter2", "m" : 2, "M" : 2, "N" : 2, "A" : 2, "V" : 0,     "unit" : "h" },
					{ "c" : "crayon", "n" : "testCounter2", "m" : 2, "M" : 2, "N" : 2, "A" : 2, "V" : 0,     "unit" : "m" },
					{ "c" : "crayon", "n" : "testCounter2", "m" : 2, "M" : 2, "N" : 2, "A" : 2, "V" : 0,     "unit" : "s" },
					{ "c" : "crayon", "n" : "testCounter2", "m" : 2, "M" : 2, "N" : 2, "A" : 2, "V" : 0,     "unit" : "d" },
					{ "unit" : "counterName", "n" : "testCounter1" },
					{ "unit" : "counterName", "n" : "testCounter2" }
				];
				
				mongo.clearTestsDatabase(function (err) {
					setTimeout(function () {
						//args are: secondsInterval, name, component, server
						var c1 = countersLib.getOrCreateCounter(1, "testCounter1", "crayon");
						c1.addSample(1);
						c1.addSample(2);
						var c2 = countersLib.getOrCreateCounter(1, "testCounter2", "crayon");
						c2.increment();
						c2.increment();

						setTimeout(function () {
							c1.stop();
							c2.stop();
							mongo.assertRowsExists(rowsThatShouldBeCreated, function(assertErr) {
								if (assertErr == null) testContext.Pass();
								else testContext.Fail(assertErr);
							});
						}, 2000);

					}, mongoDelayMS);
				});
			}
		});
	},

	testPerformance: function(testContext) {
		//console.log("Skipped".colorYellow());
		//testContext.Pass();
		//return;
		testContext.afterTest = function() { mongo.closeDB(); countersLib.stopAll(); };
		mongo.connect(function (err) {
			if (err) {
				testContext.Fail("Failed connecting to mongo: " + err);
			} else {
				
				var count = 16000;
				console.log("Creating docs");
				var docs = [];
				for (var i=0;i<count;++i) {
					docs.push({_id:i, t: "2013-06-23", N:7*i, A:1, V:0, n:"1234"});
				}

				mongo.clearTestsDatabase(function (err) {
					setTimeout(function () {

						//var remaining = count;
						var remaining = 1;
						var errors = 0;
						var beforeMs = new Date().getTime();

						var sendOneRequest = function(obj) {
							mongo.bulkInsertWithoutErrors('s',obj, function(err) {
							//mongo.upsertWithCollisionHandling('s',obj, function(){return obj;}, function(err) {
								if (err != null) {
									errors++;
									console.log(err);
								}

								if (--remaining === 0) {
									var afterMs = new Date().getTime();
									console.log("It took " + (afterMs - beforeMs).toString() + "ms");
								}
							});
						};

						//for (var i=0; i< count; ++i) {
						//	sendOneRequest(docs[i]);
						//}

						sendOneRequest(docs);
					
					}, mongoDelayMS);
				});
			}
		});
	}
};

runAllTests();