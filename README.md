Crayon
======

(readme.md update in progress, last update on 2013-08-26).

* Crayon is a _complete_ multiplatform monitoring and charting solution for large scale distributed applications. 
* Crayon is an _open source_ contributed by [Taboola][] and will remain free forever.
* Crayon's stack consists of [NodeJS][] as server, file system as storage and [dyGraphs][] as charting control. 
* Crayon aims to be the fastest most flexible general purpose graphing system out there.

Screenshots: 
* [Crayon System Dashboard][] - Where we get insight on what's going inside crayon  
* [Dashboard Designer][] - Where we do our magic and build our mighty informative graphs  
* [Munin Plugin][] - Where we view our good old munin dashboard but in a new and cool way  

Be sure to visit the [Mailing List] if you have any question.  
Also, White Paper and comparison to graphite coming up soon.  

[Mailing List]: https://groups.google.com/forum/#!forum/crayon-mailing-list
[Taboola]: http://www.taboola.com
[NodeJS]: http://nodejs.org
[MongoDB]: https://github.com/mongodb/mongo
[dyGraphs]: http://dygraphs.com
[Graphite]: https://github.com/graphite-project
[Munin]: http://munin-monitoring.org/
[Crayon System Dashboard]: https://raw.github.com/shai-d/crayon/master/docs/images/CrayonSystemDashboard.png
[Dashboard Designer]: https://raw.github.com/shai-d/crayon/master/docs/images/DashboardDesigner.png
[Munin Plugin]: https://raw.github.com/shai-d/crayon/master/docs/images/MuninDashboard.png

What does it do ?
-----------------

* Crayon provides several APIs for storing/getting metrics, a server for processing them and a website for viewing them.  
* Crayon provides a JSON DSL for defining graphs with well over a hundred keywords (e.g. logarithmic graphs, delta graphs, etc.)  
* Crayon supports realtime analytics up to subsecond latancy as well as aggregated information with configurable retention.  
* Crayon aggregates analytics in multiple ways (e.g. Max, Min, Sum, Average, Count of samples, etc.)  
* Crayon graphs are fully interactive with zooming and auto updating without any extra configuration (with image export supported)  
* Crayon can be fed with multiple metrics at once to improve performance or even already aggregated metrics if aggregate them yourself  
* Crayon comes with 'crayon shell' which allows various operations through the command line  
* Crayon integrates with third parties for getting metrics (besides the HTTP interface), for example the queuing system [RabbitMQ][]  
* Crayon provides multiple UI CSS themes for your convinience  
* Crayon aggregations and queries are multithreaded up to a number of cores specified in the config file  
* Crayon provides easy sharding (no smart routing at the moment) by simply adding the shards to a list in the config file  
* Crayon provides utilizes SVN for source control and replication of user generated dashboards  

[emailjs]: https://github.com/eleith/emailjs
[RabbitMQ]: https://github.com/postwait/node-amqp

What's the REST ? (API)
-----------------------

Crayon has a simple HTTP interface for storing and querying metrics by using JSON.  
A metric has the following fields:  

* `name` - The name of the Metric (e.g. "Inserts Count /s")
* `time` - The time of the Metric (e.g. "2013-07-25T10:10:23Z" or epoch time)
* `val` - Any number javascript can handle will do (e.g. "23.12")
* `server` - *optional* The server this metric belongs to (e.g. "prod-us-ny3")
* `component` - *optional* The component this metric belongs to (e.g. "Database")
* a simple metric: `[{name:'Inserts',time:'2013-07-25T10:10:23Z',val:1}]`

The 2 most important API's are:
* `/addRaw` - For Feeding Crayon with metrics using `POST` (e.g. the simple metric above)
* `/find` - For querying metrics using `GET` arguments (e.g. the method is fed with a datasource json object)
  
You can test the API from the comand line by doing:  
```javascript
echo '[{"server":"'$(hostname -s)'","name":"my_metric","val": 123,"time":'$(date +%s)'}]' |   
  curl -X POST -d @- http://localhost:<crayon's port>/addRaw
```  

For Graphite users (API)
------------------------

Metrics which are sent to graphite using plaintext API, could be directed also into Crayon in the same format.
All you have to do is to start crayon with `--graphite-api-port=<port-number>` and it would listen for incoming connections.
You can also test it from the command line

You can test the API from the comand line by doing:  
```javascript
echo "$(hostname -s).myService.myMetric 123 $(date +%s) | nc localhost <crayon's port>"
```  

If you have your server and/or component names inside the metric name, all the better!  
* Update the configuration property in `crayon.conf` called `graphiteHostnameIndexInNamespace` to hold the index within the namespace of your hostname.  
* Update the configuration property in `crayon.conf` called `graphiteComponentIndexInNamespace` to hold the index within the namespace of your component.  

For example for the metric above (the one with myService.myMetric), the proper setting is:  
```javascript
    "graphiteHostnameIndexInNamespace": 1,
    "graphiteComponentIndexInNamespace": 2
```

How much is large scale ?
-------------------------

Of course large scale definition differs from one to the next.  
In crayon, your scale depends on your distribution of data, but it may reach many millions of metrics per minute.
You can always add more shards of crayon and update crayon.conf with the new shards.

Our setup includes:  
* `NGINX` - An open source balancer layer before NodeJS running on port 60000
* `Crayon Job Manager NodeJS` - Crayon service running on port 54320 and does aggregations (started with `--jobmanager`)
* `Crayon NodeJS` - 12 Crayon services running on ports 54321-54332 receive metrics from NGINX
* `Crayon NodeJS` - 1 Crayon service running on port 54335 for UI responsiveness (started with `--uiOnly`)

(Refresh if the image doesn't load, it's a GitHub thing)  
![alt tag](https://raw.github.com/shai-d/crayon/master/docs/images/crayon_benchmark_12_cores.png)

What's the graph definition language ?
--------------------------------------

Every graph in Crayon, as well as every graph, has a "code" button. Clicking on it shows the "code-behind" in Crayon's graph editor.
Crayon's graph editor is a rich editor based on [CodeMirror][] with [JSBeautifier][] formatting and [JSHint][] validation. We've also designed a nice auto-complete that has icons and help for every option with well over a hundred options for graph design. To give you a taste of how simple it is, here is the graph definitions for the benchmark image above:

```javascript
{
    "dataSources": [{
        "from": "last 30 minutes",
        "unit": "r",
        "name": "Inserts",
	    "tailSecondsInterval": 60
	}],
	"calculatedDataSources": [{
            "match": {
                "name": ".*"
            },
            "name": "Total Inserts",
            "function": "sum",
            "insteadOfMatches": true
    }],
    "graphOpts": {
        "fillGraph": true,
        "aggregative": "max",
        "stackedGraph": true,
        "title": "Inserts Per Second (live)",
		"noLegend": true,
        "width": "wholeLine",
        "height": 100
    }
}
```

* Note how the `from` field understands free text
* Note that there is no `to` field, this means we want everything until now
* We can choose any aggregation `unit` from 'r','m','h','d' (second, minute, hour, day)
* `name` is a regex of Metric names.
* `server` (wildcard) is also omitted. We will get results from all servers.
* `component` (wildcard) is also omitted. We will get results from all components.
* `tailSecondsInterval` indicates we want this graph to update every 60 seconds.
* `graphOpts` is the container for all the options regarding graph drawing.
* `graphOpts.lineStyles` allows applying graph options per Metric using a regex match.
* `aggregative` is one of Crayon's unique features. "Max" means we want the max value from each minute.
* `width` I wouldn't even mention if it weren't for the "wholeLine" feature which binds the graph size to the window's.

Phew, There are so many... be sure to check out the screen shots to see a few more cool things.

[CodeMirror]: https://github.com/marijnh/CodeMirror
[JSHint]: https://github.com/jshint/jshint
[JSBeautifier]: https://github.com/einars/js-beautify

What's your roadmap ?
---------------------

We've just started and this is the first version we're uploading here.  
I'll try to lay out a list of TODO's here (and update it occasionaly)  

* We should add Monitoring on top of the values
* We really want to add configurable Soft & Adaptive Thresholding algorithms
* We should set up a site with a lot more documentation
* We should set up a demo site for people to test Crayon online

What are my alternatives ?
--------------------------

There are a lot of cloud services and payed services. I'm focusing on the Free & Open Source genre:  

* [Munin][] - the old school stack (Munin-Node/Munin-Async/Munin-Server). Major Con: Updates only once in 5 minutes.
* [Graphite][] - the most common solution today (Graphite/Carbon/Whisper). Major Con: No REAL good and dynamic UI.
* [Cube][] - a new service with good API and only one unconfigurable UI ([Cubism][] horizon charts). Major Con: Very limited UI.
* [Fnordmetric][] - a new service with good API and configurable UI. Major Con: Ruby server doesn't handle a lot of data.

[Cube]: https://github.com/square/cubism/wiki/Cube
[Cubism]: http://square.github.io/cubism/
[Fnordmetric]: https://github.com/paulasmuth/fnordmetric

How do I run It ?
-----------------

Right now there are no RPMs for Crayon.  
Since it's only javascript, there's also no need for compilation.  

1. Get the prerequisits:  
   a. `yum install nodejs npm make` - NodeJS and its download manager  
```javascript
	Note: Crayon requires a nodejs version higher than v0.6.12 or you  
	      may encounter "missing requirement" errors during startup
```  
   b. `npm install cityhash` - Google hashing library wrapper for NodeJS  
   c. `npm install zlib` - Compression library for browser-node communication  
   d. `npm install glob` - Helper file system library for munin plugin  
   e. `npm install emailjs` - Allows sending mail notifications on alerts  
   f. `npm install amqp` - Allows getting metrics from rabbitmq  
   g. `npm install request` - Allows getting metrics from shards  
  
2. `cd /var/lib` and then `git clone git://github.com/shai-d/crayon.git`  
3. Go to the crayon server directory `cd crayon/server`  
4. Give execution permission to shell files `chmod +x ./*.sh`  
5. Mount the minutes_ram folder to your RAM with: `mount -t tmpfs -o size=16g tmpfs minutes_ram`  
6. Before running node, run `export NODE_PATH=/path/to/where/npm/put/the/node_modules/`  
7. Run a crayon general purpose service `node server.js --port=54321`  
8. Web interface should be available now on  `http://<serverName>:54321/`  
 
```javascript
   Note: You can run as many instances as youd like (on different ports of course)
         One of these instances should be started with "--jobmanager" to indicate
		 it is responsible for periodic tasks such as archiving and aggregation.
		 it is also recommended to use a UI dedicated instance with "--uiOnly" since 
		 node is single threaded and we want the UI to be as responsive as possible
```		 

Additional Optional Installations:  
* Before using the SVN automatic sync feature for dashboards, run `yum install svn`  

How do I migrate from Munin ?
-----------------------------

Along with crayon, under the `server/plugins/` folders there is a folder called `munin-bridge`. This folder contains a few shell files which make the migration easier. 

* [Munin Config to JSON][] - Should be executed once. It is responsible for a one time conversion of "munin-run <your-files> config" to JSON. The resulting document should be saved in `munin-configs` folder under `munin-bridge` (where it is read by the server on restart or when a special plugin API has been called).
* [Munin Run to JSON][] - Should be executed every time we used to run munin-run and collect our metrics. This file is responsible for executing the plugins and posting the result to Crayon.
* [Munin Agent][] - Acts as a bash service which calls the [Munin Run to JSON][] at specified intervals. This shell file should be executed with `munin-agent init` by a service. It is listed in PS/TOP as "crayon-agent".

[Munin Config to JSON]:https://raw.github.com/shai-d/crayon/master/server/plugins/munin-bridge/munin-config-awk.sh
[Munin Run to JSON]:https://raw.github.com/shai-d/crayon/master/server/plugins/munin-bridge/munin-crayon-bridge.sh
[Munin Agent]:https://raw.github.com/shai-d/crayon/master/server/plugins/munin-bridge/munin-agent.sh

Are there any known issues ?
----------------------------

Like anything and especially like anything new, the answer is a hardcoded `yes;`.  
Here is a list of some of the things which are on my mind (I'll try to keep it updated):

* Counter metrics (or 'derivative' graphs) are displayed incorrectly when shown after aggregation within the time they were reset. The delta's get aggregated and if resets occur within the aggregation, the resulting numbers are completely useless.

Stack and Licenses
------------------

* NodeJS (Apache) - 
*Used for the server itself*
* dyGraph (BSD) - 
*Used for rendering the graphs in the browser*
* Code Mirror (MIT) - 
*Used for syntax highlighting and formatting in editable text areas*
* JS Beautifier (MIT) - 
*Used for prettifying javascript in editable text areas*
* JSHint (MIT) - 
*Used for syntax correction in editable text areas*
* HTML2Canvas (MIT) - 
*Used for rasterizing graphs into downloadable images*
* [npm] cityhash (BSD) - 
*Used to hash Metric names before writing them to the database*
* [npm] zlib (BSD) - 
*Used by the http server for compressing response streams*
* [npm] glob (BSD) - 
*Used for the munin plugin to find munin configuration files*
* [npm] node-mongodb-native (Apache) - 
*Used for communicating with Mongo DB*
* [npm] emailjs (MIT) - 
*Used for sending mail for alerts*
* [npm] amqp (BSD)
*Used for getting metrics from RabbitMQ*
* [npm] request (Apache)
*Used for getting metrics from Shards*
* Nostradamus (MIT)
*Used for predicting metric future values*
* jQuery (MIT) - 
*Used throughout the client side javascripts*

[Nostradamus]: https://github.com/thick/Nostradamus.js

Change Log
----------

2013-08-26 - 
* Fixed time shifting
* Added keywords

2013-08-25 - 
* Added automatic sync for dashboards using SVN (configure in crayon.conf)

2013-08-21 -  
* Added a new crayon-client.sh shell file to wrap everything easy from the command line
* Fixed regex matching (which got broken after the major data format change
* Fixed aggregation self documenting counters bug

2013-08-20 -  
* Some fixes of the job manager regarding the new pipeline
* Updating installation procedure in readme
* Did some IDE changes to the designer, making it friendlier and more forgiving
* Added remaining ram for raw data graph (search with for a mount with df | grep minutes_ram)

2013-08-19 -  
* Replaced entire aggregation pipeline to a faster multicore one (x3-x5)
* Added more visibility to the aggregation process
* Fixed bad positioning on raw data graphs graph with gaps of data
* Added keywords

2013-08-18 -  
* MAJOR CHANGE: Replaced format of saved files, conversion script is one liner (preparing for multicore aggregations)  

2013-08-17 -  
* Fixed synced_grep to use binary search correctly 
* Added metric name search to graph designer

2013-08-15 -  
* Fixed daily aggregation (it never executed due to a bad trigger condition)

2013-08-14 -  
* Added Graphite API interface to add metrics. 
* Added dozens of more keywords (projection, quantizing, inter-series math, sorting, filtering etc.).
* Improved minute aggregation speed (reducing from multi-map to single-map+split variable in awk).

2013-08-08 -  
* MAJOR CHANGE: Replaced format of saved files (for aggregations only), conversion script is one liner
* Got rid of mawk (suspected memory issues) back to awk + asorti to sort files
* Metric querying is now using binary search for aggregation instead of file scan
* Allowing the use of multiple cores to scan SSD/RAM for query data
* Updated system dashboard, $crayon-server builtin variable added to represent server
* Added simple sharding support (currently only in broadcast mode)

2013-08-07 -  
* Added feature click on header opens a large graph
* Added export to CSV menu option on all graphs
* Added support for variables with url provider for content
* Added daily aggregation

2013-08-06 -  
* Fixed support for firefox & changed layouts to be non tabular  
* Added more keywords  
* Added language reference main tab
* Added DOCTYPE to all htmls and fixed layout problems
* Added compression support for rabbitMQ

2013-08-05 - 
* Adjusted hour aggregation
* Added combined option to munin plugin
* Added more keywords  

2013-08-04 - 
* Complete re-write using filesystem for higher performance
* Added time shifting properties
* Added hour aggregation
* Documented a lot of properties
* Got rid of mongo
* Added more keywords  

2013-07-29 - 
* Added a simple prediction algorithm

2013-07-28 - 
* Added integration with RabbitMQ
* Fixed problems with deltas
* Added more keywords  

2013-07-27 - 
* Added the graph context menu and get image operation
* Added monitoring

2013-07-26 - 
* Added the entire JSON programmable dashboard UI
* Added theming

2013-07-25 - 
* *First commit*