<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";
import axios from "axios";
export default {
  name: "app",
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 20,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [
        `/*
 * Hello:I am Arch.run
 * I am good at tracing New Technology
 * Supported by: vue2.6+/webpack4+/babel7+
 * I will build a single page to gather some useful resource, in future
 * at the starting ,just a little trick.
 */

/*
 *  OK,Let's begin
 *  首先给所有元素加上过渡效果
 */
* {
  transition: all 1s;
}

/*
 *  白色背景太单调了,我们来点背景
 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
  overflow: hidden;
}
/*
 *  有点暗，增加点背景
 */
body{
  background: rgb(0,43,54);
}

/*
 * 美化一下工作区
 * 加上框框，整个区域居中，看着舒服
 * 在给框框加个3D阴影效果，高大上一点点
 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  margin: 2.5vh 5vw;
  height: 90vh;
  width: 90vw;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  }
/*
 *代码高亮才不容易出错，给选择器，属性，标点符号，函数名啥的也都加上风格
*/
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}
/*
 * 给编辑区来点鼠标悬浮效果，或许看着牛逼一点
 */
.styleEditor:hover {
  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

/*
 * 高亮颜色好像不好看，换个风格，重新加一下
 */
.token.comment { color: #857F6B; font-size: 12px; font-style: italic; }
.token.selector { color: #E69F0F }
.token.property { color: #64D5EA; }
.token.punctuation { color: #ddd; }
.token.function { color: #BE84F2; }


/*
 * 加一些3D转换效果
 */
.styleEditor {
  position: fixed; left: 10px; top: 10px;
  transform: rotateY(10deg) translateZ(-100px);
}

/*
*emm，快要写正文了，缩小一下代码区，放到正中间上方，方便下面放内容
*/
.styleEditor {
  height: 25vh;
}

/*
*加点透视效果
*/
html {
  perspective: 1000px;
}

/*
 * 这个斜斜的3D效果有点难看，还是再改一下
 * 重新设置code编辑区,再搞到3D效果
 */
.styleEditor {
  z-index: 10000;
  position: fixed; left: 0; top: 0;
  transform: rotateX(-30deg) translateZ(0px);
}

/*
 * 接下来,为正文编辑做点准备
 * 设置设置一下正文区位置
 * 还要允许滚动，不然内容太长就看不见了
 */
 .resumeEditor{
  position: fixed;
  top: 25vh; left: 0; right: 0;
  padding: .5em;
  margin: 15px;
  height: 70vh;
  border: 1px solid;
  background: #FCFFDB; color: #222;
  overflow: auto;
  border-radius: 8px;
}

/*
 * 好，开始撸一下正文内容
 */

`,
        `
/*
 * 这是 Markdown 格式的，需要变成更友好的格式
 * 我们阔以用开源工具翻译到HTML
 */
`,
        `
/*
 * 显示Markdown格式更好看
 * 不过，格式还需要优化
 */
.resumeEditor{
  padding: 20px 4vw;
}

/*
*标题不能太大
*/
.resumeEditor h1{
  font-size:24px;
  }

/*
*副标题也不能太了
*/
.resumeEditor h2{
  display: inline-block;
    margin: 20px 0 10px;
  font-size: 20px;
  color: #007419;
  }

/*
*文本需要精致的排版
*/
.resumeEditor li{ font-size: 15px;}
.resumeEditor li strong{ color:#003174;}
.resumeEditor ul,.resumeEditor ol{ list-style: none; }
.resumeEditor ul> li::before{ content: '•'; margin-right: .5em; }
.resumeEditor ol { counter-reset: section; }
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}

.resumeEditor p{
  font-size: 15px;
  margin-bottom: 0.5em;
}

.resumeEditor p strong{
  color:#003174;
}

/*
*如果在未来加图片，也需要圆角和阴影
*/
.resumeEditor img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
}

hr {
  margin:20px 0;
}

/* 好了,Lets's review it ！*/

* {
  transition: all 1s;
}
.styleEditor {
  opacity:0;
}
.resumeEditor {
  top:0;
  height:95vh;
  z-index:10;
}
.background{
  position:fixed;
  left:0;
  top:0;
  height:100vh; width:100vh;
  background: rgb(0,43,54);
  z-index:-10;
}

h3{
  margin-bottom: 10px;
}

`
      ],
      currentMarkdown: "",
      fullMarkdown: `loading...`
    };
  },
  created() {
    this.loadMD(); //prepare content firstly
    this.dynamicShowing();
  },

  methods: {
    loadMD: function() {
      const url = "contents/introduce.md";
      axios.get(url).then(response => {
        this.fullMarkdown = response.data;
      });
     // return this.fullMarkdown.length;
    },
    dynamicShowing: async function() {
      await this.progressivelyShowStyle(0);
      this.interval = 0;
      await this.progressivelyShowResume();
      this.interval = 10;
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function() {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function() {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // 计算前 n 个 style 的字符总数
          let length = this.fullStyle
            .filter((_, index) => index <= n)
            .map(item => item.length)
            .reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length; //这个值被提前计算了
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(
              0,
              this.currentMarkdown.length + 1
            );
            let lastChar = this.currentMarkdown[
              this.currentMarkdown.length - 1
            ];
            let prevChar = this.currentMarkdown[
              this.currentMarkdown.length - 2
            ];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  min-height: 100%;
}
* {
  box-sizing: border-box;
}
</style>
