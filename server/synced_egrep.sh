#!/bin/sh
if [ $2 != '-' ]; then
	matches=$(look "$2" "$3" | egrep -s -h "^$4")
else 
	matches=$(egrep -s -h "^$4" "$3" )
fi

exec 8>/tmp/crayon-query-$1.lck
flock -x 8
printf "%s\n" "$matches"
