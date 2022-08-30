# TodoList
- create-react-app(redux-typescript template)
- typescript
- react
- redux
- redux-tookit
## Note
```bash
npx create-react-app todo-list-2022 --template redux-typescript
git remote add origin https://github.com/wind8866/todo-list-2022.git
git branch -M main
git update-ref -d HEAD
# 修改了README.md
# git push -u origin main
git push --set-upstream origin main
git branch -m main develop
git push origin HEAD

# add eslint
npm init @eslint/config
# problems/esm/react/Yes(ts)/browser,node/Javascript/Yes/yarn

# add husky
yarn add -D husky
npm set-script prepare "husky install"
npm run prepare
# pre-commit lint
npx husky add .husky/pre-commit "npm run lint"

# commit-msg commitlint
yarn add -D @commitlint/{cli,config-conventional}
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
cat <<EEE > .husky/commit-msg
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

npx --no -- commitlint --edit "\${1}"
EEE
chmod a+x .husky/commit-msg

# TODO：npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"' 
# TODO:https://zhuanlan.zhihu.com/p/467335105    https://github.com/okonet/lint-staged
# pre-push test
```

**git branch**
- main
- develop
- feature/*
- fix/*

**Local lint tools**
- husky
- eslint
- prettier
- [commitlint](https://github.com/conventional-changelog/commitlint): [conventionalcommits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## other
问题：
- [ ] husky为什么不会自动安装？


husky 会在安装时向`.git/config`中添加一行`hooksPath = .husky`，这样就能使`git hooks`执行文件写在项目里了。
参考
- [前端-Git Hooks代码提交规范](https://juejin.cn/post/7008884141496205343)
- [git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
