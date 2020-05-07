# Markdown

this is an introduce for site: arch.run

## Arch.run
----
- [Links](https://www.cnblogs.com/ChineseLiao/p/11079080.html)
- [vue中 devServer](https://blog.csdn.net/qq_42692714/article/details/105841434)
- [Vue.js本地dev server和json-server模拟请求服务器](https://www.cnblogs.com/nx520zj/p/9617900.html)

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
