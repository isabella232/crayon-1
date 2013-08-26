var staticAutoComplete = {};

staticAutoComplete["annotationClickHandler"] = ' \
<div class="option"><a name="Annotations"></a><a name="annotationClickHandler"></a><b>annotationClickHandler</b><br> \
  <p>If provided, this function is called whenever the user clicks on an annotation.</p> \
  <i><span class="dyDescType">Type:</span> function(annotation, point, dygraph, event)</i><br> \
  <div class="parameters"> \
<i>annotation</i>: the annotation left<br> \
<i>point</i>: the point associated with the annotation<br> \
<i>dygraph</i>: the reference graph<br> \
<i>event</i>: the mouse event<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a><br> \
  <br> </div> \
';
 
staticAutoComplete["annotationDblClickHandler"] = ' \
<div class="option"><a name="annotationDblClickHandler"></a><b>annotationDblClickHandler</b><br> \
  <p>If provided, this function is called whenever the user double-clicks on an annotation.</p> \
  <i><span class="dyDescType">Type:</span> function(annotation, point, dygraph, event)</i><br> \
  <div class="parameters"> \
<i>annotation</i>: the annotation left<br> \
<i>point</i>: the point associated with the annotation<br> \
<i>dygraph</i>: the reference graph<br> \
<i>event</i>: the mouse event<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a><br> \
  <br> </div> \
';
 
staticAutoComplete["annotationMouseOutHandler"] = ' \
<div class="option"><a name="annotationMouseOutHandler"></a><b>annotationMouseOutHandler</b><br> \
  <p>If provided, this function is called whenever the user mouses out of an annotation.</p> \
  <i><span class="dyDescType">Type:</span> function(annotation, point, dygraph, event)</i><br> \
  <div class="parameters"> \
<i>annotation</i>: the annotation left<br> \
<i>point</i>: the point associated with the annotation<br> \
<i>dygraph</i>: the reference graph<br> \
<i>event</i>: the mouse event<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a><br> \
  <br> </div> \
';
 
staticAutoComplete["annotationMouseOverHandler"] = ' \
<div class="option"><a name="annotationMouseOverHandler"></a><b>annotationMouseOverHandler</b><br> \
  <p>If provided, this function is called whenever the user mouses over an annotation.</p> \
  <i><span class="dyDescType">Type:</span> function(annotation, point, dygraph, event)</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a><br> \
  <br> </div> \
';
 
staticAutoComplete["displayAnnotations"] = ' \
<div class="option"><a name="displayAnnotations"></a><b>displayAnnotations</b><br> \
  <p>Only applies when Dygraphs is used as a GViz chart. Causes string columns following a data series to be interpreted as annotations on points in that series. This is the same format used by Google\'s AnnotatedTimeLine chart.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-gviz">annotations-gviz</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation-gviz.html">annotation-gviz</a><br> \
  <br> </div> \
';
 
staticAutoComplete["axis"] = ' \
<div class="option"><a name="Axis display"></a><a name="axis"></a><b>axis</b><br> \
  <p>Set to either an object ({}) filled with options for this axis or to the name of an existing data series with its own axis to re-use that axis. See tests for usage.</p> \
  <i><span class="dyDescType">Type:</span> string or object</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/steps.html">steps</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLabelColor"] = ' \
<div class="option"><a name="axisLabelColor"></a><b>axisLabelColor</b><br> \
  <p>Color for x- and y-axis labels. This is a CSS color string.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> black</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLabelFontSize"] = ' \
<div class="option"><a name="axisLabelFontSize"></a><b>axisLabelFontSize</b><br> \
  <p>Size of the font (in pixels) to use in the axis labels, both x- and y-axis.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 14</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLabelFormatter"] = ' \
<div class="option"><a name="axisLabelFormatter"></a><b>axisLabelFormatter</b><br> \
  <p>Function to call to format the tick values that appear along an axis. This is usually set on a <a href="per-axis.html">per-axis</a> basis.</p> \
  <i><span class="dyDescType">Type:</span> function(number or Date, granularity, opts, dygraph)</i><br> \
  <div class="parameters"> \
<i>number or date</i>: Either a number (for a numeric axis) or a Date object (for a date axis)<br> \
<i>granularity</i>: specifies how fine-grained the axis is. For date axes, this is a reference to the time granularity enumeration, defined in dygraph-tickers.js, e.g. Dygraph.WEEKLY.<br> \
<i>opts</i>: a function which provides access to various options on the dygraph, e.g. opts(\'labelsKMB\').<br> \
<i>dygraph</i>: the referenced graph<br> </div> \
  <i><span class="dyDescType">Default:</span> Depends on the data type</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/value-axis-formatters.html">value-axis-formatters</a> <a href="tests/x-axis-formatter.html">x-axis-formatter</a><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLabelWidth"] = ' \
<div class="option"><a name="axisLabelWidth"></a><b>axisLabelWidth</b><br> \
  <p>Width (in pixels) of the containing divs for x- and y-axis labels. For the y-axis, this also controls </p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 50</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLineColor"] = ' \
<div class="option"><a name="axisLineColor"></a><b>axisLineColor</b><br> \
  <p>Color of the x- and y-axis lines. Accepts any value which the HTML canvas strokeStyle attribute understands, e.g. \'black\' or \'rgb(0, 100, 255)\'.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> black</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/demo.html">demo</a> <a href="tests/plugins.html">plugins</a><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLineWidth"] = ' \
<div class="option"><a name="axisLineWidth"></a><b>axisLineWidth</b><br> \
  <p>Thickness (in pixels) of the x- and y-axis lines.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 0.3</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["axisTickSize"] = ' \
<div class="option"><a name="axisTickSize"></a><b>axisTickSize</b><br> \
  <p>The size of the line to display next to each tick mark on x- or y-axes.</p> \
  <i><span class="dyDescType">Type:</span> number</i><br> \
  <i><span class="dyDescType">Default:</span> 3.0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["dateWindow"] = ' \
<div class="option"><a name="dateWindow"></a><b>dateWindow</b><br> \
  <p>Initially zoom in on a section of the graph. Is of the form [earliest, latest], where earliest/latest are milliseconds since epoch. If the data for the x-axis is numeric, the values in dateWindow must also be numbers.</p> \
  <i><span class="dyDescType">Type:</span> Array of two Dates or numbers</i><br> \
  <i><span class="dyDescType">Default:</span> Full range of the input is shown</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/interaction-api">interaction-api</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/synchronize">synchronize</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/dateWindow.html">dateWindow</a> <a href="tests/daylight-savings.html">daylight-savings</a> <a href="tests/drawing.html">drawing</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/plotters.html">plotters</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawAxesAtZero"] = ' \
<div class="option"><a name="drawAxesAtZero"></a><b>drawAxesAtZero</b><br> \
  <p>When set, draw the X axis at the Y=0 position and the Y axis at the X=0 position if those positions are inside the graph\'s visible area. Otherwise, draw the axes at the bottom or left graph edge as usual.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/linear-regression">linear-regression</a><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["drawXAxis"] = ' \
<div class="option"><a name="drawXAxis"></a><b>drawXAxis</b><br> \
  <p>Whether to draw the x-axis. Setting this to false also prevents x-axis ticks from being drawn and reclaims the space for the chart grid/lines.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/range-selector.html">range-selector</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawYAxis"] = ' \
<div class="option"><a name="drawYAxis"></a><b>drawYAxis</b><br> \
  <p>Whether to draw the y-axis. Setting this to false also prevents y-axis ticks from being drawn and reclaims the space for the chart grid/lines.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["includeZero"] = ' \
<div class="option"><a name="includeZero"></a><b>includeZero</b><br> \
  <p>Usually, dygraphs will use the range of the data plus some padding to set the range of the y-axis. If this option is set, the y-axis will always include zero, typically as the lowest value. This can be used to avoid exaggerating the variance in the data</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/no-range">no-range</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/no-range.html">no-range</a> <a href="tests/numeric-gviz.html">numeric-gviz</a> <a href="tests/plotters.html">plotters</a> <a href="tests/small-range-zero.html">small-range-zero</a> <a href="tests/steps.html">steps</a><br> \
  <br> </div> \
';
 
staticAutoComplete["independentTicks"] = ' \
<div class="option"><a name="independentTicks"></a><b>independentTicks</b><br> \
  <p>Only valid for y and y2, has no effect on x: This option defines whether the y axes should align their ticks or if they should be independent. Possible combinations: 1.) y=true, y2=false (default): y is the primary axis and the y2 ticks are aligned to the the ones of y. (only 1 grid) 2.) y=false, y2=true: y2 is the primary axis and the y ticks are aligned to the the ones of y2. (only 1 grid) 3.) y=true, y2=true: Both axis are independent and have their own ticks. (2 grids) 4.) y=false, y2=false: Invalid configuration causes an error.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true for y, false for y2</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["logscale"] = ' \
<div class="option"><a name="logscale"></a><b>logscale</b><br> \
  <p>When set for a y-axis, the graph shows that axis in log scale. Any values less than or equal to zero are not displayed. \
\
Not compatible with showZero, and ignores connectSeparatedPoints. Also, showing log scale with valueRanges that are less than zero will result in an unviewable graph.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/stock">stock</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/logscale.html">logscale</a> <a href="tests/stock.html">stock</a><br> \
  <br> </div> \
';
 
staticAutoComplete["panEdgeFraction"] = ' \
<div class="option"><a name="panEdgeFraction"></a><b>panEdgeFraction</b><br> \
  <p>A value representing the farthest a graph may be panned, in percent of the display. For example, a value of 0.1 means that the graph can only be panned 10% pased the edges of the displayed values. null means no bounds.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pixelsPerLabel"] = ' \
<div class="option"><a name="pixelsPerLabel"></a><b>pixelsPerLabel</b><br> \
  <p>Number of pixels to require between each x- and y-label. Larger values will yield a sparser axis with fewer ticks. This is set on a <a href="per-axis.html">per-axis</a> basis.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 60 (x-axis) or 30 (y-axes)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["ticker"] = ' \
<div class="option"><a name="ticker"></a><b>ticker</b><br> \
  <p>This lets you specify an arbitrary function to generate tick marks on an axis. The tick marks are an array of (value, label) pairs. The built-in functions go to great lengths to choose good tick marks so, if you set this option, you\'ll most likely want to call one of them and modify the result. See dygraph-tickers.js for an extensive discussion. This is set on a <a href="per-axis.html">per-axis</a> basis.</p> \
  <i><span class="dyDescType">Type:</span> function(min, max, pixels, opts, dygraph, vals) -&gt; [{v: ..., label: ...}, ...]</i><br> \
  <div class="parameters"> \
<i>min</i>: <br> \
<i>max</i>: <br> \
<i>pixels</i>: <br> \
<i>opts</i>: <br> \
<i>dygraph</i>: the reference graph<br> \
<i>vals</i>: <br> </div> \
  <i><span class="dyDescType">Default:</span> Dygraph.dateTicker or Dygraph.numericTicks</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a><br> \
  <br> </div> \
';
 
staticAutoComplete["valueRange"] = ' \
<div class="option"><a name="valueRange"></a><b>valueRange</b><br> \
  <p>Explicitly set the vertical range of the graph to [low, high]. This may be set on a per-axis basis to define each y-axis separately. If either limit is unspecified, it will be calculated automatically (e.g. [null, 30] to automatically calculate just the lower bound)</p> \
  <i><span class="dyDescType">Type:</span> Array of two numbers</i><br> \
  <i><span class="dyDescType">Default:</span> Full range of the input is shown</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/interaction-api">interaction-api</a> <a href="gallery/#g/synchronize">synchronize</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/dynamic-update.html">dynamic-update</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xAxisHeight"] = ' \
<div class="option"><a name="xAxisHeight"></a><b>xAxisHeight</b><br> \
  <p>Height, in pixels, of the x-axis. If not set explicitly, this is computed based on axisLabelFontSize and axisTickSize.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> (null)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/range-selector.html">range-selector</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xAxisLabelWidth"] = ' \
<div class="option"><a name="xAxisLabelWidth"></a><b>xAxisLabelWidth</b><br> \
  <p>Width, in pixels, of the x-axis labels.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 50</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/value-axis-formatters.html">value-axis-formatters</a> <a href="tests/x-axis-formatter.html">x-axis-formatter</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xRangePad"] = ' \
<div class="option"><a name="xRangePad"></a><b>xRangePad</b><br> \
  <p>Add the specified amount of extra space (in pixels) around the X-axis value range to ensure points at the edges remain visible.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/edge-padding">edge-padding</a><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["yAxisLabelWidth"] = ' \
<div class="option"><a name="yAxisLabelWidth"></a><b>yAxisLabelWidth</b><br> \
  <p>Width, in pixels, of the y-axis labels. This also affects the amount of space available for a y-axis chart label.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 50</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["yRangePad"] = ' \
<div class="option"><a name="yRangePad"></a><b>yRangePad</b><br> \
  <p>If set, add the specified amount of extra space (in pixels) around the Y-axis value range to ensure points at the edges remain visible. If unset, use the traditional Y padding algorithm.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/edge-padding">edge-padding</a><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["customBars"] = ' \
<div class="option"><a name="CSV parsing"></a><a name="customBars"></a><b>customBars</b><br> \
  <p>When set, parse each CSV cell as "low;middle;high". Error bars will be drawn for each point between low and high, with the series itself going through middle.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/stock">stock</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-bars.html">custom-bars</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/steps.html">steps</a> <a href="tests/stock.html">stock</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/zero-series.html">zero-series</a><br> \
  <br> </div> \
';
 
staticAutoComplete["delimiter"] = ' \
<div class="option"><a name="delimiter"></a><b>delimiter</b><br> \
  <p>The delimiter to look for when separating fields of a CSV file. Setting this to a tab is not usually necessary, since tab-delimited data is auto-detected.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> ,</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["errorBars"] = ' \
<div class="option"><a name="errorBars"></a><b>errorBars</b><br> \
  <p>Does the data contain standard deviations? Setting this to true alters the input format (see above).</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/resize">resize</a> <a href="gallery/#g/synchronize">synchronize</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/custom-bars.html">custom-bars</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/draw-points.html">draw-points</a> <a href="tests/fractions.html">fractions</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/interaction.html">interaction</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/numeric-gviz.html">numeric-gviz</a> <a href="tests/perf.html">perf</a> <a href="tests/plotters.html">plotters</a> <a href="tests/resize.html">resize</a> <a href="tests/steps.html">steps</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/underlay-callback.html">underlay-callback</a> <a href="tests/visibility.html">visibility</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["fractions"] = ' \
<div class="option"><a name="fractions"></a><b>fractions</b><br> \
  <p>When set, attempt to parse each cell in the CSV file as "a/b", where a and b are integers. The ratio will be plotted. This allows computation of Wilson confidence intervals (see below).</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/fractions.html">fractions</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xValueParser"] = ' \
<div class="option"><a name="xValueParser"></a><b>xValueParser</b><br> \
  <p>A function which parses x-values (i.e. the dependent series). Must return a number, even when the values are dates. In this case, millis since epoch are used. This is used primarily for parsing CSV data. *=Dygraphs is slightly more accepting in the dates which it will parse. See code for details.</p> \
  <i><span class="dyDescType">Type:</span> function(str) -&gt; number</i><br> \
  <i><span class="dyDescType">Default:</span> parseFloat() or Date.parse()*</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["clickCallback"] = ' \
<div class="option"><a name="Callbacks"></a><a name="clickCallback"></a><b>clickCallback</b><br> \
  <p>A function to call when the canvas is clicked.</p> \
  <i><span class="dyDescType">Type:</span> function(e, x, points)</i><br> \
  <div class="parameters"> \
<i>e</i>: The event object for the click<br> \
<i>x</i>: The x value that was clicked (for dates, this is milliseconds since epoch)<br> \
<i>points</i>: The closest points along that date. See <a href="#point_properties">Point properties</a> for details.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/highlighted-series">highlighted-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawCallback"] = ' \
<div class="option"><a name="drawCallback"></a><b>drawCallback</b><br> \
  <p>When set, this callback gets called every time the dygraph is drawn. This includes the initial draw, after zooming and repeatedly while panning.</p> \
  <i><span class="dyDescType">Type:</span> function(dygraph, is_initial)</i><br> \
  <div class="parameters"> \
<i>dygraph</i>: The graph being drawn<br> \
<i>is_initial</i>: True if this is the initial draw, false for subsequent draws.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/synchronize">synchronize</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/is-zoomed.html">is-zoomed</a> <a href="tests/linear-regression-addseries.html">linear-regression-addseries</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["highlightCallback"] = ' \
<div class="option"><a name="highlightCallback"></a><b>highlightCallback</b><br> \
  <p>When set, this callback gets called every time a new point is highlighted.</p> \
  <i><span class="dyDescType">Type:</span> function(event, x, points, row, seriesName)</i><br> \
  <div class="parameters"> \
<i>event</i>: the JavaScript mousemove event<br> \
<i>x</i>: the x-coordinate of the highlighted points<br> \
<i>points</i>: an array of highlighted points: <code>[ {name: \'series\', yval: y-value}, … ]</code><br> \
<i>row</i>: integer index of the highlighted row in the data table, starting from 0<br> \
<i>seriesName</i>: name of the highlighted series, only present if highlightSeriesOpts is set.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a> <a href="tests/crosshair.html">crosshair</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pointClickCallback"] = ' \
<div class="option"><a name="pointClickCallback"></a><b>pointClickCallback</b><br> \
  <p>A function to call when a data point is clicked. and the point that was clicked.</p> \
  <i><span class="dyDescType">Type:</span> function(e, point)</i><br> \
  <div class="parameters"> \
<i>e</i>: the event object for the click<br> \
<i>point</i>: the point that was clicked See <a href="#point_properties">Point properties</a> for details<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["underlayCallback"] = ' \
<div class="option"><a name="underlayCallback"></a><b>underlayCallback</b><br> \
  <p>When set, this callback gets called before the chart is drawn. It details on how to use this.</p> \
  <i><span class="dyDescType">Type:</span> function(context, area, dygraph)</i><br> \
  <div class="parameters"> \
<i>context</i>: the canvas drawing context on which to draw<br> \
<i>area</i>: An object with {x,y,w,h} properties describing the drawing area.<br> \
<i>dygraph</i>: the reference graph<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-region">highlighted-region</a> <a href="gallery/#g/highlighted-weekends">highlighted-weekends</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/linear-regression">linear-regression</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/highlighted-region.html">highlighted-region</a> <a href="tests/interaction.html">interaction</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/linear-regression.html">linear-regression</a> <a href="tests/underlay-callback.html">underlay-callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["unhighlightCallback"] = ' \
<div class="option"><a name="unhighlightCallback"></a><b>unhighlightCallback</b><br> \
  <p>When set, this callback gets called every time the user stops highlighting any point by mousing out of the graph.</p> \
  <i><span class="dyDescType">Type:</span> function(event)</i><br> \
  <div class="parameters"> \
<i>event</i>: the mouse event<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a> <a href="tests/crosshair.html">crosshair</a><br> \
  <br> </div> \
';
 
staticAutoComplete["zoomCallback"] = ' \
<div class="option"><a name="zoomCallback"></a><b>zoomCallback</b><br> \
  <p>A function to call when the zoom window is changed (either by zooming in or out).</p> \
  <i><span class="dyDescType">Type:</span> function(minDate, maxDate, yRanges)</i><br> \
  <div class="parameters"> \
<i>minDate</i>: milliseconds since epoch<br> \
<i>maxDate</i>: milliseconds since epoch.<br> \
<i>yRanges</i>: is an array of [bottom, top] pairs, one for each y-axis.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["axisLabelWidth"] = ' \
<div class="option"><a name="Chart labels"></a><a name="axisLabelWidth"></a><b>axisLabelWidth</b><br> \
  <p>Width (in pixels) of the containing divs for x- and y-axis labels. For the y-axis, this also controls </p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 50</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["title"] = ' \
<div class="option"><a name="title"></a><b>title</b><br> \
  <p>Text to display above the chart. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the \'dygraph-label\' or \'dygraph-title\' classes.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/border">border</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/gallery">gallery</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/border.html">border</a> <a href="tests/demo.html">demo</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/plotters.html">plotters</a> <a href="tests/plugins.html">plugins</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a><br> \
  <br> </div> \
';
 
staticAutoComplete["titleHeight"] = ' \
<div class="option"><a name="titleHeight"></a><b>titleHeight</b><br> \
  <p>Height of the chart title, in pixels. This also controls the default font size of the title. If you style the title on your own, this controls how much space is set aside above the chart for the title\'s div.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 18</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/styled-chart-labels.html">styled-chart-labels</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xLabelHeight"] = ' \
<div class="option"><a name="xLabelHeight"></a><b>xLabelHeight</b><br> \
  <p>Height of the x-axis label, in pixels. This also controls the default font size of the x-axis label. If you style the label on your own, this controls how much space is set aside below the chart for the x-axis label\'s div.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 18</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["xlabel"] = ' \
<div class="option"><a name="xlabel"></a><b>xlabel</b><br> \
  <p>Text to display below the chart\'s x-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the \'dygraph-label\' or \'dygraph-xlabel\' classes.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/border">border</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/border.html">border</a> <a href="tests/demo.html">demo</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/plugins.html">plugins</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a><br> \
  <br> </div> \
';
 
staticAutoComplete["y2label"] = ' \
<div class="option"><a name="y2label"></a><b>y2label</b><br> \
  <p>Text to display to the right of the chart\'s secondary y-axis. This label is only displayed if a secondary y-axis is present. See <a href="http://dygraphs.com/tests/two-axes.html">this test</a> for an example of how to do this. The comments for the \'ylabel\' option generally apply here as well. This label gets a \'dygraph-y2label\' instead of a \'dygraph-ylabel\' class.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["yLabelWidth"] = ' \
<div class="option"><a name="yLabelWidth"></a><b>yLabelWidth</b><br> \
  <p>Width of the div which contains the y-axis label. Since the y-axis label appears rotated 90 degrees, this actually affects the height of its div.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 18</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["ylabel"] = ' \
<div class="option"><a name="ylabel"></a><b>ylabel</b><br> \
  <p>Text to display to the left of the chart\'s y-axis. You can supply any HTML for this value, not just text. If you wish to style it using CSS, use the \'dygraph-label\' or \'dygraph-ylabel\' classes. The text will be rotated 90 degrees by default, so CSS rules may behave in unintuitive ways. No additional space is set aside for a y-axis label. If you need more space, increase the width of the y-axis tick labels using the yAxisLabelWidth option. If you need a wider div for the y-axis label, either style it that way with CSS (but remember that it\'s rotated, so width is controlled by the \'height\' property) or set the yLabelWidth option.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/border">border</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/border.html">border</a> <a href="tests/demo.html">demo</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/plugins.html">plugins</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["plugins"] = ' \
<div class="option"><a name="Configuration"></a><a name="plugins"></a><b>plugins</b><br> \
  <p>Defines per-graph plug-ins. Useful for per-graph customization</p> \
  <i><span class="dyDescType">Type:</span> Array<plugin></plugin></i><br> \
  <i><span class="dyDescType">Default:</span> []</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/plugins.html">plugins</a><br> \
  <br> </div> \
';
 
staticAutoComplete["file"] = ' \
<div class="option"><a name="Data"></a><a name="file"></a><b>file</b><br> \
  <p>Sets the data being displayed in the chart. This can only be set when calling updateOptions; it cannot be set from the constructor. For a full description of valid data formats, see the <a href="http://dygraphs.com/data.html">Data Formats</a> page.</p> \
  <i><span class="dyDescType">Type:</span> string (URL of CSV or CSV), GViz DataTable or 2D Array</i><br> \
  <i><span class="dyDescType">Default:</span> (set when constructed)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["connectSeparatedPoints"] = ' \
<div class="option"><a name="Data Line display"></a><a name="connectSeparatedPoints"></a><b>connectSeparatedPoints</b><br> \
  <p>Usually, when Dygraphs encounters a missing value in a data series, it interprets this as a gap and draws it as such. If, instead, the missing values represents an x-value for which only a different series has data, then you\'ll want to connect the dots by setting this to true. To explicitly include a gap with this option set, use a value of NaN.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/independent-series">independent-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/connect-separated.html">connect-separated</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/missing-data.html">missing-data</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawGapEdgePoints"] = ' \
<div class="option"><a name="drawGapEdgePoints"></a><b>drawGapEdgePoints</b><br> \
  <p>Draw points at the edges of gaps in the data. This improves visibility of small data segments or other data irregularities.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/isolated-points.html">isolated-points</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawHighlightPointCallback"] = ' \
<div class="option"><a name="drawHighlightPointCallback"></a><b>drawHighlightPointCallback</b><br> \
  <p>Draw a custom item when a point is highlighted.  Default is a small dot matching the series color. This method should constrain drawing to within pointSize pixels from (cx, cy) Also see <a href="#drawPointCallback">drawPointCallback</a></p> \
  <i><span class="dyDescType">Type:</span> function(g, seriesName, canvasContext, cx, cy, color, pointSize)</i><br> \
  <div class="parameters"> \
<i>g</i>: the reference graph<br> \
<i>seriesName</i>: the name of the series<br> \
<i>canvasContext</i>: the canvas to draw on<br> \
<i>cx</i>: center x coordinate<br> \
<i>cy</i>: center y coordinate<br> \
<i>color</i>: series color<br> \
<i>pointSize</i>: the radius of the image.<br> \
<i>idx</i>: the row-index of the point in the data.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawPointCallback"] = ' \
<div class="option"><a name="drawPointCallback"></a><b>drawPointCallback</b><br> \
  <p>Draw a custom item when drawPoints is enabled. Default is a small dot matching the series color. This method should constrain drawing to within pointSize pixels from (cx, cy).  Also see <a href="#drawHighlightPointCallback">drawHighlightPointCallback</a></p> \
  <i><span class="dyDescType">Type:</span> function(g, seriesName, canvasContext, cx, cy, color, pointSize)</i><br> \
  <div class="parameters"> \
<i>g</i>: the reference graph<br> \
<i>seriesName</i>: the name of the series<br> \
<i>canvasContext</i>: the canvas to draw on<br> \
<i>cx</i>: center x coordinate<br> \
<i>cy</i>: center y coordinate<br> \
<i>color</i>: series color<br> \
<i>pointSize</i>: the radius of the image.<br> \
<i>idx</i>: the row-index of the point in the data.<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawPoints"] = ' \
<div class="option"><a name="drawPoints"></a><b>drawPoints</b><br> \
  <p>Draw a small dot at each point, in addition to a line going through the point. This makes the individual data points easier to see, but can increase visual clutter in the chart. The small dot can be replaced with a custom rendering by supplying a <a href="#drawPointCallback">drawPointCallback</a>.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/independent-series">independent-series</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/linear-regression">linear-regression</a> <a href="gallery/#g/per-series">per-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/draw-points.html">draw-points</a> <a href="tests/dynamic-update.html">dynamic-update</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/interaction.html">interaction</a> <a href="tests/linear-regression-addseries.html">linear-regression-addseries</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/linear-regression.html">linear-regression</a> <a href="tests/per-series.html">per-series</a><br> \
  <br> </div> \
';
 
staticAutoComplete["fillGraph"] = ' \
<div class="option"><a name="fillGraph"></a><b>fillGraph</b><br> \
  <p>Should the area underneath the graph be filled? This option is not compatible with error bars. This may be set on a <a href="per-axis.html">per-series</a> basis.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/fillGraph.html">fillGraph</a> <a href="tests/steps.html">steps</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["plotter"] = ' \
<div class="option"><a name="plotter"></a><b>plotter</b><br> \
  <p>A function (or array of functions) which plot each data series on the chart. TODO(danvk): more details! May be set per-series.</p> \
  <i><span class="dyDescType">Type:</span> array or function</i><br> \
  <i><span class="dyDescType">Default:</span> [DygraphCanvasRenderer.Plotters.fillPlotter, DygraphCanvasRenderer.Plotters.errorPlotter, DygraphCanvasRenderer.Plotters.linePlotter]</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/plotters.html">plotters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pointSize"] = ' \
<div class="option"><a name="pointSize"></a><b>pointSize</b><br> \
  <p>The size of the dot to draw on each point in pixels (see drawPoints). A dot is always drawn when a point is "isolated", i.e. there is a missing point on either side of it. This also controls the size of those dots.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 1</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/per-series">per-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/isolated-points.html">isolated-points</a> <a href="tests/per-series.html">per-series</a><br> \
  <br> </div> \
';
 
staticAutoComplete["stackedGraph"] = ' \
<div class="option"><a name="stackedGraph"></a><b>stackedGraph</b><br> \
  <p>If set, stack series on top of one another rather than drawing them independently. The first series specified in the input data will wind up on top of the chart and the last will be on bottom. NaN values are drawn as white areas without a line on top, see stackedGraphNaNFill for details.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-series">highlighted-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/stacked.html">stacked</a> <a href="tests/steps.html">steps</a><br> \
  <br> </div> \
';
 
staticAutoComplete["stackedGraphNaNFill"] = ' \
<div class="option"><a name="stackedGraphNaNFill"></a><b>stackedGraphNaNFill</b><br> \
  <p>Controls handling of NaN values inside a stacked graph. NaN values are interpolated/extended for stacking purposes, but the actual point value remains NaN in the legend display. Valid option values are "all" (interpolate internally, repeat leftmost and rightmost value as needed), "inside" (interpolate internally only, use zero outside leftmost and rightmost value), and "none" (treat NaN as zero everywhere).</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> all</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["stepPlot"] = ' \
<div class="option"><a name="stepPlot"></a><b>stepPlot</b><br> \
  <p>When set, display the graph as a step plot instead of a line plot. This option may either be set for the whole graph or for single series.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/avoid-min-zero">avoid-min-zero</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/avoidMinZero.html">avoidMinZero</a> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/steps.html">steps</a><br> \
  <br> </div> \
';
 
staticAutoComplete["strokeBorderColor"] = ' \
<div class="option"><a name="strokeBorderColor"></a><b>strokeBorderColor</b><br> \
  <p>Color for the line border used if strokeBorderWidth is set.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> white</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["strokeBorderWidth"] = ' \
<div class="option"><a name="strokeBorderWidth"></a><b>strokeBorderWidth</b><br> \
  <p>Draw a border around graph lines to make crossing lines more easily distinguishable. Useful for graphs with many lines.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-series">highlighted-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/series-highlight.html">series-highlight</a><br> \
  <br> </div> \
';
 
staticAutoComplete["strokePattern"] = ' \
<div class="option"><a name="strokePattern"></a><b>strokePattern</b><br> \
  <p>A custom pattern array where the even index is a draw and odd is a space in pixels. If null then it draws a solid line. The array should have a even length as any odd lengthed array could be expressed as a smaller even length array. This is used to create dashed lines.</p> \
  <i><span class="dyDescType">Type:</span> array<integer></integer></i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/per-series.html">per-series</a> <a href="tests/plotters.html">plotters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["strokeWidth"] = ' \
<div class="option"><a name="strokeWidth"></a><b>strokeWidth</b><br> \
  <p>The width of the lines connecting data points. This can be used to increase the contrast or some graphs.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 2.0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/highlighted-series">highlighted-series</a> <a href="gallery/#g/linear-regression">linear-regression</a> <a href="gallery/#g/per-series">per-series</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/drawing.html">drawing</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/layout-options.html">layout-options</a> <a href="tests/linear-regression-addseries.html">linear-regression-addseries</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/linear-regression.html">linear-regression</a> <a href="tests/per-series.html">per-series</a> <a href="tests/plotters.html">plotters</a> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["visibility"] = ' \
<div class="option"><a name="visibility"></a><b>visibility</b><br> \
  <p>Which series should initially be visible? Once the Dygraph has been constructed, you can access and modify the visibility of each series using the <code>visibility</code> and <code>setVisibility</code> methods.</p> \
  <i><span class="dyDescType">Type:</span> Array of booleans</i><br> \
  <i><span class="dyDescType">Default:</span> [true, true, ...]</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/color-visibility">color-visibility</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/color-visibility.html">color-visibility</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/visibility.html">visibility</a><br> \
  <br> </div> \
';
 
staticAutoComplete["colorSaturation"] = ' \
<div class="option"><a name="Data Series Colors"></a><a name="colorSaturation"></a><b>colorSaturation</b><br> \
  <p>If <strong>colors</strong> is not specified, saturation of the automatically-generated data series colors.</p> \
  <i><span class="dyDescType">Type:</span> float (0.0 - 1.0)</i><br> \
  <i><span class="dyDescType">Default:</span> 1.0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["colorValue"] = ' \
<div class="option"><a name="colorValue"></a><b>colorValue</b><br> \
  <p>If colors is not specified, value of the data series colors, as in hue/saturation/value. (0.0-1.0, default 0.5)</p> \
  <i><span class="dyDescType">Type:</span> float (0.0 - 1.0)</i><br> \
  <i><span class="dyDescType">Default:</span> 1.0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["colors"] = ' \
<div class="option"><a name="colors"></a><b>colors</b><br> \
  <p>List of colors for the data series. These can be of the form "#AABBCC" or "rgb(255,100,200)" or "yellow", etc. If not specified, equally-spaced points around a color wheel are used.</p> \
  <i><span class="dyDescType">Type:</span> array<string></string></i><br> \
  <i><span class="dyDescType">Default:</span> (see description)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/color-cycle">color-cycle</a> <a href="gallery/#g/color-visibility">color-visibility</a> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/century-scale.html">century-scale</a> <a href="tests/color-cycle.html">color-cycle</a> <a href="tests/color-visibility.html">color-visibility</a> <a href="tests/demo.html">demo</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a><br> \
  <br> </div> \
';
 
staticAutoComplete["fillAlpha"] = ' \
<div class="option"><a name="fillAlpha"></a><b>fillAlpha</b><br> \
  <p>Error bars (or custom bars) for each series are drawn in the same color as the series, but with partial transparency. This sets the transparency. A value of 0.0 means that the error bars will not be drawn, whereas a value of 1.0 means that the error bars will be as dark as the line for the series itself. This can be used to produce chart lines whose thickness varies at each point.</p> \
  <i><span class="dyDescType">Type:</span> float (0.0 - 1.0)</i><br> \
  <i><span class="dyDescType">Default:</span> 0.15</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["timingName"] = ' \
<div class="option"><a name="Debugging"></a><a name="timingName"></a><b>timingName</b><br> \
  <p>Set this option to log timing information. The value of the option will be logged along with the timimg, so that you can distinguish multiple dygraphs on the same page.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["avoidMinZero"] = ' \
<div class="option"><a name="Deprecated"></a><a name="avoidMinZero"></a><b>avoidMinZero</b><br> \
  <p>Deprecated, please use yRangePad instead. When set, the heuristic that fixes the Y axis at zero for a data set with the minimum Y value of zero is disabled. \
This is particularly useful for data sets that contain many zero values, especially for step plots which may otherwise have lines not visible running along the bottom axis.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/avoid-min-zero">avoid-min-zero</a> <a href="gallery/#g/edge-padding">edge-padding</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/avoidMinZero.html">avoidMinZero</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawXGrid"] = ' \
<div class="option"><a name="drawXGrid"></a><b>drawXGrid</b><br> \
  <p>Use the per-axis option drawGrid instead. Whether to display vertical gridlines under the chart.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/demo.html">demo</a> <a href="tests/plotters.html">plotters</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawYGrid"] = ' \
<div class="option"><a name="drawYGrid"></a><b>drawYGrid</b><br> \
  <p>Use the per-axis option drawGrid instead. Whether to display horizontal gridlines under the chart.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pixelsPerXLabel"] = ' \
<div class="option"><a name="pixelsPerXLabel"></a><b>pixelsPerXLabel</b><br> \
  <p>Prefer axes { x: { pixelsPerLabel } }</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["pixelsPerYLabel"] = ' \
<div class="option"><a name="pixelsPerYLabel"></a><b>pixelsPerYLabel</b><br> \
  <p>Prefer axes: { y: { pixelsPerLabel } }</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/spacing.html">spacing</a><br> \
  <br> </div> \
';
 
staticAutoComplete["xAxisLabelFormatter"] = ' \
<div class="option"><a name="xAxisLabelFormatter"></a><b>xAxisLabelFormatter</b><br> \
  <p>Prefer axes { x: { axisLabelFormatter } }</p> \
  <i><span class="dyDescType">Type:</span> (missing)</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["xValueFormatter"] = ' \
<div class="option"><a name="xValueFormatter"></a><b>xValueFormatter</b><br> \
  <p>Prefer axes: { x: { valueFormatter } }</p> \
  <i><span class="dyDescType">Type:</span> (missing)</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["yAxisLabelFormatter"] = ' \
<div class="option"><a name="yAxisLabelFormatter"></a><b>yAxisLabelFormatter</b><br> \
  <p>Prefer axes: { y: { axisLabelFormatter } }</p> \
  <i><span class="dyDescType">Type:</span> (missing)</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["yValueFormatter"] = ' \
<div class="option"><a name="yValueFormatter"></a><b>yValueFormatter</b><br> \
  <p>Prefer axes: { y: { valueFormatter } }</p> \
  <i><span class="dyDescType">Type:</span> (missing)</i><br> \
  <i><span class="dyDescType">Default:</span> (missing)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/labelsKMB.html">labelsKMB</a><br> \
  <br> </div> \
';
 
staticAutoComplete["customBars"] = ' \
<div class="option"><a name="Error Bars"></a><a name="customBars"></a><b>customBars</b><br> \
  <p>When set, parse each CSV cell as "low;middle;high". Error bars will be drawn for each point between low and high, with the series itself going through middle.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/stock">stock</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-bars.html">custom-bars</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/steps.html">steps</a> <a href="tests/stock.html">stock</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/zero-series.html">zero-series</a><br> \
  <br> </div> \
';
 
staticAutoComplete["errorBars"] = ' \
<div class="option"><a name="errorBars"></a><b>errorBars</b><br> \
  <p>Does the data contain standard deviations? Setting this to true alters the input format (see above).</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/resize">resize</a> <a href="gallery/#g/synchronize">synchronize</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/custom-bars.html">custom-bars</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/draw-points.html">draw-points</a> <a href="tests/fractions.html">fractions</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/interaction.html">interaction</a> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/numeric-gviz.html">numeric-gviz</a> <a href="tests/perf.html">perf</a> <a href="tests/plotters.html">plotters</a> <a href="tests/resize.html">resize</a> <a href="tests/steps.html">steps</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/underlay-callback.html">underlay-callback</a> <a href="tests/visibility.html">visibility</a> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["fillAlpha"] = ' \
<div class="option"><a name="fillAlpha"></a><b>fillAlpha</b><br> \
  <p>Error bars (or custom bars) for each series are drawn in the same color as the series, but with partial transparency. This sets the transparency. A value of 0.0 means that the error bars will not be drawn, whereas a value of 1.0 means that the error bars will be as dark as the line for the series itself. This can be used to produce chart lines whose thickness varies at each point.</p> \
  <i><span class="dyDescType">Type:</span> float (0.0 - 1.0)</i><br> \
  <i><span class="dyDescType">Default:</span> 0.15</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["fractions"] = ' \
<div class="option"><a name="fractions"></a><b>fractions</b><br> \
  <p>When set, attempt to parse each cell in the CSV file as "a/b", where a and b are integers. The ratio will be plotted. This allows computation of Wilson confidence intervals (see below).</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/fractions.html">fractions</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rollPeriod"] = ' \
<div class="option"><a name="rollPeriod"></a><b>rollPeriod</b><br> \
  <p>Number of days over which to average data. Discussed extensively above.</p> \
  <i><span class="dyDescType">Type:</span> integer &gt;= 1</i><br> \
  <i><span class="dyDescType">Default:</span> 1</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/resize">resize</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/synchronize">synchronize</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a> <a href="tests/century-scale.html">century-scale</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/draw-points.html">draw-points</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/perf.html">perf</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/resize.html">resize</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/spacing.html">spacing</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/unboxed-spark.html">unboxed-spark</a> <a href="tests/underlay-callback.html">underlay-callback</a> <a href="tests/visibility.html">visibility</a><br> \
  <br> </div> \
';
 
staticAutoComplete["sigma"] = ' \
<div class="option"><a name="sigma"></a><b>sigma</b><br> \
  <p>When errorBars is set, shade this many standard deviations above/below each point.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 2.0</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["wilsonInterval"] = ' \
<div class="option"><a name="wilsonInterval"></a><b>wilsonInterval</b><br> \
  <p>Use in conjunction with the "fractions" option. Instead of plotting +/- N standard deviations, dygraphs will compute a Wilson confidence interval and plot that. This has more reasonable behavior for ratios close to 0 or 1.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["drawGrid"] = ' \
<div class="option"><a name="Grid"></a><a name="drawGrid"></a><b>drawGrid</b><br> \
  <p>Whether to display gridlines in the chart. This may be set on a per-axis basis to define the visibility of each axis\' grid separately.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true for x and y, false for y2</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawXGrid"] = ' \
<div class="option"><a name="drawXGrid"></a><b>drawXGrid</b><br> \
  <p>Use the per-axis option drawGrid instead. Whether to display vertical gridlines under the chart.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/demo.html">demo</a> <a href="tests/plotters.html">plotters</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["drawYGrid"] = ' \
<div class="option"><a name="drawYGrid"></a><b>drawYGrid</b><br> \
  <p>Use the per-axis option drawGrid instead. Whether to display horizontal gridlines under the chart.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["gridLineColor"] = ' \
<div class="option"><a name="gridLineColor"></a><b>gridLineColor</b><br> \
  <p>The color of the gridlines. This may be set on a per-axis basis to define each axis\' grid separately.</p> \
  <i><span class="dyDescType">Type:</span> red, blue</i><br> \
  <i><span class="dyDescType">Default:</span> rgb(128,128,128)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/edge-padding">edge-padding</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/grid_dot.html">grid_dot</a><br> \
  <br> </div> \
';
 
staticAutoComplete["gridLineWidth"] = ' \
<div class="option"><a name="gridLineWidth"></a><b>gridLineWidth</b><br> \
  <p>Thickness (in pixels) of the gridlines drawn under the chart. The vertical/horizontal gridlines can be turned off entirely by using the drawXGrid and drawYGrid options. This may be set on a per-axis basis to define each axis\' grid separately.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 0.3</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a><br> \
  <br> </div> \
';
 
staticAutoComplete["independentTicks"] = ' \
<div class="option"><a name="independentTicks"></a><b>independentTicks</b><br> \
  <p>Only valid for y and y2, has no effect on x: This option defines whether the y axes should align their ticks or if they should be independent. Possible combinations: 1.) y=true, y2=false (default): y is the primary axis and the y2 ticks are aligned to the the ones of y. (only 1 grid) 2.) y=false, y2=true: y2 is the primary axis and the y ticks are aligned to the the ones of y2. (only 1 grid) 3.) y=true, y2=true: Both axis are independent and have their own ticks. (2 grids) 4.) y=false, y2=false: Invalid configuration causes an error.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true for y, false for y2</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pixelsPerLabel"] = ' \
<div class="option"><a name="pixelsPerLabel"></a><b>pixelsPerLabel</b><br> \
  <p>Number of pixels to require between each x- and y-label. Larger values will yield a sparser axis with fewer ticks. This is set on a <a href="per-axis.html">per-axis</a> basis.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 60 (x-axis) or 30 (y-axes)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["animatedZooms"] = ' \
<div class="option"><a name="Interactive Elements"></a><a name="animatedZooms"></a><b>animatedZooms</b><br> \
  <p>Set this option to animate the transition between zoom windows. Applies to programmatic and interactive zooms. Note that if you also set a drawCallback, it will be called several times on each zoom. If you set a zoomCallback, it will only be called after the animation is complete.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-region">highlighted-region</a> <a href="gallery/#g/link-interaction">link-interaction</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/highlighted-region.html">highlighted-region</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/plotters.html">plotters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["hideOverlayOnMouseOut"] = ' \
<div class="option"><a name="hideOverlayOnMouseOut"></a><b>hideOverlayOnMouseOut</b><br> \
  <p>Whether to hide the legend when the mouse leaves the chart area.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/gviz-selection.html">gviz-selection</a><br> \
  <br> </div> \
';
 
staticAutoComplete["highlightCircleSize"] = ' \
<div class="option"><a name="highlightCircleSize"></a><b>highlightCircleSize</b><br> \
  <p>The size in pixels of the dot drawn over highlighted points.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 4</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-series">highlighted-series</a> <a href="gallery/#g/per-series">per-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/per-series.html">per-series</a> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["highlightSeriesBackgroundAlpha"] = ' \
<div class="option"><a name="highlightSeriesBackgroundAlpha"></a><b>highlightSeriesBackgroundAlpha</b><br> \
  <p>Fade the background while highlighting series. 1=fully visible background (disable fading), 0=hiddden background (show highlighted series only).</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 0.5</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["highlightSeriesOpts"] = ' \
<div class="option"><a name="highlightSeriesOpts"></a><b>highlightSeriesOpts</b><br> \
  <p>When set, the options from this object are applied to the timeseries closest to the mouse pointer for interactive highlighting. See also \'highlightCallback\'. Example: highlightSeriesOpts: { strokeWidth: 3 }.</p> \
  <i><span class="dyDescType">Type:</span> Object</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/highlighted-series">highlighted-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/series-highlight.html">series-highlight</a><br> \
  <br> </div> \
';
 
staticAutoComplete["interactionModel"] = ' \
<div class="option"><a name="interactionModel"></a><b>interactionModel</b><br> \
  <p>TODO(konigsberg): document this</p> \
  <i><span class="dyDescType">Type:</span> Object</i><br> \
  <i><span class="dyDescType">Default:</span> ...</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/interaction">interaction</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/drawing.html">drawing</a> <a href="tests/interaction.html">interaction</a><br> \
  <br> </div> \
';
 
staticAutoComplete["panEdgeFraction"] = ' \
<div class="option"><a name="panEdgeFraction"></a><b>panEdgeFraction</b><br> \
  <p>A value representing the farthest a graph may be panned, in percent of the display. For example, a value of 0.1 means that the graph can only be panned 10% pased the edges of the displayed values. null means no bounds.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/zoom.html">zoom</a><br> \
  <br> </div> \
';
 
staticAutoComplete["pointClickCallback"] = ' \
<div class="option"><a name="pointClickCallback"></a><b>pointClickCallback</b><br> \
  <p>A function to call when a data point is clicked. and the point that was clicked.</p> \
  <i><span class="dyDescType">Type:</span> function(e, point)</i><br> \
  <div class="parameters"> \
<i>e</i>: the event object for the click<br> \
<i>point</i>: the point that was clicked See <a href="#point_properties">Point properties</a> for details<br> </div> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rangeSelectorHeight"] = ' \
<div class="option"><a name="rangeSelectorHeight"></a><b>rangeSelectorHeight</b><br> \
  <p>Height, in pixels, of the range selector widget. This option can only be specified at Dygraph creation time.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 40</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/range-selector.html">range-selector</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rangeSelectorPlotFillColor"] = ' \
<div class="option"><a name="rangeSelectorPlotFillColor"></a><b>rangeSelectorPlotFillColor</b><br> \
  <p>The range selector mini plot fill color. This can be of the form "#AABBCC" or "rgb(255,100,200)" or "yellow". You can also specify null or "" to turn off fill.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> #A7B1C4</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/range-selector.html">range-selector</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rangeSelectorPlotStrokeColor"] = ' \
<div class="option"><a name="rangeSelectorPlotStrokeColor"></a><b>rangeSelectorPlotStrokeColor</b><br> \
  <p>The range selector mini plot stroke color. This can be of the form "#AABBCC" or "rgb(255,100,200)" or "yellow". You can also specify null or "" to turn off stroke.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> #808FAB</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/range-selector.html">range-selector</a><br> \
  <br> </div> \
';
 
staticAutoComplete["showLabelsOnHighlight"] = ' \
<div class="option"><a name="showLabelsOnHighlight"></a><b>showLabelsOnHighlight</b><br> \
  <p>Whether to show the legend upon mouseover.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["showRangeSelector"] = ' \
<div class="option"><a name="showRangeSelector"></a><b>showRangeSelector</b><br> \
  <p>Show or hide the range selector widget.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/range-selector">range-selector</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/iframe.html">iframe</a> <a href="tests/range-selector.html">range-selector</a><br> \
  <br> </div> \
';
 
staticAutoComplete["showRoller"] = ' \
<div class="option"><a name="showRoller"></a><b>showRoller</b><br> \
  <p>If the rolling average period text box should be shown.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/dynamic-update.html">dynamic-update</a> <a href="tests/fractions.html">fractions</a> <a href="tests/isolated-points.html">isolated-points</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/numeric-gviz.html">numeric-gviz</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/steps.html">steps</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/underlay-callback.html">underlay-callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["hideOverlayOnMouseOut"] = ' \
<div class="option"><a name="Legend"></a><a name="hideOverlayOnMouseOut"></a><b>hideOverlayOnMouseOut</b><br> \
  <p>Whether to hide the legend when the mouse leaves the chart area.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/gviz-selection.html">gviz-selection</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labels"] = ' \
<div class="option"><a name="labels"></a><b>labels</b><br> \
  <p>A name for each data series, including the independent (X) series. For CSV files and DataTable objections, this is determined by context. For raw data, this must be specified. If it is not, default values are supplied and a warning is logged.</p> \
  <i><span class="dyDescType">Type:</span> array<string></string></i><br> \
  <i><span class="dyDescType">Default:</span> ["X", "Y1", "Y2", ...]*</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-native">annotations-native</a> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/dygraph-simple">dygraph-simple</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/highlighted-region">highlighted-region</a> <a href="gallery/#g/highlighted-series">highlighted-series</a> <a href="gallery/#g/highlighted-weekends">highlighted-weekends</a> <a href="gallery/#g/independent-series">independent-series</a> <a href="gallery/#g/linear-regression">linear-regression</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/negative">negative</a> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation-native.html">annotation-native</a> <a href="tests/connect-separated.html">connect-separated</a> <a href="tests/custom-bars.html">custom-bars</a> <a href="tests/dateWindow.html">dateWindow</a> <a href="tests/daylight-savings.html">daylight-savings</a> <a href="tests/drawing.html">drawing</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a> <a href="tests/dygraph.html">dygraph</a> <a href="tests/dynamic-update.html">dynamic-update</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/highlighted-region.html">highlighted-region</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/isolated-points.html">isolated-points</a> <a href="tests/label-div.html">label-div</a> <a href="tests/labelsKMB.html">labelsKMB</a> <a href="tests/linear-regression-addseries.html">linear-regression-addseries</a> <a href="tests/linear-regression.html">linear-regression</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/native-format.html">native-format</a> <a href="tests/negative.html">negative</a> <a href="tests/perf.html">perf</a> <a href="tests/plotter.html">plotter</a> <a href="tests/plotters.html">plotters</a> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/small-range-zero.html">small-range-zero</a> <a href="tests/steps.html">steps</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsDiv"] = ' \
<div class="option"><a name="labelsDiv"></a><b>labelsDiv</b><br> \
  <p>Show data labels in an external div, rather than on the graph.  This value can either be a div element or a div id.</p> \
  <i><span class="dyDescType">Type:</span> DOM element or string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/century-scale.html">century-scale</a> <a href="tests/demo.html">demo</a> <a href="tests/label-div.html">label-div</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/unboxed-spark.html">unboxed-spark</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsDivStyles"] = ' \
<div class="option"><a name="labelsDivStyles"></a><b>labelsDivStyles</b><br> \
  <p>Additional styles to apply to the currently-highlighted points div. For example, { \'fontWeight\': \'bold\' } will make the labels bold. In general, it is better to use CSS to style the .dygraph-legend class than to use this property.</p> \
  <i><span class="dyDescType">Type:</span> {}</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/border">border</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/border.html">border</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsDivWidth"] = ' \
<div class="option"><a name="labelsDivWidth"></a><b>labelsDivWidth</b><br> \
  <p>Width (in pixels) of the div which shows information on the currently-highlighted points.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 250</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/customLabelCss3.html">customLabelCss3</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsSeparateLines"] = ' \
<div class="option"><a name="labelsSeparateLines"></a><b>labelsSeparateLines</b><br> \
  <p>Put <code>&lt;br/&gt;</code> between lines in the label string. Often used in conjunction with <strong>labelsDiv</strong>.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/century-scale.html">century-scale</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/demo.html">demo</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsShowZeroValues"] = ' \
<div class="option"><a name="labelsShowZeroValues"></a><b>labelsShowZeroValues</b><br> \
  <p>Show zero value labels in the labelsDiv.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/label-div.html">label-div</a><br> \
  <br> </div> \
';
 
staticAutoComplete["legend"] = ' \
<div class="option"><a name="legend"></a><b>legend</b><br> \
  <p>When to display the legend. By default, it only appears when a user mouses over the chart. Set it to "always" to always display a legend of some sort.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> always</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/css-positioning.html">css-positioning</a> <a href="tests/demo.html">demo</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/per-series.html">per-series</a> <a href="tests/plotters.html">plotters</a> <a href="tests/plugins.html">plugins</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a><br> \
  <br> </div> \
';
 
staticAutoComplete["showLabelsOnHighlight"] = ' \
<div class="option"><a name="showLabelsOnHighlight"></a><b>showLabelsOnHighlight</b><br> \
  <p>Whether to show the legend upon mouseover.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/callbacks">callbacks</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/callback.html">callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["valueFormatter"] = ' \
<div class="option"><a name="valueFormatter"></a><b>valueFormatter</b><br> \
  <p>Function to provide a custom display format for the values displayed on mouseover. This does not affect the values that appear on tick marks next to the axes. To format those, see axisLabelFormatter. This is usually set on a <a href="per-axis.html">per-axis</a> basis. For date axes, you can call new Date(millis) to get a Date object. opts is a function you can call to access various options (e.g. opts(\'labelsKMB\')).</p> \
  <i><span class="dyDescType">Type:</span> function(num or millis, opts, dygraph)</i><br> \
  <i><span class="dyDescType">Default:</span> Depends on the type of your data.</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["height"] = ' \
<div class="option"><a name="Overall display"></a><a name="height"></a><b>height</b><br> \
  <p>Height, in pixels, of the chart. If the container div has been explicitly sized, this will be ignored.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 320</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-gviz">annotations-gviz</a> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/border">border</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/color-cycle">color-cycle</a> <a href="gallery/#g/color-visibility">color-visibility</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/highlighted-region">highlighted-region</a> <a href="gallery/#g/highlighted-series">highlighted-series</a> <a href="gallery/#g/highlighted-weekends">highlighted-weekends</a> <a href="gallery/#g/independent-series">independent-series</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/linear-regression">linear-regression</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/negative">negative</a> <a href="gallery/#g/no-range">no-range</a> <a href="gallery/#g/plotter">plotter</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/stock">stock</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/synchronize">synchronize</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/century-scale.html">century-scale</a> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/color-cycle.html">color-cycle</a> <a href="tests/color-visibility.html">color-visibility</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/demo.html">demo</a> <a href="tests/drawing.html">drawing</a> <a href="tests/iframe.html">iframe</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/no-range.html">no-range</a> <a href="tests/plotters.html">plotters</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/small-range-zero.html">small-range-zero</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rightGap"] = ' \
<div class="option"><a name="rightGap"></a><b>rightGap</b><br> \
  <p>Number of pixels to leave blank at the right edge of the Dygraph. This makes it easier to highlight the right-most data point.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 5</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["width"] = ' \
<div class="option"><a name="width"></a><b>width</b><br> \
  <p>Width, in pixels, of the chart. You can use the value "wholeLine" to indicate the div will expand and stick to the window size.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 480</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-gviz">annotations-gviz</a> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/border">border</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/color-cycle">color-cycle</a> <a href="gallery/#g/color-visibility">color-visibility</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/drawing">drawing</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/edge-padding">edge-padding</a> <a href="gallery/#g/highlighted-region">highlighted-region</a> <a href="gallery/#g/highlighted-series">highlighted-series</a> <a href="gallery/#g/highlighted-weekends">highlighted-weekends</a> <a href="gallery/#g/independent-series">independent-series</a> <a href="gallery/#g/interaction">interaction</a> <a href="gallery/#g/linear-regression">linear-regression</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/negative">negative</a> <a href="gallery/#g/no-range">no-range</a> <a href="gallery/#g/plotter">plotter</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/stock">stock</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/synchronize">synchronize</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/century-scale.html">century-scale</a> <a href="tests/charting-combinations.html">charting-combinations</a> <a href="tests/color-cycle.html">color-cycle</a> <a href="tests/color-visibility.html">color-visibility</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/daylight-savings.html">daylight-savings</a> <a href="tests/demo.html">demo</a> <a href="tests/drawing.html">drawing</a> <a href="tests/iframe.html">iframe</a> <a href="tests/independent-series.html">independent-series</a> <a href="tests/linear-regression-addseries.html">linear-regression-addseries</a> <a href="tests/linear-regression-fractions.html">linear-regression-fractions</a> <a href="tests/linear-regression.html">linear-regression</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/no-range.html">no-range</a> <a href="tests/plotters.html">plotters</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/series-highlight.html">series-highlight</a> <a href="tests/small-range-zero.html">small-range-zero</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["rollPeriod"] = ' \
<div class="option"><a name="Rolling Averages"></a><a name="rollPeriod"></a><b>rollPeriod</b><br> \
  <p>Number of days over which to average data. Discussed extensively above.</p> \
  <i><span class="dyDescType">Type:</span> integer &gt;= 1</i><br> \
  <i><span class="dyDescType">Default:</span> 1</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/link-interaction">link-interaction</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/resize">resize</a> <a href="gallery/#g/styled-chart-labels">styled-chart-labels</a> <a href="gallery/#g/synchronize">synchronize</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a> <a href="tests/century-scale.html">century-scale</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/customLabel.html">customLabel</a> <a href="tests/customLabelCss3.html">customLabelCss3</a> <a href="tests/draw-points.html">draw-points</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/link-interaction.html">link-interaction</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/no-visibility.html">no-visibility</a> <a href="tests/perf.html">perf</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/resize.html">resize</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/spacing.html">spacing</a> <a href="tests/styled-chart-labels.html">styled-chart-labels</a> <a href="tests/synchronize.html">synchronize</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/unboxed-spark.html">unboxed-spark</a> <a href="tests/underlay-callback.html">underlay-callback</a> <a href="tests/visibility.html">visibility</a><br> \
  <br> </div> \
';
 
staticAutoComplete["showRoller"] = ' \
<div class="option"><a name="showRoller"></a><b>showRoller</b><br> \
  <p>If the rolling average period text box should be shown.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/callbacks">callbacks</a> <a href="gallery/#g/dynamic-update">dynamic-update</a> <a href="gallery/#g/range-selector">range-selector</a> <a href="gallery/#g/temperature-sf-ny">temperature-sf-ny</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation.html">annotation</a> <a href="tests/callback.html">callback</a> <a href="tests/crosshair.html">crosshair</a> <a href="tests/dynamic-update.html">dynamic-update</a> <a href="tests/fractions.html">fractions</a> <a href="tests/isolated-points.html">isolated-points</a> <a href="tests/missing-data.html">missing-data</a> <a href="tests/numeric-gviz.html">numeric-gviz</a> <a href="tests/range-selector.html">range-selector</a> <a href="tests/steps.html">steps</a> <a href="tests/temperature-sf-ny.html">temperature-sf-ny</a> <a href="tests/underlay-callback.html">underlay-callback</a><br> \
  <br> </div> \
';
 
staticAutoComplete["series"] = ' \
<div class="option"><a name="Series"></a><a name="series"></a><b>series</b><br> \
  <p>Defines per-series options. Its keys match the y-axis label names, and the values are dictionaries themselves that contain options specific to that series. When this option is missing, it falls back on the old-style of per-series options comingled with global options.</p> \
  <i><span class="dyDescType">Type:</span> Object</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-native">annotations-native</a> <a href="gallery/#g/annotations">annotations</a> <a href="gallery/#g/independent-series">independent-series</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation-native.html">annotation-native</a> <a href="tests/annotation.html">annotation</a> <a href="tests/custom-circles.html">custom-circles</a> <a href="tests/dygraph-many-points-benchmark.html">dygraph-many-points-benchmark</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/isolated-points.html">isolated-points</a> <a href="tests/per-series.html">per-series</a> <a href="tests/steps.html">steps</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["digitsAfterDecimal"] = ' \
<div class="option"><a name="Value display/formatting"></a><a name="digitsAfterDecimal"></a><b>digitsAfterDecimal</b><br> \
  <p>Unless it\'s run in scientific mode (see the <code>sigFigs</code> option), dygraphs displays numbers with <code>digitsAfterDecimal</code> digits after the decimal point. Trailing zeros are not displayed, so with a value of 2 you\'ll get \'0\', \'0.1\', \'0.12\', \'123.45\' but not \'123.456\' (it will be rounded to \'123.46\'). Numbers with absolute value less than 0.1^digitsAfterDecimal (i.e. those which would show up as \'0.00\') will be displayed in scientific notation.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 2</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsKMB"] = ' \
<div class="option"><a name="labelsKMB"></a><b>labelsKMB</b><br> \
  <p>Show K/M/B for thousands/millions/billions on y-axis.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <a href="gallery/#g/annotations-gviz">annotations-gviz</a> <a href="gallery/#g/demo">demo</a> <a href="gallery/#g/no-range">no-range</a> <a href="gallery/#g/two-axes">two-axes</a><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/annotation-gviz.html">annotation-gviz</a> <a href="tests/century-scale.html">century-scale</a> <a href="tests/css-positioning.html">css-positioning</a> <a href="tests/demo.html">demo</a> <a href="tests/grid_dot.html">grid_dot</a> <a href="tests/labelsKMB.html">labelsKMB</a> <a href="tests/no-range.html">no-range</a> <a href="tests/plugins.html">plugins</a> <a href="tests/reverse-y-axis.html">reverse-y-axis</a> <a href="tests/two-axes-vr.html">two-axes-vr</a> <a href="tests/two-axes.html">two-axes</a><br> \
  <br> </div> \
';
 
staticAutoComplete["labelsKMG2"] = ' \
<div class="option"><a name="labelsKMG2"></a><b>labelsKMG2</b><br> \
  <p>Show k/M/G for kilo/Mega/Giga on y-axis. This is different than <code>labelsKMB</code> in that it uses base 2, not 10.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/labelsKMB.html">labelsKMB</a><br> \
  <br> </div> \
';
 
staticAutoComplete["maxNumberWidth"] = ' \
<div class="option"><a name="maxNumberWidth"></a><b>maxNumberWidth</b><br> \
  <p>When displaying numbers in normal (not scientific) mode, large numbers will be displayed with many trailing zeros (e.g. 100000000 instead of 1e9). This can lead to unwieldy y-axis labels. If there are more than <code>maxNumberWidth</code> digits to the left of the decimal in a number, dygraphs will switch to scientific notation, even when not operating in scientific mode. If you\'d like to see all those digits, set this to something large, like 20 or 30.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 6</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["sigFigs"] = ' \
<div class="option"><a name="sigFigs"></a><b>sigFigs</b><br> \
  <p>By default, dygraphs displays numbers with a fixed number of digits after the decimal point. If you\'d prefer to have a fixed number of significant figures, set this option to that number of sig figs. A value of 2, for instance, would cause 1 to be display as 1.0 and 1234 to be displayed as 1.23e+3.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';
 
staticAutoComplete["valueFormatter"] = ' \
<div class="option"><a name="valueFormatter"></a><b>valueFormatter</b><br> \
  <p>Function to provide a custom display format for the values displayed on mouseover. This does not affect the values that appear on tick marks next to the axes. To format those, see axisLabelFormatter. This is usually set on a <a href="per-axis.html">per-axis</a> basis. For date axes, you can call new Date(millis) to get a Date object. opts is a function you can call to access various options (e.g. opts(\'labelsKMB\')).</p> \
  <i><span class="dyDescType">Type:</span> function(num or millis, opts, dygraph)</i><br> \
  <i><span class="dyDescType">Default:</span> Depends on the type of your data.</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/multi-scale.html">multi-scale</a> <a href="tests/value-axis-formatters.html">value-axis-formatters</a><br> \
  <br> </div> \
';
 
staticAutoComplete["isZoomedIgnoreProgrammaticZoom"] = ' \
<div class="option"><a name="Zooming"></a><a name="isZoomedIgnoreProgrammaticZoom"></a><b>isZoomedIgnoreProgrammaticZoom</b><br> \
  <p>When this option is passed to updateOptions() along with either the <code>dateWindow</code> or <code>valueRange</code> options, the zoom flags are not changed to reflect a zoomed state. This is primarily useful for when the display area of a chart is changed programmatically and also where manual zooming is allowed and use is made of the <code>isZoomed</code> method to determine this.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <a href="tests/is-zoomed-ignore-programmatic-zoom.html">is-zoomed-ignore-programmatic-zoom</a><br> \
  <br> </div> \
';

// ==========================================================================================================================================
// ==========================================================================================================================================
// GRAPH OPTIONS

staticAutoComplete["includeServerInLabel"] = ' \
<div class="option"><a name="includeServerInLabel"></a><b>includeServerInLabel</b><br> \
  <p>It is recommended to modify this option when the source server of the metric is not important. This option would make the graph omit the server form the label. Collisions due to consolidations are not handled. </p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["includeComponentInLabel"] = ' \
<div class="option"><a name="includeComponentInLabel"></a><b>includeComponentInLabel</b><br> \
  <p>It is recommended to modify this option when the source component of the metric is not important. This option would make the graph omit the component form the label. Collisions due to consolidations are not handled. </p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["gapInMinutes"] = ' \
<div class="option"><a name="gapInMinutes"></a><b>gapInMinutes</b><br> \
  <p>The amount of time in minutes which is considered a gap of data. For a gap of data, the graph will not connect points.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 3</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["gapInSeconds"] = ' \
<div class="option"><a name="gapInSeconds"></a><b>gapInSeconds</b><br> \
  <p>The amount of time in seconds which is considered a gap of data. For a gap of data, the graph will not connect points.</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 3</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["dateWindowRatio"] = ' \
<div class="option"><a name="dateWindowRatio"></a><b>dateWindowRatio</b><br> \
  <p>The percentage of graph data which will be zoomed in upon when rendering. This is useful when combined with "showRangeSelector". Overriden by the "wholeWindow" property.</p> \
  <i><span class="dyDescType">Type:</span> float</i><br> \
  <i><span class="dyDescType">Default:</span> 0.1</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["wholeWindow"] = ' \
<div class="option"><a name="wholeWindow"></a><b>wholeWindow</b><br> \
  <p>Overrides the "dateWindowRatio" property and makes sure the entire dataset is visible without any zoom upon rendering.</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> true</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["match"] = ' \
<div class="option"><a name="match"></a><b>match</b><br> \
  <p>Under lineStyles, match is a regex matching series names. Under calculated data source, used to match series lines for aggregation. <br> match is an object with either "name"/"component"/"server" properties which are regexes matching series properties accordingly</p> \
  <i><span class="dyDescType">Type:</span> string or an object with a regex string </i><br> \
  <i><span class="dyDescType">Default:</span> null </i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["match2"] = ' \
<div class="option"><a name="match"></a><b>match</b><br> \
  <a parentName="dataSource"></a>\
  <p> Used to match a second series line group to populate y2 when using the "projection" attribute. It is An object with either "name"/"component"/"server" properties which are regexes matching series properties accordingly.</p> \
  <i><span class="dyDescType">Type:</span> string or an object with a regex string </i><br> \
  <i><span class="dyDescType">Default:</span> null </i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["lineStyles"] = ' \
<div class="option"><a name="lineStyles"></a><b>lineStyles</b><br> \
  <p>Overrides graph properties per axis by regex matching.</p> \
  <i><span class="dyDescType">Type:</span> Array of objects that define a "match" property which is a regex</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["aggregative"] = ' \
<div class="option"><a name="aggregative"></a><b>aggregative</b><br> \
  <p>Tells the graph which aggregative value should be used for the metric\'s display</p> \
  <i><span class="dyDescType">Type:</span> string out of ["min","ave","max","count","sum"] </i><br> \
  <i><span class="dyDescType">Default:</span> "ave"</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["isDelta"] = ' \
<div class="option"><a name="isDelta"></a><b>isDelta</b><br> \
  <p>Indicates the graph or metric are gauges and only the delta should be rendered, usually should be paired with the "divideBySecondsSinceLastSample" attribute. <br> For incrementing only delta metrics (with resets) use "isCounter" </p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["isCounter"] = ' \
<div class="option"><a name="isCounter"></a><b>isCounter</b><br> \
  <p>Indicates the graph or metric are gauges and only the delta should be rendered, usually should be paired with the "divideBySecondsSinceLastSample" attribute<br> For delta metrics which could contain negative values use "isDelta"</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["isAccumulative"] = ' \
<div class="option"><a name="isAccumulative"></a><b>isAccumulative</b><br> \
  <p>Indicates the graph or metric are delta and only the accumulative value should be rendered, See "isDelta" or "isCounter" for the opposite function </p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["divideBySecondsSinceLastSample"] = ' \
<div class="option"><a name="divideBySecondsSinceLastSample"></a><b>divideBySecondsSinceLastSample</b><br> \
  <p>An additional attribute for "isDelta" which indicates the values should be normalized to the time that passed between samples</p> \
  <i><span class="dyDescType">Type:</span> boolean</i><br> \
  <i><span class="dyDescType">Default:</span> false</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["valueMultiplier"] = ' \
<div class="option"><a name="valueMultiplier"></a><b>valueMultiplier</b><br> \
  <p>Multiplies each data point by the given number</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 1</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["decimalRounding"] = ' \
<div class="option"><a name="decimalRounding"></a><b>decimalRounding</b><br> \
  <p>Rounds the values up to the specified decimal digits count before displaying the graph</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';


/////////////////////


staticAutoComplete["from"] = ' \
<div class="option"><a name="from"></a><b>from</b><br> \
  <a parentName="dataSource"></a>\
  <p>The time to draw the metric from, could be either ISO time, epoch time or free text such as "5 hours ago"</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["to"] = ' \
<div class="option"><a name="to"></a><b>to</b><br> \
  <a parentName="dataSource"></a>\
  <p>The time to draw the metric to, could be either ISO time, epoch time or free text such as "5 hours ago"</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["unit"] = ' \
<div class="option"><a name="unit"></a><b>unit</b><br> \
  <a parentName="dataSource"></a>\
  <p>The time unit for the graph which indicates the level of aggregation (second, minute, hour, day)</p> \
  <i><span class="dyDescType">Type:</span> string ["s","m","h","d"]</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["server"] = ' \
<div class="option"><a name="servers"></a><b>servers</b><br> \
  <a parentName="dataSource"></a>\
  <p>The servers the metrics drawn will belong to (wildcard). null means all servers.</p> \
  <i><span class="dyDescType">Type:</span> string or array </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["component"] = ' \
<div class="option"><a name="components"></a><b>components</b><br> \
  <a parentName="dataSource"></a>\
  <p>The component the metrics drawn will belong to (wildcard). null means all components.</p> \
  <i><span class="dyDescType">Type:</span> string or array </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["bufferMB"] = ' \
<div class="option"><a name="bufferMB"></a><b>bufferMB</b><br> \
  <a parentName="dataSource"></a>\
  <p>The amount of MB to allocate on the server side for the result of the query</p> \
  <i><span class="dyDescType">Type:</span> integer</i><br> \
  <i><span class="dyDescType">Default:</span> 3</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["replaceName"] = ' \
<div class="option"><a name="replaceName"></a><b>replaceName</b><br> \
  <a parentName="dataSource"></a>\
  <p>Two arguments for performing regex string.replace on each metric name (including capture groups)</p> \
  <i><span class="dyDescType">Type:</span> array of two strings e.g. ["my (.*) metric clicks","$1 clicks"]</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["name"] = ' \
<div class="option"><a name="names"></a><b>names</b><br> \
  <a parentName="dataSource"></a>\
  <p>The names of the metrics that will be drawn (regex). null means all metrics.</p> \
  <i><span class="dyDescType">Type:</span> string or array </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["shiftSeconds"] = ' \
<div class="option"><a name="shiftSeconds"></a><b>shiftSeconds</b><br> \
  <a parentName="dataSource"></a>\
  <p>Amount of time to shift the resulting data points (used in order to compare different timeframes)</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["shiftMinutes"] = ' \
<div class="option"><a name="shiftMinutes"></a><b>shiftMinutes</b><br> \
  <a parentName="dataSource"></a>\
  <p>Amount of time to shift the resulting data points (used in order to compare different timeframes)</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["shiftHours"] = ' \
<div class="option"><a name="shiftHours"></a><b>shiftHours</b><br> \
  <a parentName="dataSource"></a>\
  <p>Amount of time to shift the resulting data points (used in order to compare different timeframes)</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["shiftDays"] = ' \
<div class="option"><a name="shiftDays"></a><b>shiftDays</b><br> \
  <a parentName="dataSource"></a>\
  <p>Amount of time to shift the resulting data points (used in order to compare different timeframes)</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> (none)</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["tailSecondsInterval"] = ' \
<div class="option"><a name="tailSecondsInterval"></a><b>tailSecondsInterval</b><br> \
  <a parentName="root"></a>\
  <p>The amount of seconds for which the graph will auto-update itself. null means no auto-update.</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sidebarText"] = ' \
<div class="option"><a name="sidebarText"></a><b>sidebarText</b><br> \
  <a parentName="root"></a>\
  <p>Text to be displayed at the left side bar which links to this dashboard.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> "New Dashboard!"</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["header"] = ' \
<div class="option"><a name="header"></a><b>header</b><br> \
  <a parentName="root"></a>\
  <p>Header to be displayed at the top bar of this dashboard.</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> "New Dashboard!"</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["defaultGraphOpts"] = ' \
<div class="option"><a name="defaultGraphOpts"></a><b>defaultGraphOpts</b><br> \
  <a parentName="root"></a>\
  <p>A collection of common properties describing the graph&quot;s rendering behavior for all graphs in the dashboard. Values which are specified in any of the graphs directly override the default values.</p> \
  <i><span class="dyDescType">Type:</span> js key value object</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["defaultDataSourceOpts"] = ' \
<div class="option"><a name="defaultGraphOpts"></a><b>defaultGraphOpts</b><br> \
  <a parentName="root"></a>\
  <p>A collection of common properties describing a data source query to get the graph&quot;s data for all graphs in the dashboard. Values which are specified in any of the graph dataSources directly override the default values.</p> \
  <i><span class="dyDescType">Type:</span> js key value object</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["graphOpts"] = ' \
<div class="option"><a name="graphOpts"></a><b>graphOpts</b><br> \
  <a parentName="graph"></a>\
  <p>A collection of properties describing the graph&quot;s rendering behavior</p> \
  <i><span class="dyDescType">Type:</span> js key value object</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["dataSources"] = ' \
<div class="option"><a name="dataSources"></a><b>dataSources</b><br> \
  <a parentName="graph"></a>\
  <p>Array of dataSource. dataSource: A collection of properties describing a data source query to get the graph&quot;s data</p> \
  <i><span class="dyDescType">Type:</span> array of js key value objects or a strings which references a common datasource</i><br> \
  <i><span class="dyDescType">Default:</span> []</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["variables"] = ' \
<div class="option"><a name="variables"></a><b>variables</b><br> \
  <a parentName="dashboard"></a>\
  <p>A key value object with variables that should be used when running the dashboard (Variable value can be a JSON object as well). Variables are referenced with "$" before their name in the body of the document.<br>Variable value could also be a url in the format "url:/my_url/file_with_newline_seperated_regexes"</p> \
  <i><span class="dyDescType">Type:</span> object of the format { varName: varValue }</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["exclude"] = ' \
<div class="option"><a name="exclude"></a><b>exclude</b><br> \
  <a parentName="dataSource"></a>\
  <p>A regex of metric names to exclude from a data source</p> \
  <i><span class="dyDescType">Type:</span> string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["calculatedDataSource"] = ' \
<div class="option"><a name="function"></a><b>function</b><br> \
  <a parentName="dashboard"></a>\
  <a parentName="graph"></a>\
  <p>Allows definition of data sources that does not need querying the server for data points</p> \
  <i><span class="dyDescType">Type:</span> data source object array </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["aggregationFunction"] = ' \
<div class="option"><a name="aggregationFunction"></a><b>aggregationFunction</b><br> \
  <a parentName="calculatedDataSource"></a>\
  <p>The function for aggregation of matches in a calculated data source</p> \
  <i><span class="dyDescType">Type:</span> string "sum" "min" "max" "ave" </i><br> \
  <i><span class="dyDescType">Default:</span> "sum"</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["projection"] = ' \
<div class="option"><a name="projection"></a><b>projection</b><br> \
  <a parentName="calculatedDataSource"></a>\
  <p>The transformation post aggregation of matches in a calculated data source, a javascript eval expression used like yTransform with the builtin variable y which stands for the current value<br>If "match2" property is used, then y2 is a builtin variable for the second series value at each time</p> \
  <i><span class="dyDescType">Type:</span> javascript code string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["limit"] = ' \
<div class="option"><a name="limit"></a><b>limit</b><br> \
  <p>Limits the number of displayed series lines on one graph. Used in combination with sorting keywords such as "sortByTotalSum" to get a top N list</p> \
  <i><span class="dyDescType">Type:</span> javascript code string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalAverageAbove"] = ' \
<div class="option"><a name="totalAverageAbove"></a><b>totalAverageAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalAverageBelow"] = ' \
<div class="option"><a name="totalAverageBelow"></a><b>totalAverageBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalMaximumAbove"] = ' \
<div class="option"><a name="totalMaximumAbove"></a><b>totalMaximumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalMaximumBelow"] = ' \
<div class="option"><a name="totalMaximumBelow"></a><b>totalMaximumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalMinimumAbove"] = ' \
<div class="option"><a name="totalMinimumAbove"></a><b>totalMinimumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalMinimumBelow"] = ' \
<div class="option"><a name="totalMinimumBelow"></a><b>totalMinimumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalSumAbove"] = ' \
<div class="option"><a name="totalSumAbove"></a><b>totalSumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["totalSumBelow"] = ' \
<div class="option"><a name="totalSumBelow"></a><b>totalSumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentAverageAbove"] = ' \
<div class="option"><a name="currentAverageAbove"></a><b>currentAverageAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentAverageBelow"] = ' \
<div class="option"><a name="currentAverageBelow"></a><b>currentAverageBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentMaximumAbove"] = ' \
<div class="option"><a name="currentMaximumAbove"></a><b>currentMaximumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentMaximumBelow"] = ' \
<div class="option"><a name="currentMaximumBelow"></a><b>currentMaximumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentMinimumAbove"] = ' \
<div class="option"><a name="currentMinimumAbove"></a><b>currentMinimumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentMinimumBelow"] = ' \
<div class="option"><a name="currentMinimumBelow"></a><b>currentMinimumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentSumAbove"] = ' \
<div class="option"><a name="currentSumAbove"></a><b>currentSumAbove</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["currentSumBelow"] = ' \
<div class="option"><a name="currentSumBelow"></a><b>currentSumBelow</b><br> \
  <p>Compares all metrics displayed to a specific value using a specific aggregative and filters out metrics which fail the comparison</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByTotalAverage"] = ' \
<div class="option"><a name="sortByTotalAverage"></a><b>sortByTotalAverage</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByTotalMinimum"] = ' \
<div class="option"><a name="sortByTotalMinimum"></a><b>sortByTotalMinimum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByTotalMaximum"] = ' \
<div class="option"><a name="sortByTotalMaximum"></a><b>sortByTotalMaximum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByTotalSum"] = ' \
<div class="option"><a name="sortByTotalSum"></a><b>sortByTotalSum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByTotalCount"] = ' \
<div class="option"><a name="sortByTotalCount"></a><b>sortByTotalCount</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByCurrentAverage"] = ' \
<div class="option"><a name="sortByCurrentAverage"></a><b>sortByCurrentAverage</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByCurrentMinimum"] = ' \
<div class="option"><a name="sortByCurrentMinimum"></a><b>sortByCurrentMinimum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByCurrentMaximum"] = ' \
<div class="option"><a name="sortByCurrentMaximum"></a><b>sortByCurrentMaximum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByCurrentSum"] = ' \
<div class="option"><a name="sortByCurrentSum"></a><b>sortByCurrentSum</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByCurrentCount"] = ' \
<div class="option"><a name="sortByCurrentCount"></a><b>sortByCurrentCount</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["sortByDeviant"] = ' \
<div class="option"><a name="sortByDeviant"></a><b>sortByDeviant</b><br> \
  <p>Sorts the metrics by the specified in a specified order. Used in combination with "limit" which filters out only top N metrics. </p> \
  <i><span class="dyDescType">Type:</span> string "desc" or "asc" </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["yTransform"] = ' \
<div class="option"><a name="yTransform"></a><b>yTransform</b><br> \
  <p>The Y value transformation before plotting, a javascript eval expression used like yTransform with the builtin variable y which stands for the current value</p> \
  <i><span class="dyDescType">Type:</span> javascript code string</i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["granularityInDays"] = ' \
<div class="option"><a name="granularityInDays"></a><b>granularityInDays</b><br> \
  <p>Quantizes the data points (with aggregation) into buckets with the specified timespan interval</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["granularityInHours"] = ' \
<div class="option"><a name="granularityInHours"></a><b>granularityInHours</b><br> \
  <p>Quantizes the data points (with aggregation) into buckets with the specified timespan interval</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["granularityInMinutes"] = ' \
<div class="option"><a name="granularityInMinutes"></a><b>granularityInMinutes</b><br> \
  <p>Quantizes the data points (with aggregation) into buckets with the specified timespan interval</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["granularityInSeconds"] = ' \
<div class="option"><a name="granularityInSeconds"></a><b>granularityInSeconds</b><br> \
  <p>Quantizes the data points (with aggregation) into buckets with the specified timespan interval</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> null</i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["color"] = ' \
<div class="option"><a name="color"></a><b>color</b><br> \
  <p>Used in context of "lineStyles" property, sets a color for the matched series lines. Named colors are accepted.</p> \
  <i><span class="dyDescType">Type:</span> string </i><br> \
  <i><span class="dyDescType">Default:</span> null </i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["untilNow"] = ' \
<div class="option"><a name="untilNow"></a><b>untilNow</b><br> \
  <p>Used for graphs showing up to date data points to indicate the graph should always end at the current time, even if data is missing</p> \
  <i><span class="dyDescType">Type:</span> boolean </i><br> \
  <i><span class="dyDescType">Default:</span> null </i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';

staticAutoComplete["legendWidth"] = ' \
<div class="option"><a name="legendWidth"></a><b>legendWidth</b><br> \
  <p>Controls the width of the legend div</p> \
  <i><span class="dyDescType">Type:</span> integer </i><br> \
  <i><span class="dyDescType">Default:</span> 230 </i><p></p> \
  <span class="dyDescType">Gallery Samples:</span> <font color="red">NONE</font><br> \
  <span class="dyDescType">Other Examples:</span> <font color="red">NONE</font><br> \
  <br> </div> \
';