url=$1
user=$2
pwd=$3
action=mine-full

mkdir -p ../static/dashboards/
cd ../static/dashboards
pwd

if ! [ -d ".svn" ]; then 
	echo "Making sure crayon dir exists in svn (first time)"
	svn mkdir $url/dashboards -m "creating svn crayon dashboards folder" --no-auth-cache --non-interactive --parents --username $user --password $pwd 2> /dev/null
	
	echo "Checking out crayon dashboards (first time)"
	svn checkout $url/dashboards . --no-auth-cache --non-interactive --username $user --password $pwd

	action=theirs-full
fi

echo "Updating local repository with new dashboards"
svn update . --username svnuser --password 5tgbnhy6 --no-auth-cache --non-interactive --accept $action

echo "Adding new dashboards to svn"
svn add ./* --no-auth-cache --non-interactive --username $user --password $pwd --quiet

echo "Committing changes to svn"
svn commit -m "Committing crayon dashboards" --no-auth-cache --non-interactive --username $user --password $pwd