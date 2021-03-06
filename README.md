# 一个动态的自我介绍

> 可以单独使用Markdown编辑内容，并且不需要重新编译站点,完全自动加载

> This is a dynamic introdcuing by markdown hosted in docs folder

[预览](https://crazybber.github.io/dynamic-introduce)

## 使用方法

``` bash
git clone https://github.com/crazybber/dynamic-introduce.git
cd animating-introduce
npm install
npm run dev
```

## 部署调试说明

1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `你的输出目录(如:public)`。如果你没有修改(当前是"./")，可跳过此步骤。

2. 修改debug模式下的访问端口，编辑：config/index.js，修改第26行。当前port: 80,

3. 编译、上传

```bash
    npm run build
    git add .
    git commit -m "update a site version"
    git push origin master
```

4. 开启 GitHub Pages 功能

使用docs目录host站点
![use-docs-for-git-pages](./docs/use-docs-for-gitpages.png)


## TODO 

- [x] 以Load远程Markdown的方式，直接载入内容，使得介绍部分可以单独修改，而不用重新编译
- [ ] [WIP] 增加Action编译脚本，以Github Action自动化CI/CD.
- [ ] [WIP]增加路由守卫，允许页面在不同的URL下，可以跳过动态阶段直接载入介绍页

