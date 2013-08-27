var defaultPallete = ["#6666E6","#32CD32","#FF00FF","#F57F00","#FF0000","#8A2BE2","#A52A2A","#5F9EA0","#6495ED","#DAA520","#DC143C","#FF1493","#696969","#2F4F4F","#7FFFD4","#808000","#D2691E"];
var colorCache = {};
String.prototype.colorHash = function() {
	var hashR,hashG,hashB = 0, i, char;
	if (this.length == 0) return "#000000";
	if (colorCache[this]) return colorCache[this];

	for (i = 0; i < this.length; i++) {
		char = this.charCodeAt(i);
		hashR = ((hashR<<5)-hashR)*571+char;
		hashG = ((hashG<<5)-hashG)*1213+char;
		hashB = ((hashB<<5)-hashB)*3559+char;
		hashR = hashR & hashR; // Convert to 32bit integer
		hashG = hashG & hashG; // Convert to 32bit integer
		hashB = hashB & hashB; // Convert to 32bit integer
	}
	if (hashR < 0) hashR = hashR * -1;
	if (hashG < 0) hashG = hashG * -1;
	if (hashB < 0) hashB = hashB * -1;
	
	var baseBrightness = 200;
	hashR = (hashR % baseBrightness) + (255 - baseBrightness);
	hashG = (hashG % baseBrightness) + (255 - baseBrightness);
	hashB = (hashB % baseBrightness) + (255 - baseBrightness);

	hashR = 255 - hashR;
	hashG = 255 - hashG;
	hashB = 255 - hashB;

	colorCache[this] = "#" + 
		('0'+hashR.toString(16)).slice(-2) + 
		('0'+hashG.toString(16)).slice(-2) +
		('0'+hashB.toString(16)).slice(-2);
	return colorCache[this];
}

Date.prototype.addDays = function(h) {    
   return new Date(this.getTime() + (h*60*60*1000*24));
};
	
Date.prototype.addHours = function(h) {    
   return new Date(this.getTime() + (h*60*60*1000));
};
	
Date.prototype.addMinutes = function(m) {    
   return new Date(this.getTime() + (m*60*1000)); 
};

Date.prototype.addSeconds = function(s) {    
   return new Date(this.getTime() + (s*1000));
};

var secondsInUnit = [];
secondsInUnit["seconds"] = 1;
secondsInUnit["second"] = 1;
secondsInUnit["sec"] = 1;
secondsInUnit["secs"] = 1;
secondsInUnit["minutes"] = 60*secondsInUnit["sec"];
secondsInUnit["minute"] = 60*secondsInUnit["sec"];
secondsInUnit["min"] = 60*secondsInUnit["sec"];
secondsInUnit["mins"] = 60*secondsInUnit["sec"];
secondsInUnit["hours"] = 60*secondsInUnit["min"];
secondsInUnit["hour"] = 60*secondsInUnit["min"];
secondsInUnit["days"] = 24*secondsInUnit["hour"];
secondsInUnit["day"] = 24*secondsInUnit["hour"];
secondsInUnit["weeks"] = 7*secondsInUnit["day"];
secondsInUnit["week"] = 7*secondsInUnit["day"];
secondsInUnit["months"] = 30*secondsInUnit["day"];
secondsInUnit["month"] = 30*secondsInUnit["day"];
secondsInUnit["years"] = 12*secondsInUnit["month"];
secondsInUnit["year"] = 12*secondsInUnit["month"];
numberNames = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
Number.prototype.understandTime = function(num) {return num.toString().understandTime();}
Date.prototype.understandTime = function(date) {return date;}
String.prototype.understandTime = function() {
	str = this;

	// No time
	if (str == null) return null;

	// Is Number
	if (!isNaN(Number(str))) {
		
		// Epoch
		time = new Date(Number(str));

		// Adjustment for unix date +%s
		if (time.getUTCFullYear() < 2000) {
			time = new Date(Number(str*1000));
		}

		return time;
	} 

	// Is String
	strLower = str.toLowerCase();
	if (strLower == "now") return new Date();
	if (strLower == "lasthour") return new Date().addHours(-1);
	if (strLower == "lastday") return new Date().addDays(-1);
	if (strLower == "lastmonth") return new Date().addDays(-30);

	var wordsLower = strLower.split(' ');
	
	function understandRelativeTime() {
		if (wordsLower.length == 0) return null;
		
		// Assume default unit is "1" unless specified a number (e.g. minute ago)
		var unit = 1
		if (wordsLower.length > 1) {
			var numberNameIndex = numberNames.indexOf(wordsLower[0]);
			var asNumber = Number(wordsLower[0]);
			if (numberNameIndex != -1) {
				unit = numberNameIndex;
			} else if (!isNaN(asNumber)) {
				unit = asNumber;
			} else {
				return null;
			}

			wordsLower.shift();
		}

		var secondsMultiplier = secondsInUnit[wordsLower[0]];
		if (secondsMultiplier == null) return null;

		return new Date(new Date().getTime() - (unit * secondsMultiplier * 1000));
	}

	// last X unit
	if (wordsLower[0] == "last") {
		wordsLower.shift();

		// Do the time parsing
		return understandRelativeTime();

	// X unit ago
	} 

	if (wordsLower[wordsLower.length - 1] == "ago") {
		wordsLower.pop();
		if (wordsLower.length == 0) return null;

		// an Hour ago, a minute ago
		if (wordsLower[0] == "a" || wordsLower[0] == "an") wordsLower.shift();

		// Do the time parsing
		return understandRelativeTime();
	}

	// Default new date
	return new Date(strLower);
}


Date.prototype.toShellDateString = function(unit) { 
	return this.toISOString();
};

String.prototype.toShellDateString = function(unit) { 
	return this.understandTime().toShellDateString(unit);
};


Date.prototype.toMongoDateString = function(unit) { 
	//if (unit == 's') {
	//	return Math.round(this.getTime() / 1000).toString(16);
	//} else {
   		return this.toISOString().replace("T","_").substring(0,19)
   	//}
};

String.prototype.toMongoDateString = function(unit) { 
	return this.understandTime().toMongoDateString(unit);
};



window.benchmarkFromLast = function(msg) {
	var now = new Date().getTime();
	if (lastBenchmarkTime != null) {
		console.log(msg + " " + (now - lastBenchmarkTime).toString() + "ms");
	}
	lastBenchmarkTime = now;
}

var dateDiffMinutes = function(date1, date2) {
	var diff = date1.getTime() - date2.getTime(); 
	return (diff / (60*1000)); 
}

var dateDiffSeconds = function(date1, date2) {
	var diff = date1.getTime() - date2.getTime(); 
	return (diff / (1000)); 
}

Date.prototype.toMongoDate = function() {
	return this;
}
String.prototype.toMongoDate = function() {
	var mongoDateString = this;

	// just year 
	if (mongoDateString.length == 4) mongoDateString += "-01-01 00:00:00";
	else if (mongoDateString.length == 7) mongoDateString += "-01 00:00:00";
	else if (mongoDateString.length == 10) mongoDateString += " 00:00:00";
	else if (mongoDateString.length == 13) mongoDateString += ":00:00";
	else if (mongoDateString.length == 16) mongoDateString += ":00";
	else if (mongoDateString.length == 19) {}
	else return null;

	// return ISO Format that is supported by all browsers
	return new Date(mongoDateString.replace(" ","T") + "Z"); 
}

var getCounterName = function(seriesData, graphOptions) {
	var sb = "";


	var indexOfHashInName = -1; //seriesData.n.indexOf('#');
	if (indexOfHashInName == -1) {
		sb += seriesData.n;
	} else {
		sb += seriesData.n.substring(indexOfHashInName+1);
	}

	if (graphOptions.includeServerInLabel && seriesData.s && seriesData.s != "undefined") sb = seriesData.s + ":" + sb;
	if (graphOptions.includeComponentInLabel && seriesData.c && seriesData.c != "undefined") sb = seriesData.c + "@" + sb;

	return sb;
}

var lastGraph;
var lastSeries;
var cacheByDiv = {};
var highlightLegendDiv = null;
var highlightLegendTimeout = null;

var lastHighlightAt = new Date().getTime();
var highlightCallback_ShowSeriesName = function(event, x, points, row, seriesName) {
		var point = null;
	for (i in points) {
		if (points[i].name == seriesName) { 
			point = points[i];
			break;
		}
	}
	if (!point) return;

	var name = new Date(point.xval).toLocaleString() + "<br>";
	name += seriesName.replace(/<[^>]+>/g,'').replace(":","<br>");
	var divInnerHtml = name + "<br>Value: " + point.yval;
	showHighlightLegendDivWithDelay(divInnerHtml, event.x || event.clientX, event.y  || event.clientY);
}

var unhighlightCallback_ShowSeriesName = function(event, x, points, row, seriesName) {
	hideHighlightLegendDiv();
}


var onMouseOverSeriesLabel = function(divId, fullCounterName, el) {
	var divCache = cacheByDiv[divId];
	var seriesObj = divCache.seriesFound[fullCounterName]
	var pos = el.getBoundingClientRect();
	showHighlightLegendDiv(seriesObj.summaryText, pos.left + 5, pos.top + 5);
}

var hideHighlightLegendDiv = function() {
	clearTimeout(highlightLegendTimeout);
	highlightLegendDiv = highlightLegendDiv || document.getElementById("highlightSeriesLabelDiv");
	highlightLegendDiv.style.display = "none";
}

var showHighlightLegendDivWithDelay = function(divInnerHtml, x, y) {
	lastHighlightAt = new Date().getTime();
	clearTimeout(highlightLegendTimeout);
	highlightLegendTimeout = setTimeout(function() {
		if (new Date().getTime() - lastHighlightAt > 500) {
			showHighlightLegendDiv(divInnerHtml, x, y);
		}
	}, 600);
}

var showHighlightLegendDiv = function(divInnerHtml, x, y) {
	highlightLegendDiv = highlightLegendDiv || document.getElementById("highlightSeriesLabelDiv");
	highlightLegendDiv.innerHTML = divInnerHtml;
	highlightLegendDiv.style.left = x + "px";
	highlightLegendDiv.style.top = (y + 10) + "px";
	highlightSeriesLabelDiv.style.zIndex = 20
	highlightLegendDiv.style.display = "block";
}


var drawGraph = function(graphDiv, labelsDiv, graphData, userOptions) {
	var divCache = {};
	cacheByDiv[graphDiv.id] = divCache;

	divCache.graphOptions = {
			title: null,
			rollPeriod: 1,
			showRoller: false,
			errorBars: false,
			labelsSeparateLines: true,
			legend: 'always',
			strokeWidth: 2.0,
			labelsDiv: labelsDiv,
			axisLabelWidth: 80,
			connectSeparatedPoints: true,
			drawGapEdgePoints: true,
			showAxis: true,
			stackedGraph: false,
			fillGraph: false,
			logscale: false,
			ylabel: null,
			showRangeSelector: false,
			includeServerInLabel: true,
			includeComponentInLabel: true,
			labelsKMG2: true,
			highlightCircleSize: 3,
			highlightSeriesOpts: { strokeWidth: 4, strokeBorderColor: "black" },
			gapInSeconds: 180,
			dateWindowRatio: 0.1,
			wholeWindow: true,
			aggregative: "ave",
			animatedZooms: true,
			isDelta: false,
			valueMultiplier: 1,
			highlightSeriesBackgroundAlpha: 1,
			highlightCallback: highlightCallback_ShowSeriesName,
			unhighlightCallback: unhighlightCallback_ShowSeriesName,
			xAxisLabelWidth: 60
		};

	// Override default options
	for (option in userOptions) {
		divCache.graphOptions[option] = userOptions[option];
	}

	if (divCache.graphOptions.gapInMinutes)
		divCache.graphOptions.gapInSeconds = divCache.graphOptions.gapInMinutes * 60;

	divCache.skipped = 0;
	/*
	var isSorted = false;
	if (divCache.graphOptions.sort == "desc") {
		graphData.sort(function (g1,g2) { var t1=g1.t.getTime(); var t2=g2.t.getTime(); if (t1 == t2) return (g1.S < g2.S ? 1 : -1); else return (t1 < t2 ? -1 : 1) });
		isSorted = true;
	} else if (divCache.graphOptions.sort == "asc") {
		graphData.sort(function (g1,g2) { var t1=g1.t.getTime(); var t2=g2.t.getTime();  if (t1 == t2) return (g1.S < g2.S ? -1 : 1); else return (t1 < t2 ? -1 : 1) });
		isSorted = true;
	} else {
		graphData.sort(function (g1,g2) { var t1=g1.t.getTime(); var t2=g2.t.getTime(); return (t1 < t2 ? -1 : 1) });
	}*/

	graphData.sort(function (g1,g2) { var t1=g1.t.getTime(); var t2=g2.t.getTime(); return (t1 < t2 ? -1 : 1) });

	var newHighCapVal = 0;
	var newLowCapVal = 0;
	divCache.palletteIndex = 0;
	divCache.timeSlotArr = [];
	divCache.seriesArr = [];
	divCache.seriesFound = {};
	divCache.byTimeSeriesValues = {};

	divCache.graphOptions.valueFormatter = function(y,f,field,graph) {
		if (field == "time") return new Date(y).toLocaleString();
		if (!y) return y;
		var yNum = Number(y);

		
		if (divCache.graphOptions.decimalRounding != null) {
			var num = Math.pow(10,divCache.graphOptions.decimalRounding);
			yNum = Math.round(yNum * num) / num;
		}

		if (isNaN(yNum)) return y;
		if (yNum > 1000000000) return (Math.round(yNum/10000000)/100) + "G";
		if (yNum > 1000000) return (Math.round(yNum/10000)/100) + "M";
		if (yNum > 1000) return (Math.round(yNum/10)/100) + "K";
		return yNum;
	}
	
	// Record any new series we're encountering in the data
	for (dataIndex in graphData) {
		var counter = graphData[dataIndex];
		if (counter == null) continue;

		var fullCounterName = getCounterName(counter, divCache.graphOptions);
		var seriesObj = divCache.seriesFound[fullCounterName];
		if (!seriesObj) {
			divCache.seriesFound[fullCounterName] = seriesObj = {};
			seriesObj.label = "<SPAN class='legendItem' " + 
				" onmouseover='onMouseOverSeriesLabel(&quot;" + graphDiv.id + "&quot;, &quot;" + fullCounterName + "&quot;, this)' " +
				" onmouseout='hideHighlightLegendDiv()' >" + 
				fullCounterName + "</SPAN>";
			seriesObj.fullCounterName = fullCounterName;
			seriesObj.S = counter.S || 0;
			seriesObj.N = counter.N || 1;
			seriesObj.dataPoints = 1;
			seriesObj.A = seriesObj.S / seriesObj.N;
			seriesObj.M = counter.M || 0;
			seriesObj.m = counter.m || 0;
			seriesObj.NV = 0;
			seriesObj.stdev = 0;
			divCache.seriesArr.push(seriesObj);
		} else {
			var prevA = seriesObj.A;
			seriesObj.S += (counter.S||0);
			seriesObj.N += (counter.N||1);
			seriesObj.dataPoints += 1;
			seriesObj.A = seriesObj.S / seriesObj.N;
			if (seriesObj.M < counter.M) seriesObj.M = (counter.M||0);
			if (seriesObj.m > counter.m) seriesObj.m = (counter.m||0);
			seriesObj.NV += ((counter.S||0) - prevA) * ((counter.S||0) - seriesObj.A);
			seriesObj.stdev = Math.sqrt(seriesObj.NV / seriesObj.N);
		}

		seriesObj.cS = counter.S||0;
		seriesObj.cN = counter.N||1;
		seriesObj.cA = (counter.S||0)/(counter.N||1);
		seriesObj.cM = counter.M||0;
		seriesObj.cm = counter.m||0;
	}

	//if (divCache.graphOptions.showSeriesSummary) {
		for (fullCounterName in divCache.seriesFound) {
			var seriesObj = divCache.seriesFound[fullCounterName];

			var summaryText = "<SPAN class='seriesSummary'>"
			summaryText += "Sum: " + Math.round(100*seriesObj.S)/100 + "<br>"
			summaryText += "Max: " + Math.round(100*seriesObj.M)/100 + "<br>"
			summaryText += "Ave: " + Math.round(100*seriesObj.A)/100 + "<br>"
			summaryText += "Min: " + Math.round(100*seriesObj.m)/100 + "<br>"
			summaryText += "Count: " + Math.round(100*seriesObj.N)/100 + "<br>"
			summaryText += "Stdev: " + Math.round(100*seriesObj.stdev)/100
			summaryText += "</SPAN>";
			seriesObj.summaryText = summaryText;
/*
			var summaryText = "<SPAN class='seriesSummary'>"
			summaryText += "<table><tr><td></td><td>Total</td><td>Current</td></tr>";		
			summaryText += "<tr><td>Sum</td><td>" + seriesObj.S + "</td><td>" + seriesObj.cS + "</td></tr>"
			summaryText += "<tr><td>Max</td><td>" + seriesObj.M + "</td><td>" + seriesObj.cM + "</td></tr>"
			summaryText += "<tr><td>Ave</td><td>" + seriesObj.A + "</td><td>" + seriesObj.cA + "</td></tr>"
			summaryText += "<tr><td>Min</td><td>" + seriesObj.m + "</td><td>" + seriesObj.cm + "</td></tr>"
			summaryText += "<tr><td>Count</td><td>" + seriesObj.N + "</td><td>" + seriesObj.cN + "</td></tr>"
			summaryText += "<tr><td>Stdev</td><td>" + seriesObj.stdev + "</td><td>&nbsp;</td></tr>"
			summaryText += "</table></SPAN>";
			seriesObj.summaryText = summaryText;
*/
		}
	//}


		 if (divCache.graphOptions.sortByTotalAverage == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.A - a.A); }); }
	else if (divCache.graphOptions.sortByTotalMinimum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.m - a.m); }); }
	else if (divCache.graphOptions.sortByTotalMaximum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.M - a.M); }); }
	else if (divCache.graphOptions.sortByTotalSum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.S - a.S); }); }
	else if (divCache.graphOptions.sortByTotalCount == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.N - a.N); }); }
	else if (divCache.graphOptions.sortByCurrentAverage == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.cA - a.cA); }); }
	else if (divCache.graphOptions.sortByCurrentMinimum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.cm - a.cm); }); }
	else if (divCache.graphOptions.sortByCurrentMaximum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.cM - a.cM); }); }
	else if (divCache.graphOptions.sortByCurrentSum == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.cS - a.cS); }); }
	else if (divCache.graphOptions.sortByCurrentCount == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.cN - a.cN); }); }
	else if (divCache.graphOptions.sortByDeviant == "desc") { divCache.seriesArr.sort(function(a,b) { return (b.stdev - a.stdev); }); }
	else if (divCache.graphOptions.sortByTotalAverage == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.A - a.A); }); }
	else if (divCache.graphOptions.sortByTotalMinimum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.m - a.m); }); }
	else if (divCache.graphOptions.sortByTotalMaximum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.M - a.M); }); }
	else if (divCache.graphOptions.sortByTotalSum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.S - a.S); }); }
	else if (divCache.graphOptions.sortByTotalCount == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.N - a.N); }); }
	else if (divCache.graphOptions.sortByCurrentAverage == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.cA - a.cA); }); }
	else if (divCache.graphOptions.sortByCurrentMinimum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.cm - a.cm); }); }
	else if (divCache.graphOptions.sortByCurrentMaximum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.cM - a.cM); }); }
	else if (divCache.graphOptions.sortByCurrentSum == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.cS - a.cS); }); }
	else if (divCache.graphOptions.sortByCurrentCount == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.cN - a.cN); }); }
	else if (divCache.graphOptions.sortByDeviant == "asc") { divCache.seriesArr.sort(function(a,b) { return -(b.stdev - a.stdev); }); }
	else { divCache.seriesArr.sort(function(s1,s2) { return (s1.label < s2.label ? -1 : 1); }); }

	if (divCache.graphOptions.limit && divCache.seriesArr.length > divCache.graphOptions.limit) {
		divCache.seriesArr = divCache.seriesArr.splice(0, divCache.graphOptions.limit);
	}

	divCache.labelArr = [];
	divCache.colorsArr = [];

	populateTimeSlotArr(divCache, graphData);

	divCache.labelArr.splice(0,0,"time");

	// Move the zoom to the last 10% of the graph
	if (divCache.timeSlotArr.length != 0 && !divCache.graphOptions.wholeWindow && divCache.lastDate != null) {
		var firstDate = divCache.timeSlotArr[0][0];
		var zoomedWindowOfTimeMS = (divCache.lastDate.getTime() - firstDate.getTime()) * divCache.graphOptions.dateWindowRatio;
		divCache.graphOptions.dateWindow = [divCache.lastDate.getTime() - zoomedWindowOfTimeMS,divCache.lastDate.getTime()];
	}
	
	divCache.graphOptions.labels = divCache.labelArr;
	divCache.graphOptions.colors = divCache.colorsArr;
	//divCache.graphOptions.valueRange = null;
	//if (divCache.graphOptions.stackedGraph) {
	//} 	
	/*  else if (graphOptions.valueRange != null) {
		if (graphOptions.yValuePadRatio) newHighCapVal = (newHighCapVal*graphOptions.yValuePadRatio)
		if (isNaN(graphOptions.valueRange[0])) graphOptions.valueRange[0] = newLowCapVal;
		if (isNaN(graphOptions.valueRange[1])) graphOptions.valueRange[1] = newHighCapVal;
	}*/

	lastSeries = divCache.timeSlotArr;
	try {
		lastGraph = new Dygraph(graphDiv, divCache.timeSlotArr, divCache.graphOptions);
	} catch (ex) {
		debugger;
	}
	if (divCache.skipped > 0) {
		console.warn(divCache.skipped + " invalid data points were ignored");
	}
	divCache.dygraph = lastGraph;
}

var updateDrawnGraph = function(graphDiv, graphData, enlargeWindow) {
	var divCache = cacheByDiv[graphDiv.id];
	if (!divCache) return;
	graphData.sort(function (g1,g2) { return (g1.t < g2.t ? -1 : 1) });
	divCache.skipped = 0;

	var lenBefore = divCache.timeSlotArr.length;
	divCache.appendOnly = true;
	populateTimeSlotArr(divCache, graphData);
	var lenAfter = divCache.timeSlotArr.length;

	// Keep a sliding window model
	if (!enlargeWindow) {
		for (var i = 0; i < (lenAfter - lenBefore); ++i) {
			var dumpedTimeslot = divCache.timeSlotArr.shift();
			if (dumpedTimeslot != null) {
				delete divCache.byTimeSeriesValues[dumpedTimeslot];
			}
		}
	}

	if (divCache.timeSlotArr.length > 1 && 
		divCache.timeSlotArr[divCache.timeSlotArr.length - 1].length <
		divCache.timeSlotArr[divCache.timeSlotArr.length - 2].length) {
		debugger;
	}

	try {
		divCache.dygraph.updateOptions( { 'file': divCache.timeSlotArr } );
	} catch (ex) {
		debugger;
	}

	if (divCache.skipped > 0) {
		console.warn(divCache.skipped + " invalid data points were ignored");
	}
}

var populateTimeSlotArr = function(divCache, graphData) {
	var noValue = divCache.graphOptions["stackedGraph"] ? 0 : NaN;


	if (divCache.timeSlotArr && divCache.timeSlotArr.length > 0) {
		var last = divCache.timeSlotArr[divCache.timeSlotArr.length - 1];
		var isAllNaN = true;
		for (index in last) {
			if (index == "0") continue;
			if (isNaN(last[index]) || last[index] == 0) continue;
			isAllNaN = false;
		}

		if (isAllNaN) {
			divCache.timeSlotArr.splice(divCache.timeSlotArr.length - 1,1);
		}
	}

	for (fullCounterName in  divCache.seriesFound) {
		var seriesObj = divCache.seriesFound[fullCounterName];
		
		var defaultLineStyle = {
		}

		divCache.graphOptions[seriesObj.label] = defaultLineStyle;
		
		if (divCache.graphOptions.lineStyles) {
			for (styleNum in divCache.graphOptions.lineStyles) {
				var style = divCache.graphOptions.lineStyles[styleNum];
				
				if (fullCounterName.match(style.match)) {
					if (style.color) {
						seriesObj.color = style.color;
					}

					for (key in style) {
						defaultLineStyle[key] = style[key];
					}
				}
			}
		}
	}

	for (seriesNum in divCache.seriesArr) {
		var seriesObj = divCache.seriesArr[seriesNum];
		var lineStyle = divCache.graphOptions[seriesObj.label];

		var totalAverageAbove = lineStyle.totalAverageAbove || divCache.graphOptions.totalAverageAbove;
		var totalAverageBelow = lineStyle.totalAverageBelow || divCache.graphOptions.totalAverageBelow;
		var totalMaximumAbove = lineStyle.totalMaximumAbove || divCache.graphOptions.totalMaximumAbove;
		var totalMaximumBelow = lineStyle.totalMaximumBelow || divCache.graphOptions.totalMaximumBelow;
		var totalMinimumAbove = lineStyle.totalMinimumAbove || divCache.graphOptions.totalMinimumAbove;
		var totalMinimumBelow = lineStyle.totalMinimumBelow || divCache.graphOptions.totalMinimumBelow;
		var totalSumAbove = lineStyle.totalSumAbove || divCache.graphOptions.totalSumAbove;
		var totalSumBelow = lineStyle.totalSumBelow || divCache.graphOptions.totalSumBelow;
		var currentAverageAbove = lineStyle.currentAverageAbove || divCache.graphOptions.currentAverageAbove;
		var currentAverageBelow = lineStyle.currentAverageBelow || divCache.graphOptions.currentAverageBelow;
		var currentMaximumAbove = lineStyle.currentMaximumAbove || divCache.graphOptions.currentMaximumAbove;
		var currentMaximumBelow = lineStyle.currentMaximumBelow || divCache.graphOptions.currentMaximumBelow;
		var currentMinimumAbove = lineStyle.currentMinimumAbove || divCache.graphOptions.currentMinimumAbove;
		var currentMinimumBelow = lineStyle.currentMinimumBelow || divCache.graphOptions.currentMinimumBelow;
		var currentSumAbove = lineStyle.currentSumAbove || divCache.graphOptions.currentSumAbove;
		var currentSumBelow = lineStyle.currentSumBelow || divCache.graphOptions.currentSumBelow;

		if (totalAverageAbove != null && seriesObj.A < totalAverageAbove) continue;
		if (totalAverageBelow != null && seriesObj.A > totalAverageBelow) continue;
		if (totalMaximumAbove != null && seriesObj.M < totalMaximumAbove) continue;
		if (totalMaximumBelow != null && seriesObj.M > totalMaximumBelow) continue;
		if (totalMinimumAbove != null && seriesObj.m < totalMinimumAbove) continue;
		if (totalMinimumBelow != null && seriesObj.m > totalMinimumBelow) continue;
		if (totalSumAbove != null && seriesObj.S < totalSumAbove) continue;
		if (totalSumBelow != null && seriesObj.S > totalSumBelow) continue;
		if (currentAverageAbove != null && seriesObj.cA < currentAverageAbove) continue;
		if (currentAverageBelow != null && seriesObj.cA > currentAverageBelow) continue;
		if (currentMaximumAbove != null && seriesObj.cM < currentMaximumAbove) continue;
		if (currentMaximumBelow != null && seriesObj.cM > currentMaximumBelow) continue;
		if (currentMinimumAbove != null && seriesObj.cm < currentMinimumAbove) continue;
		if (currentMinimumBelow != null && seriesObj.cm > currentMinimumBelow) continue;
		if (currentSumAbove != null && seriesObj.cS < currentSumAbove) continue;
		if (currentSumBelow != null && seriesObj.cS > currentSumBelow) continue;


		if (divCache.labelArr.indexOf(seriesObj.label) == -1) {
			divCache.labelArr.push(seriesObj.label);

			if (seriesObj.color) {
			} else if (divCache.palletteIndex >= defaultPallete.length) {
				seriesObj.color = seriesObj.fullCounterName.colorHash();
			} else {
				seriesObj.color = defaultPallete[divCache.palletteIndex++];
			}

			divCache.colorsArr.push(seriesObj.color);
			seriesObj.index = divCache.labelArr.length;
		}
	}

	var firstNewTimeSlotIndex = null;
	var previousTimeSlot = null;
	divCache.deltaHelper = {};
	divCache.accumulativeHelper = {};
	var functionByTransform = {};

	for (dataIndex in graphData) {
		var counter = graphData[dataIndex];
		if (counter == null) continue;
		var fullCounterName = getCounterName(counter, divCache.graphOptions);
		var seriesObj = divCache.seriesFound[fullCounterName];
		if (seriesObj == null) {
			console.error("Series not found: " + fullCounterName);
			break;
		}

		// Rotate the data to match dygraph's list format
		// Example (from dygraph's site):
		//[
        //	[ new Date("2009/07/12"), 100, 200 ],
        //	[ new Date("2009/07/19"), 150, 220 ]
      	//]
      	var timeSlotTime = counter.t.toMongoDate();

      	if (timeSlotTime == null ||
      		isNaN(timeSlotTime.getTime())) {
      		//console.log(counter);
      		if (!divCache.skipped) divCache.skipped = 1
      		else divCache.skipped++;
      		continue;
      	}

		var timeSlot = divCache.byTimeSeriesValues[timeSlotTime];
		if (!timeSlot) {

			// Skip this sample if it belongs to the past
			if (divCache.timeSlotArr.length > 0 && divCache.timeSlotArr[0][0] > timeSlotTime ) continue;

			divCache.byTimeSeriesValues[timeSlotTime] = timeSlot = [ timeSlotTime ];
			var newTimeSlotIndex = divCache.timeSlotArr.push(timeSlot) - 1;
			if (firstNewTimeSlotIndex == null) firstNewTimeSlotIndex = newTimeSlotIndex;
			else if (firstNewTimeSlotIndex > newTimeSlotIndex) firstNewTimeSlotIndex = newTimeSlotIndex;
		}

		var valObj = [noValue,noValue];
		var lineStyle = divCache.graphOptions[seriesObj.label];
		var aggregative = lineStyle.aggregative || divCache.graphOptions.aggregative;
		var isDelta = lineStyle.isDelta || divCache.graphOptions.isDelta;
		var isCounter = lineStyle.isCounter || divCache.graphOptions.isCounter;
		var isAccumulative = lineStyle.isAccumulative || divCache.graphOptions.isAccumulative;
		var valueMultiplier = lineStyle.valueMultiplier || divCache.graphOptions.valueMultiplier;
		var yTransform = lineStyle.yTransform || divCache.graphOptions.yTransform;
		var divideBySecondsSinceLastSample = lineStyle.divideBySecondsSinceLastSample || divCache.graphOptions.divideBySecondsSinceLastSample;
		var decimalRounding = lineStyle.decimalRounding || divCache.graphOptions.decimalRounding;

		var yTransformPostEval = null;
		if (yTransform) {
			yTransformPostEval = functionByTransform[yTransform];
			if (!yTransformPostEval) {
				eval("function project(y) { return (" + yTransform + "); }");
				yTransformPostEval = project;
				functionByTransform[yTransform] = yTransformPostEval;
			} 
		}
		
		

		if (counter.forcedValue != null) { valObj[0] = counter.forcedValue; }
		else {
			if (aggregative == 'ave') { valObj[0] = counter.A; valObj[1] = counter.V; }
			else if (aggregative == 'min') valObj[0] = counter.m;
			else if (aggregative == 'max') valObj[0] = counter.M;
			else if (aggregative == 'sum') valObj[0] = counter.S;
			else if (aggregative == 'count') valObj[0] = counter.N;

			if (yTransform) {
				try {
					valObj[0] = yTransformPostEval(valObj[0]);
				} catch (ex) {
					if (!divCache.notifiedYTransformError) {
						divCache.notifiedYTransformError = true;
						console.error("Failed evaluating yTransform value '" + yTransform + "': " + ex);
					}
				}
			}

			if (isNaN(valObj[0])) { }
			else if (isCounter) {
				
				if (divCache.deltaHelper[seriesObj.index] == null) {
					divCache.deltaHelper[seriesObj.index] = valObj[0];
					valObj[0] = NaN;
				} else {	
					var temp = valObj[0];
					if (valObj[0] < divCache.deltaHelper[seriesObj.index]) {
						divCache.deltaHelper[seriesObj.index] = valObj[0];
						valObj[0] = divCache.deltaHelper[seriesObj.index];
						// possible reset of counter

					} else {
						valObj[0] -= divCache.deltaHelper[seriesObj.index];
						divCache.deltaHelper[seriesObj.index] = temp;
					}
				}
			} else if (isDelta) {
				if (divCache.deltaHelper[seriesObj.index] == null) {
					divCache.deltaHelper[seriesObj.index] = valObj[0];
					valObj[0] = NaN;
				} else {	
					var temp = valObj[0];
					valObj[0] -= divCache.deltaHelper[seriesObj.index];
					divCache.deltaHelper[seriesObj.index] = temp;
				}
			} else if (isAccumulative) {
				if (divCache.accumulativeHelper[seriesObj.index] == null) {
					divCache.accumulativeHelper[seriesObj.index] = valObj[0];
				} else {	
					divCache.accumulativeHelper[seriesObj.index] += valObj[0];
					valObj[0] = divCache.accumulativeHelper[seriesObj.index];
				}
			}

			if (divCache.lastTimeslot == null) divCache.lastTimeslot = {};
			if (divideBySecondsSinceLastSample) {
				var lastTimeslot = divCache.lastTimeslot[seriesObj.index];
				if (lastTimeslot) {
					var msDiff = timeSlot[0].getTime() - lastTimeslot[0].getTime();
					if (msDiff > 0) {
						valObj[0] /= msDiff * 0.001;
					} else {
						valObj[0] = NaN;
					}
				}

				divCache.lastTimeslot[seriesObj.index] = timeSlot;
			}

			if (decimalRounding != null) {
				var num = Math.pow(10,decimalRounding);
				valObj[0] = Math.round(valObj[0] * num) / num;
			}


			if (valueMultiplier && !isNaN(valObj[0])) {
				valObj[0] *= valueMultiplier;
			}
		}
		
		// Put the series sample in the series slot in the timeslot (e.g. series B was null but C had values)
		timeSlot[seriesObj.index] = (divCache.graphOptions.errorBars?valObj:valObj[0]);
	}

	// Fill empty counter values with NaN (Makes dygraph draw gaps instead of 0 values)
	var spliced = false;
	var lastDate = null;
	var lastSeriesDate = {};
	function realizeGap(lateTimeSlot, atTime, atIndex, where) {
		if (lastDate && atTime && dateDiffSeconds(lastDate, atTime) < -divCache.graphOptions.gapInSeconds) {
			if (lateTimeSlot) {
				lateTimeSlot
			}

			//var edgeDateEarly = lastDate.addMinutes(1);
			//var edgeDateLate = atTime.addMinutes(-1);
		
			var edgeDateEarly = new Date(lastDate.getTime() + 1);
			var edgeDateLate = new Date(atTime.getTime() - 1);

			var earlySlot = [edgeDateEarly];
			var lateSlot = [edgeDateLate];
			var addEarlySlotTerminator = true;
			var addLateSlotTerminator = true;
			var num = 0;

			for (series in divCache.seriesFound) {
				var index = divCache.seriesFound[series].index;
				if (addEarlySlotTerminator) earlySlot[num + 1] = (divCache.graphOptions.errorBars?[noValue,noValue]:noValue);
				if (addLateSlotTerminator) lateSlot[num + 1] = (divCache.graphOptions.errorBars?[noValue,noValue]:noValue);
				num++;
			}
			
			if (addLateSlotTerminator) {
				divCache.timeSlotArr.splice(atIndex,0,lateSlot);
				spliced = true;
			}

			if (addEarlySlotTerminator) {
				divCache.timeSlotArr.splice(atIndex,0,earlySlot);
				spliced = true;
			}
			return true;
		}
		return false;
	}

	divCache.DEBUG_firstNewTimeSlotIndex = firstNewTimeSlotIndex;
	var lastGoodValueOfEachIndex = {};
	var numberOfMissingPoints = {};
	var firstIndexOfMissingPoints = {};
	var timeSlotIndex = 0
	divCache.lastDate = lastDate;

	if (divCache.graphOptions.untilNow && divCache.timeSlotArr.length > 0) {
		//var lastSlot = divCache.timeSlotArr[divCache.timeSlotArr.length - 1];
		divCache.timeSlotArr.push([new Date()]);
	}

	//if (firstNewTimeSlotIndex != null) {
		for (; timeSlotIndex < divCache.timeSlotArr.length; ++timeSlotIndex) {
		//for (timeSlotIndex in divCache.timeSlotArr) {

			//if (timeSlotIndex < firstNewTimeSlotIndex) continue;
			var timeSlot = divCache.timeSlotArr[timeSlotIndex];

			for (series in divCache.seriesFound) {
				var index = divCache.seriesFound[series].index;
				if (timeSlot[index] == null) {
					if (divCache.graphOptions.connectSeparatedPoints && lastGoodValueOfEachIndex[index] != null) {
						timeSlot[index] = (divCache.graphOptions.errorBars?[lastGoodValueOfEachIndex[index],noValue]:lastGoodValueOfEachIndex[index]);
					} else {
					 	timeSlot[index] = (divCache.graphOptions.errorBars?[noValue,noValue]:noValue);

					 	if (!numberOfMissingPoints[index]) {
					 		numberOfMissingPoints[index] = 1;
					 		firstIndexOfMissingPoints[index] = timeSlotIndex;
					 	} else {
					 	 	numberOfMissingPoints[index] += 1;
					 	}
					}
				} else {
					// connect separated points which are separated just because something got in the middle
					if (numberOfMissingPoints[index]) {
						var oldVal = lastGoodValueOfEachIndex[index];
						var firstMissingIndex = firstIndexOfMissingPoints[index];
						if (oldVal != null && oldVal != NaN && firstMissingIndex != null) {
							var dateBeforeMissingPoints = divCache.timeSlotArr[firstMissingIndex][0];
							if (dateDiffSeconds(lastDate, dateBeforeMissingPoints) < divCache.graphOptions.gapInSeconds) {
								var newVal = timeSlot[index];
								var totalMissingPoints = numberOfMissingPoints[index];
								var step = (newVal - oldVal) / totalMissingPoints;
								for (var indexCursor = 0; indexCursor < totalMissingPoints; ++indexCursor) {
									var interpolatedVal = oldVal + (step * (indexCursor+1));
									divCache.timeSlotArr[firstMissingIndex + indexCursor][index] = interpolatedVal;
								}
							}
						}
						numberOfMissingPoints[index] = null;
					}

					lastGoodValueOfEachIndex[index] = timeSlot[index];
				}

				lastSeriesDate[index]
			}

			if (realizeGap(timeSlot, timeSlot[0], timeSlotIndex + 1, "middle")) {
				timeSlotIndex+=2;
			}
/*
							if (lastSeriesDate[index] && dateDiffSeconds(lastSeriesDate[index], timeSlot[0]) > divCache.graphOptions.gapInSeconds) {
					if (divCache.graphOptions.connectSeparatedPoints && lastGoodValueOfEachIndex[index] != null) {
						timeSlot[index] = (divCache.graphOptions.errorBars?[lastGoodValueOfEachIndex[index],noValue]:lastGoodValueOfEachIndex[index]);
					} else {
					 	timeSlot[index] = (divCache.graphOptions.errorBars?[noValue,noValue]:noValue);
					}
				}
*/

			lastDate = timeSlot[0];
		}

		if (lastDate != null) {
			//if (divCache.graphOptions.upToDate) {
			//	realizeGap(lastDate.addMinutes(divCache.graphOptions.gapInMinutes), "end");
			//} else {
				realizeGap(null, lastDate.addSeconds(divCache.graphOptions.gapInSeconds), timeSlotIndex, "end");
			//}
		}

	if (spliced) {
		divCache.timeSlotArr.sort(function (g1,g2) { var t1=g1[0].getTime(); var t2=g2[0].getTime(); return (t1 < t2 ? -1 : 1) });
	}

	if (divCache.timeSlotArr.length > 1 && 
		divCache.timeSlotArr[divCache.timeSlotArr.length - 1].length <
		divCache.timeSlotArr[divCache.timeSlotArr.length - 2].length) {
		debugger;
	}
	
	divCache.lastDate = lastDate;
}

function addPrediction(graphDiv, alpha, beta, gamma, period, m) {
	var divCache = cacheByDiv[graphDiv.id];
	if (divCache.timeSlotArr.length == 0) return;

	// collect input
	var forecastInputBySeries = {};

	// TODO: don't consolidate stepping for all series lines
	var averageStep = NaN;
	var timeSamples = 0;
	var lastTime = NaN;

	for (var timeSlotIndex = 0; timeSlotIndex < divCache.timeSlotArr.length; ++timeSlotIndex) {
		var timeSlot = divCache.timeSlotArr[timeSlotIndex];
		var time = timeSlot[0];
		
		if (isNaN(lastTime)) {
			lastTime = time.getTime();
		} else if (timeSamples == 0) {
			averageStep = time.getTime() - lastTime;
			timeSamples = 1;
		} else {
			var step = time.getTime() - lastTime;
			averageStep = ((averageStep * timeSamples) + step) / (timeSamples + 1);
			timeSamples++;
			lastTime = time.getTime();
		}

		for (series in divCache.seriesFound) {
			var inputArr = forecastInputBySeries[series];
			if (inputArr == null) {
				inputArr = [];
				forecastInputBySeries[series] = inputArr;
			}

			var index = divCache.seriesFound[series].index;
			var val = timeSlot[index];
			if (!isNaN(val)) inputArr.push(val);
		}
	}

	if (lastTime == NaN) return;

	var isStackedGraph = divCache.graphOptions["stackedGraph"];

	// process forecast
	var newGraphData = [];
	var forecastOutputBySeries = {};
	for (series in divCache.seriesFound) {
		var inputArr = forecastInputBySeries[series];
		if (inputArr != null) {

			if (inputArr.length % period != 0) {
				inputArr = inputArr.splice(inputArr.length % period);
			}

			var forecastArr = forecast(inputArr, alpha, beta, gamma, period, m);
			forecastOutputBySeries[series] = forecastArr;

			for (valIndex in forecastArr) {
				val = forecastArr[valIndex];
				if (isStackedGraph && isNaN(val)) val = 0;

				timeSlotTime = new Date((valIndex * averageStep) + lastTime);
				newGraphData.push({t: timeSlotTime, forcedValue: val, n: series});
			}
		}
	}

	updateDrawnGraph(graphDiv, newGraphData, true);
	//forecast(forecastInput, 0.5, 0.4, 0.6, 4, 4);
}