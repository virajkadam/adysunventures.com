git init

git config core.fileMode false
git config core.autocrlf false

git add .
git commit -m "'$1'"

git rm -r --cached .
git add .
git commit -m "'$1'"

git pull origin master

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    chmod -R 777 ../adysunventures.com/
    chown -R root:root ../adysunventures.com/
fi

git push origin HEAD:master
