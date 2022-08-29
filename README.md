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
npm install husky -D
npm set-script prepare "husky install"
npm run prepare
# pre-commit lint
npx husky add .husky/pre-commit "npm run lint"
# commit-msg commitlint
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
- commitlint

## other
问题：
- [ ] husky为什么不会自动安装？


husky 会在安装时向`.git/config`中添加一行`hooksPath = .husky`，这样就能使`git hooks`执行文件写在项目里了。
参考
- [前端-Git Hooks代码提交规范](https://juejin.cn/post/7008884141496205343)
