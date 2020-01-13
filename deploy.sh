#!/bin/bash
# pulling from the remote origin
# then build the angular project
# copy dist content to the server
# restart pm2
echo "Pulling from remote repository"
result="a"
git pull origin master
if [ "$result" != "Already up to date." ]
    then
    cd mgfront
    ng build --prod
    cp -R dist/mgfront /var/www/mgproject
    pm2 restart www
else
    echo $result
fi

