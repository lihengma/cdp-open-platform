#!/usr/bin/env sh


# 生成静态文件
npm run build

# 进入生成的文件夹
# cp CNAME docs/.vuepress/dist/
cd dist


git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lihengma/cdp-open-platform.git master:gh-pages


cd -

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:lihengma/cdp-open-platform.git master:master