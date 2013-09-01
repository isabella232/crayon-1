file=$1
awk '{a[NR]=$0} END {n=asort(a,b); for (i=1;i<=n;++i) {print b[i]}}' $file > $file.sorted
mv -f $file.sorted $file 
