# pulling from the remote origin
# then build the angular project
# copy dist content to the server
# restart pm2
echo "Pulling from remote repository"
wait output = git pull origin master
if [$result != 'Everything is uptodate.']
    then
    cd mgfront
    wait ng build --prod
    cp dist/mgfront /var/www/mgproject
else
    echo $result
fi

