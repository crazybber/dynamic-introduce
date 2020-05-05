<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

export default {
  name: 'app',
  components: {
    StyleEditor,
    ResumeEditor
  },
  data() {
    return {
      interval: 20,
      currentStyle: '',
      enableHtml: false,
      fullStyle: [
        `/*
 * Hello:I am Arch.run
 * I am good at tracing New Technology
 * Built On: vue2.6+/webpack4+/babel7+
 */

/**
 *  首先给所有元素加上过渡效果
 */
* {
  transition: all 1s;
  -webkit-transition: all 1s;
}

/**
 *  白色背景太单调了,我们来点背景
 */
html {
  background: rgba(101, 234, 45, 0.59);
  height:100%; width:100%;
  overflow: hidden;
/* Emmm.. It doesn't seem to fit me */
  background: rgb(63, 82, 99);
}

/**
 * ok,美化一下我们的工作区
 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  background: rgb(48, 48, 48);
  color: white;
  border: 1px solid #ccc;
  width: 95%;
  height: 90%;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  }
/* 代码高亮才不容易出错 */
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
.style-div:hover {
  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

/**
 * 继续高亮一下
 */
.token.comment { color: #857F6B; font-size: 12px; font-style: italic; }
.token.selector { color: #E69F0F }
.token.property { color: #64D5EA; }
.token.punctuation { color: #ddd; }
.token.function { color: #BE84F2; }

/**
 * 加一些3D转换效果
 */
.style-div {
  position: fixed; left: 10px; top: 10px;
  transform: rotateY(10deg) translateZ(-100px);
  -webkit-transform: rotateY(10deg) translateZ(-100px);
}

/* 太高了 */
.styleEditor {
  height: 20vh;
}

/* 加点 3D 效果呗 */
html {
  perspective: 1000px;
  -webkit-perspective: 1000px;
}
.styleEditor {
  z-index: 10000;
  position: fixed; left: 0; top: 0;
  transform: rotateX(-30deg) translateZ(0px) ;
}

/** 接下来,正文就要登场了
 * 还要一个填充内容的容器
 */
 .resumeEditor{
  position: fixed;
  top: 21%; left: 0; right: 0;
  padding: .5em;
  margin: 20px;
  height: 72vh;
/* width: 90%; */
/*   height: 70%; */

  border: 1px solid;
  background: #FCFFDB; color: #222;
  overflow: auto;
  border-radius: 8px;
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
}

/**
 * 好，开始写内容
 */

`,
        `
/*
 * 对了，这是 Markdown 格式的，需要变成更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,
        `
/**
 * 显示Markdown格式更好看
 * 不过，格式还需要优化
 **/
.resumeEditor{
  padding: 20px 4vw;
}

/* 标题太大了 */
.resumeEditor h1{
  font-size:24px;
  }

/* 副标题也太大了 */
.resumeEditor h2{
  display: inline-block;
    margin: 20px 0 10px;
  font-size: 20px;
  color: #007419;
  }

/* 文本需要精致的排版 */

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

/* 图片也需要圆角和阴影 */
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

`],
        currentMarkdown: '',
        fullMarkdown: `
## Arch.run
----

- Mobile：136 - hello - world;
- Wrchat：;
- Site: arch.run;


## 基本信息

- Name https://arch.run;
- Education Had been to School;
- Location SH;
- Work IT;

## 技能
----


* LINUX | GIT | NGINX | APACHE
* ELASTICSEARCH | REDIS | KAFKA | DOCKER
* COMPOSER | NPM | WEBPACK | GULP
* PHP | MYSQL | LARAVEL | SYMFONY
* UNI-APP | VUE | MP-WEIXIN | NODEJS

## 工作经历
----

* [GitHub](https://github.com/crazybber)
* [Golang](https://github.com/crazybber/go-fucking-exercise)

## 链接
----

* [Open Source](http://github.com/gb28181)
* [GitHub](https://github.com/crazybber)
* [Community](https://github.com/micro-in-cn)
  `
    };
  },
  created() {
    this.makeResume();
  },

  methods: {
    makeResume: async function() {
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
        let length = this.fullMarkdown.length;
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
