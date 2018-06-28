http://cdn.stevemichelotti.com/code/elite-schedule-3.13.2.zip


nvm install lts/*
nvm alias default lts/*
nvm ls
nvm ls-remote
nvm install v9.10
nvm use 8.11

ls -l ~/.nvm/versions/node/

cnpm i -g ionic@rc

git config --global user.name "Mike Callaghan"
git config --global user.email "mike@abc.com"
git config --global --list

ionic docs

ionic signup
ionic login
ionic logout

ionic start
ionic start --help
ionic start --list
ionic serve

ionic start ps-blank blank --no-git --no-link
ionic start ps-tabs tabs --no-git --no-link --type angular
ionic start ps-sidemenu sidemenu --type angular --no-git --no-link --no-deps

ionic serve --no-livereload
ionic serve --address 192.168.15.4 --port 24601

ionic serve --address 192.168.15.4 --port --no-open

ionic s -l -b
ionic s -l -b --lab-host 192.168.15.4 --address 192.168.15.4


ionic generate --help
ionic generate --list


ionic g pg Game --flat --styleext css --spec false --route-path game --dry-run
ionic g page Game

ionic g e WordTypes
ionic g i IWord
ionic g s Word --spec false --flat false
ionic g m components --spec false

ionic g c randomWord --inline-style --inline-template --export

ionic build --help
ionic build --prod

ionic config get pro_id
ionic config get npmClient --global
ionic config get

ionic config set name ps-libs

ionic ssh
ionic ssh add
ionic ssh delete
ionic ssh generate
ionic ssh setup

ionic integrations list
ionic integrations enable cordova
ionic integrations disable cordova
ionic integrations enable capacitor

npm i -D electron
main: main.js
ionic serve --no-open
npx electron .


git-completion.sh
https://goo.gl/2BQLqy

ionicons capacitor