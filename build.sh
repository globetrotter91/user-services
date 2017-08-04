#!/bin/bash

npm run clean
echo "cleaned build"
npm run build-server
echo "server built"
npm run build-client
echo "client built"
cp package.json build/package.json
#mv build/ ../../heroku/
#mv ../../heroku/build ../../heroku/scrumboard
echo 'all done'
#cd ../../heroku/scrumboard