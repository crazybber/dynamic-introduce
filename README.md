# 一个会动的简历模板

> This is a resume preiview

[预览](https://crazybber.github.io/animating-resume/public)

## 使用方法

``` bash
git clone https://github.com/crazybber/animating-resume.git
cd animating-resume
npm install
npm run dev
```

## 部署方法

1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `项目名/dist`。如果你没有修改项目名 animating-resume，则可跳过此步骤。

2. 修改访问端口，编辑：config/index.js，修改第26行。当前port: 80,

3. 编译、上传
    ``` bash
    npm run build
    git add .
    git commit -m "update"
    git push
    ```

3. 开启 GitHub Pages 功能

