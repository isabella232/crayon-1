#!/bin/bash
# ================================================================
# ======================  HELPER FUNCTIONS  ======================
# ================================================================

function blueColor() { echo -e "\e[1;34m$*\e[0m"; }
function darkColor() { echo -e "\e[1;30m$*\e[0m"; }
function whiteColor() { echo -e "\e[1;37m$*\e[0m"; }
function yellowColor() { echo -e "\e[1;33m$*\e[0m"; }
function pinkColor() { echo -e "\e[1;35m$*\e[0m"; }
function darkPinkColor() { echo -e "\e[0;35m$*\e[0m"; }
function redColor() { echo -e "\e[1;31m$*\e[0m"; }
function cyanColor() { echo -e "\e[1;36m$*\e[0m"; }
function greenColor() { echo -e "\e[1;32m$*\e[0m"; }
function darkGreenColor() { echo -e "\e[0;32m$*\e[0m"; }
function darkRedColor() { echo -e "\e[0;31m$*\e[0m"; }

function urlEncode() { 
echo "$1" | sed 's:%:%25:g;s:":%22:g;s:,:%2C:g;s: :%20:g;s:<:%3C:g;s:>:%3E:g;s:#:%23:g;s:{:%7B:g;s:}:%7D:g;s:|:%7C:g;s:\\:%5C:g;s:\^:%5E:g;s:~:%7E:g;s:\[:%5B:g;s:\]:%5D:g;s:`:%60:g;s:;:%3B:g;s:/:%2F:g;s:?:%3F:g;s^:^%3A^g;s:@:%40:g;s:=:%3D:g;s:&:%26:g;s:\$:%24:g;s:\!:%21:g;s:\*:%2A:g' 
}

# ================================================================
# =========================  FUNCTIONS  ==========================
# ================================================================

# ---------  COMMON  ---------

function coloredCrayon() {
	echo -e "$(cyanColor C)$(greenColor R)$(redColor A)$(whiteColor Y)$(yellowColor O)$(pinkColor N)"
}

function showUsage() {
	echo -e " "
	echo -e " $(coloredCrayon) $(whiteColor Client Library)"
	echo -e " Usage: crayon-client.sh <server host:port> <command> [help|<switches>]"
	echo -e " "
	echo -e " $(whiteColor COMMANDS)"
	echo -e "   $(blueColor ping): Checks that the server is responding"
	echo -e "   $(blueColor query): Queries data points from the server"
	echo -e "   $(blueColor add): Adds data points to the server"
	echo -e "   $(blueColor findMetric): Finds a matching metric on the server"
	echo -e ""
}

# ---------  PING  ---------

function crayonPing() {
	connectionResult=$(curl -s "http://$serverHostPort/echo?a=1")
	if [ -z "$connectionResult" ]; then
		darkRedColor "Failed connecting to server"
		curl -v "http://$serverHostPort/echo?a=1"
	else 
		darkGreenColor "Server responding OK"
	fi
}

# ---------  QUERY  ---------

function crayonQueryUsage() {
	echo -e " "
	echo -e " $(whiteColor SWITCHES)"
	echo -e "   $(blueColor -n --name): A regex matching the metric names" 
	echo -e "   $(blueColor -s --server): A wildcard matching the server name [$(darkPinkColor 'default: *')]"
	echo -e "   $(blueColor -c --component): A wildcard matching the component name [$(darkPinkColor 'default: *')]"
	echo -e "   $(blueColor -f --from): A time to return data points since [$(darkPinkColor 'default: "5 minutes ago"')]"
	echo -e "   $(blueColor -t --to): A time to return data points until [$(darkPinkColor 'default: now')]"
	echo -e "   $(blueColor -u --unit): A time unit resolution for the results out of r,m,h,d [$(darkPinkColor 'default: r')]"
	echo -e "   $(blueColor -j --json): Explicit json query object instead of other switches"
	echo -e ""
	echo -e " --from and --to times can be specified in one of the following formats: "
	echo -e "    * seconds since epoch, get 'now' using \$(date+ %s)"
	echo -e "    * ISO string in the format yyyy-MM-ddTHH:mm:ss"
	echo -e "    * Human spoken format (e.g. '5 mintues ago', 'last 10 seconds', '2 days ago', 'now'...)"
	echo -e ""		
}

function crayonQuery() {
	if [ -z "$3" ] || [ "$3" == "help" ]; then
		crayonQueryUsage
		exit
	fi

	#collectSwitches $*

	if [ -n "$j$json" ]; then
		encodedJson=$(urlEncode "$j$json")
		curl -s "http://$serverHostPort/find?ds=$encodedJson"
		exit
	fi

	if [ -z "$n$name" ]; then
		crayonQueryUsage
		darkRedColor "Missing metric name regex parameter (--name)"
		exit
	fi

	[ -z "$s$server" ] && s='*';
	[ -z "$c$component" ] && c='*';
	[ -z "$f$from" ] && f='5 minutes ago';
	[ -z "$t$to" ] && t=$(date +%s);
	[ -z "$u$unit" ] && u='r';

	json="[{\"from\":\"$f\",\"unit\":\"$u\",\"component\":\"$c\",\"server\":\"$s\",\"name\":\"$n\"}]"
	encodedJson=$(urlEncode "$j$json")
	curl -s "http://$serverHostPort/find?noDsIndex=true&ds=$encodedJson"
}

# ---------  ADD  ---------

function crayonAddUsage() {
	echo -e " "
	echo -e " $(whiteColor SWITCHES)"
	echo -e "   $(blueColor -n --name): The data point metric name" 
	echo -e "   $(blueColor -v --val): The data point value" 
	echo -e "   $(blueColor -t --time): The data point time in epoch seconds or iso format [$(darkPinkColor 'default: now')]" 
	echo -e "   $(blueColor -s --server): The server associated with this data point [$(darkPinkColor 'default: -')]"
	echo -e "   $(blueColor -c --component): The component associated with this data point [$(darkPinkColor 'default: -')]"
	echo -e "   $(blueColor -j --json): Explicit json data points array object instead of other switches"
	echo -e ""
}

function crayonAdd() {
	if [ -z "$3" ] || [ "$3" == "help" ]; then
		crayonAddUsage
		exit
	fi

	if [ -n "$j$json" ]; then
		response=$(echo "$j$json" | curl -s -X POST -d @-  "http://$serverHostPort/addRaw")
		if [ "$response" != "OK" ]; then
			darkRedColor "Failed sending data points to server"
			echo -e "$response"
		else 
			darkGreenColor "Server received data points successfully"
		fi

		exit
	fi

	if [ -z "$n$name" ]; then
		crayonAddUsage
		darkRedColor "Missing metric name parameter (--name)"
		exit
	fi

	if [ -z "$v$val" ]; then
		crayonAddUsage
		darkRedColor "Missing data point val parameter (--val)"
		exit
	fi

	[ -z "$s$server" ] && s='-';
	[ -z "$c$component" ] && c='-';
	[ -z "$t$time" ] && t=$(date +%s);

	response=$(echo "[{\"name\":\"$n$name\", \"val\": $v$val, \"time\": \"$t$time\", \"server\": \"$s$server\", \"component\": \"$c$component\"}]" | curl -s -X POST -d @-  "http://$serverHostPort/addRaw")
	if [ "$response" != "OK" ]; then
		darkRedColor "Failed sending data points to server"
		echo -e "$response"
	else 
		darkGreenColor "Server received data points successfully"
	fi

}

# ---------  FIND METRIC  ---------

function crayonFindMetricUsage() {
	echo -e " "
	echo -e " $(whiteColor SWITCHES)"
	echo -e "   $(blueColor -r --regex): A regex matching part of the metric name" 
	echo -e ""
}

function crayonFindMetric() {
	if [ -z "$3" ] || [ "$3" == "help" ]; then
		crayonFindMetricUsage
		exit
	fi

	if [ -z "$r$regex" ]; then
		crayonQueryUsage
		darkRedColor "Missing metric name regex parameter (--regex)"
		exit
	fi

	encodedRegex=$(urlEncode "$r$regex")
	curl -s "http://$serverHostPort/matchSeriesName?regex=$encodedRegex"
}

# ================================================================
# =========================  BOOTSTRAP  ==========================
# ================================================================

if [ "$#" -lt 2 ]; then
    showUsage;    
	exit
fi

serverHostPort=$1;
cmd=$2

# collect switches
args=("$@")
argIndex=0;
while [ $argIndex -lt $# ]; do
	arg=${args[$argIndex]}
	if [ "${arg:0:2}" == "--" ]; then
		pendingVar="${arg:2}"
	elif [ "${arg:0:1}" == "-" ]; then
		pendingVar="${arg:1}"
	elif [ -n "$pendingVar" ]; then
		eval "$pendingVar='$arg'"
		unset pendingVar
	fi

	let argIndex=$argIndex+1;
done

case $cmd in
	ping)
		crayonPing $*
	;;
	query)
		crayonQuery $*
	;;
	add)
		crayonAdd $*
	;;
	findMetric)
		crayonFindMetric $*
	;;
	*)
		showUsage;    
		darkRedColor "Unknown command '$cmd'"
	;;
esac

