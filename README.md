# TodoList

本项目的目的是探索一些我没使用过的新技术，下面是项目依赖的一些信息

- husky: 将 git hooks 放在项目中
- commitlint: 配合 husky，用于在 pre-commit 阶段检测 git message 是否合格
- lint-staged: 配合 husky 只检测添加到 git 缓存区的代码
- eslint: 提供代码质量检查，目前使用的是默认配置
- prettier: 用于自动格式化代码，使多人开发能自动保持标准代码风格

- typescript: 弥补 js 的类型缺陷，提高代码质量
- react: data => view 的保证，提供了完整的生态
- create-react-app: 可立即上手的 react 完整框架
- redux: 因在实际项目中使用的比较少但又很重要，所以加入了 redux
- @reduxjs/toolkit: 特别方便的 redux 解决方案，感觉比 dva 那套简洁许多

- [ ] 单元测试
- [ ] 集成测试
- [ ] Github Actions: 自动运行单元测试，打包部署等操作

## 如何保证项目的质量

-

## 实践笔记

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

# pre-commit lint
yarn add -D --exact prettier
echo {}> .prettierrc.json
yarn add -D lint-staged
yarn husky set .husky/pre-commit "npx --no lint-staged"
```

**git branch**

- main
- develop
- feature/\*
- fix/\*

**Local lint tools**

- husky
- eslint
- prettier
- [commitlint](https://github.com/conventional-changelog/commitlint): [conventionalcommits](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

## other

问题：

- [ ] husky 为什么不会自动安装？
- [ ] [解决 prettier 与 eslint 的冲突](https://prettier.io/docs/en/install.html#eslint-and-other-linters)
- [ ] 如何在 commit 执行后 fix 文件但不自动 git 暂存 => prettier 所有文件
- [ ] git 分支本地 develop 指向的是线上的 main

检查并格式化`npx prettier --write .`
检查是否修改`npx prettier --check .`
防止自动格式化使用`// prettier-ignore`

husky 会在安装时向`.git/config`中添加一行`hooksPath = .husky`，这样就能使`git hooks`执行文件写在项目里了。
参考

- [前端-Git Hooks 代码提交规范](https://juejin.cn/post/7008884141496205343)
- [git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
