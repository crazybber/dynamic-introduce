# Markdown

this is an introduce for site: arch.run

## Arch.run
----
- [Links](https://www.cnblogs.com/ChineseLiao/p/11079080.html)


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
