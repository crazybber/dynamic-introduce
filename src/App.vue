<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor
      ref="resumeEditor"
      :markdown="currentMarkdown"
      :enableHtml="enableHtml"
    ></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from "./components/StyleEditor";
import ResumeEditor from "./components/ResumeEditor";
import "./assets/reset.css";

export default {
  name: "app",
  components: {
    StyleEditor,
    ResumeEditor,
  },
  data() {
    return {
      interval: 40,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [
        `/**
* Everybody yo yo ,come let's go !
* Hello，Everyone I'm arch.run.
* this a demo just showing some content.
* Framework: vue2.6+/webpack4+/babel7+
* Author: arch.run
*/

/**
 *  首先给所有元素加上过渡效果
 */
* {
  transition: all 1s;
  -webkit-transition: all 1s;
}

/**
 * 白色背景太刺眼,我们来点背景
 */
html {
 color: rgb(222,222,222);
  height:100%; width:100%;
  /* Emmm.. It doesn't seem to fit me */
  background: rgb(0,43,54);
}

/**
 * ok,美化一下我们的工作区
 */
.style-div {
  padding: 10px 10px 20px;
  overflow: auto;
  background: rgb(48, 48, 48);
  color: white;
  border: 1px solid #ccc;
  width: 45%;
  height: 90%;
  font-size: 14px;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
}
.style-div:hover {
  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
}

/**
 * 代码看着不舒服,加个高亮
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

/**
 * 改变一下可视角度
 */
html {
  perspective: 1500px;
  -webkit-perspective: 1500px;
}

/**
 * Okey,我还需要一个填充内容的容器
 */
.resume-div {
  position: fixed; right: 10px; top: 10px;
  padding: 10px; margin: 10px;
  width: 48%; height: 90%;
  border: 1px solid;
  background: rgb(48, 48, 48); color: white;
  overflow: auto;
  transform: rotateY(-10deg) translateZ(-100px);
  -webkit-transform: rotateY(-10deg) translateZ(-100px);
}

/**
 * 好，开始写内容
 */


`,
        `
/**
 * 把 Markdown 格式转换成 HTML
 */
`,
        `
/**
 * 我现在感觉Markdown格式更好看
 * 对 HTML 加点样式
 */
.resume-div a {
      color: wheat;
  }
.resume-div h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 20px 0 10px;
}
.resume-div ul,.resume-div ol {
  list-style: none;
}
.resume-div ul> li::before {
  content: '•';
  margin-right: 10px;
}
.resume-div ul> li {
   margin: 8px;
}

/**
 * OK,LAST WORDS
 * I JUST USE OTHER'S STYLES
 */
`,
      ],
      currentMarkdown: "",
      fullMarkdown: `
## Arch.run
----

技术爱好者、开源爱好者、技术极客、技术布道师
- Email：;
- open source ：;

## 基本信息
----

- name;
- education
- location;
- hobby

## 技能
----

* LINUX|WINDOWS | GIT | NGINX | KUBERNETES
* ELASTICSEARCH | REDIS | KAFKA | DOCKER
* COMPOSER | NPM | WEBPACK | GULP
* PHP | MYSQL | LARAVEL | SYMFONY
* UNI-APP | VUE | MP-WEIXIN | NODEJS

## 工作经历
----

- A Company
- B Company
- C Company

## 链接
----

* [Open Source](http://github.com/gb28181)
* [GitHub](https://github.com/crazybber)
* [Community](https://github.com/micro-in-cn)
`,
    };
  },
  created() {
    this.makeResume();
  },

  methods: {
    makeResume: async function() {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
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
            .map((item) => item.length)
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
    },
  },
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
