// In the format 
// var groups = { groupName: [ hostnames in short format ] }
var groups = {
	"Group": ["Server1", "Server2"]
};

var graphList = [];
var byServers = {};
var byCategory = {};

var graphListUpdated = function(callback) {
	for (var n in graphList) {
		var graph = graphList[n];
		var server = graph["graph_server"];
		var category = graph["graph_category"];
		
		if (!byServers[server]) byServers[server] = [];
		byServers[server].push(graph);
		
		if (!byCategory[category]) byCategory[category] = [];
		byCategory[category].push(graph);
	}
	
	console.log(byServers); //TODO:REVIEW - change to logger
	console.log(byCategory); //TODO:REVIEW - change to logger
	
	if (callback) callback();
};

var updateGraphList = function(callback) {
	$.ajax({
		url: "getMuninConfig",
		dataType: 'json',
		success: function(gl) {
			graphList = gl;
			graphListUpdated(callback);
		}
	});
};


// data-fnordmetric="timeseries"
// data-since="-10minutes"
// data-until="now"
// data-height="200px"
// data-y-max="50"
// data-chart-style="area"
// data-legend="on"
// data-cardinal="off"
// data-gauges="total_sales-sum-10,sales_per_minute"
// data-autoupdate="1"
// 
//--base 1024			/		--base 1000
//--alt-autoscale      
//--logarithmic		
//--lower-limit 0 	/ 		-l 0
//--upper-limit 100 	/		-u 100 
//--rigid				/		-r			(force limits)
//--vertical-label seconds
//
//	if ($1 == "graph_title") {
//		shift();
//		graph_title=$0;
//	} else if ($1 == "graph_order") {
//		shift();
//		graph_order=$0; 
//	} else if ($1 == "graph_args") {
//		shift();
//		graph_args=$0; 
//	} else if ($1 == "graph_info") {
//		shift();
//		graph_info=$0; 
//	} else if ($1 == "graph_vlabel") {
//		shift();
//		graph_vlabel=$0; 
//	} else if ($1 == "graph_category") {
//		shift();
//		graph_category=$0; 
//	} else if ($1 == "graph_printf") {
//		shift();
//		graph_printf=$0
//	} else if ($1 == "multigraph") {
//		shift();
//		multigraph=$0		
//	} else if ($1 == "graph_total") {
//		# Disabled in munin
//	} else if ($1 == "graph_period") {
//		graph_period=$2; 		
//	} else if ($1 == "graph_scale") {
//		graph_scale=$2; #yes no
//	} else if ($1 == "graph_width") {
//		graph_width=$2
//	} else if (index($1,"graph_") == 1) {
//		print "WARN: Unknown graph directive (skipped): " $0;
// field.graph yes no 
// field.min ## 
// field.max ##
// field.label free text
// field.info free text
// field.type GAUGE COUNTER DERIVE
// field.draw  contains STACK or AREA --> area // else line, could have line width
// field.cdef delay,1000,/ 
// field.colour 00aaaa
// field.warning min:max, min: or :max ?? or just a scalar
// field.critical min:max, min: or :max ?? or just a scalar	
