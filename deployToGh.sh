#!/bin/bash

# npx quartz build --serve

npx quartz build

echo "Start send website"

cd ../publish
shopt -s extglob
rm -r -- !(".git"|"CNAME"|"yandex_12b1fb2d99d1d714.html")
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
