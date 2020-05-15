# Markdown

this is an introduce for site: arch.run

## Vue

----

- [vue展示md文件](https://www.cnblogs.com/ChineseLiao/p/11079080.html)
- [vue中 devServer](https://blog.csdn.net/qq_42692714/article/details/105841434)
- [Vue.js本地dev server和json-server模拟请求服务器](https://www.cnblogs.com/nx520zj/p/9617900.html)
- [VUE中的路由守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
- [Vue2.0完整生命周期（包括路由守卫）](https://www.jianshu.com/p/7ff8f31afebe)
- [Vue中使用router全局守卫实现页面拦截](https://www.cnblogs.com/xufeikko/p/10169826.html)
- [Vue 路由守卫及其在实际开发中的应用](https://blog.csdn.net/qq_26769677/article/details/101003337)
- [vue项目中的三种路由的方式以及路由守卫](https://blog.csdn.net/qq_39603448/article/details/93591185)


## Angular

- [markdowncss](http://markdowncss.github.io/)
- [scully-kit](https://github.com/jorgeucano/started-scully-firebase)
- [scully DonutStore](https://github.com/nghoney/DonutStore)
- [d-koppenhagen.de](https://github.com/d-koppenhagen/d-koppenhagen.de)


## Code Snips

```javascript

// 读取该文件夹下所有文件信息
const filesMD = require.context('@/../contents/*.md', true, /\.md$/);
const filesMDNames = filesMD.keys();
const tempListData = [];
filesMDNames.map((item) => {
    const listObj = {};
    const listItemS = item.split('/');
    if (listItemS.length > 0) {
        listObj.name = listItemS[1].replace('.md', '');
        listObj.path = item;
        listObj.children = [];
        listObj.showChild = false;
    }
　　return tempListData.push(listObj);
});

```
