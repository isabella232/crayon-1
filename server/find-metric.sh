# params: core, seed, regex, limit

#trap "echo killed > /root/delme" SIGKILL 
#trap "echo terminated > /root/delme" SIGTERM 
#trap "echo pipebroken > /root/delme" SIGPIPE
#trap "kill 0" SIGINT SIGTERM SIGPIPE SIGKILL EXIT

ls minutes_ram/*/*/* | 
   xargs -n 1 -P $1 -I {} ./synced_egrep.sh $2 '-' {} "$3" | 
   awk '{if (a[$1] == null && NF > 2) {a[$1]=1; print $1; g += 1; b = 0} else { b += 1 } if (g >= 5 || (g >= 1 && b > 50)) { print "awkterminating" }}' | 
   head -1000 | 
   grep -v awkterminating | 
   head -$4; 

rm -f /tmp/crayon-query-$2.lck
