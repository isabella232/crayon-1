#!/usr/bin/awk -f
BEGIN  {
	if (level == "minutes") {
		digits = 15;
		raw = 1;
	} else if (level == "hours") {
		digits = 13;
		raw = 0;
	} else if (level == "days") {
		digits = 10;
		raw = 0;
	} else {
		print "Missing / Unknown level of aggregation parameter"
		exit 1;
	}

	"hostname -s" | getline selfHost;
} 

function writeMetrics(isEnd) {
	counterFullTime=strftime("%FT%R:%S");
	counterTimeKey=strftime("%FT%R");

	#if (!counterTimeKeyFolderCreated[counterTimeKey]) {
	#	counterTimeKeyFolderCreated[counterTimeKey] = 1;
		# "mkdir -p minutes_ram/" counterTimeKey "/" selfHost | getline;
	#}
	
	counterComponent="crayonAggregation"
	aggregationCounterFile = "minutes_ram/" counterTimeKey "/" selfHost "/" counterComponent

	#print "[output] Writing metrics to : " aggregationCounterFile " (time is "counterFullTime")"

	#print "Total_Rows_Scanned "selfHost" "counterComponent" "counterFullTime" "totalRowsCounter >> aggregationCounterFile;
	#print "Committed_Aggregated_Rows "selfHost" "counterComponent" "counterFullTime" "committedRowsCounter >> aggregationCounterFile;
	#print "Aggregated_Bad_Rows "selfHost" "counterComponent" "counterFullTime" "ignoreingBadRow >> aggregationCounterFile;
	committedRowsCounter = 0;
	totalRowsCounter = 0;
	ignoreingBadRow = 0;

	if (isEnd == 1) {
		#print "Sample line (at end): Total_Rows_Scanned_"s"_"c" "selfHost" "counterComponent" "counterFullTime" "totalRowsCounter
	}
}

function commitPendingRow() {
	if (n == null) return;
	committedRowsCounter++;

	if (c == null || s == null || (c < "A" && c != "-") || (s < "A" && s != "-")) {
		ignoreingBadRow++;
	} else {
		outFile = level "/" timeKey "/"  s "/" c ".@" suffix;

		print n" "s" "c" "fullTime" "S" "C" "M" "m " >> "outFile;
	}
}

function aggregateRow(row)
{
	split(row,rowParts," ");
	
	# Calculate time key
	if (fullTime != rowParts[4]) {
		timeKey=substr(rowParts[4],0,digits);;
		fullTime=rowParts[4]
	}

	totalRowsCounter++;

	# Create folder
	if (createdServerDirs[timeKey rowParts[2]] == null) {
		createdServerDirs[timeKey rowParts[2]] = 1;
		cmd = "mkdir -p " level "/" timeKey "/" rowParts[2];
		print "Executing " cmd;
		#cmd | getline;
	}
		
	# Compare aggregation key (name server component time)
	if (n s c t == rowParts[1] rowParts[2] rowParts[3] timeKey) {

		if (raw) {
			S += rowParts[5];
			C += 1;
			if (rowParts[5] > M) M = rowParts[5];
			if (rowParts[5] < m) m = rowParts[5];
		} else {
			S += rowParts[5];
			C += rowParts[6];
			if (rowParts[7] > M) M = rowParts[7];
			if (rowParts[8] < m) m = rowParts[8];
		}
	# New row being aggregated
	} else {
		commitPendingRow()

		# update aggregation key
		n = rowParts[1];
		s = rowParts[2];
		c = rowParts[3];
		t = timeKey;

		if (raw) {
			S = rowParts[5];
			C = 1;
			M = rowParts[5];
			m = rowParts[5];
		} else {
			S = rowParts[5];
			C = rowParts[6];
			M = rowParts[7];
			m = rowParts[8];
		}
	}

	#print row;
	if (++linesRead % 100000 == 0) {
		if (totalRowsCounter == 0) aggFactor = 1;
		else aggFactor = committedRowsCounter/totalRowsCounter;

		print "[progress] " (linesRead/1000) "K lines processed, agg factor: " aggFactor
		writeMetrics(0);
	}
}

{
	filesRemaining = NF;
	for (i=1;i<=NF;++i) {
		files[$i] = 1;
	}

	# Read initial round of rows to populate cursors
	for (file in files) {
		moreRows = (getline cursors[file] < file);

		if (!moreRows) {
			delete files[file];
			filesRemaining--;
		}
	}
	
	while (filesRemaining > 0) {
		
		lowest = null;
		lowestFile = null;
		for (file in cursors) {

			if (lowest == null) {
				lowest = cursors[file];
				lowestFile = file;
			}
			else if (lowest > cursors[file]) {
				lowest = cursors[file];
				lowestFile = file;
			}
		}

		aggregateRow(lowest)

		moreRows = (getline cursors[lowestFile] < lowestFile);

		if (!moreRows) {
			delete files[lowestFile];
			delete cursors[lowestFile];
			filesRemaining--;
		}
	}

	n = asorti(cursors);
	for (i=1;i<=n;++i) {
		aggregateRow(cursors[i]);
	}

	commitPendingRow();
	writeMetrics(1);

	print "[progress] Awk over (" s "/" c "). Total lines processed: " linesRead
} 

END { 

}