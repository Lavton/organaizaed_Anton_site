#!/bin/bash

npx quartz build

echo "Start send website"

cd ../publish
shopt -s extglob
rm -r -- !(".git"|"CNAME")
cd -
echo "delete old staff"

cp -r public/* ../publish/
echo "copy website"

cd ../publish
git add .
git commit -m "new modifications"
git push origin main
cd -

echo "all done. Check https://organizedanton.ru/"