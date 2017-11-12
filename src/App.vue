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
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Everybody yo yo ,come let's go !
* 大家好,我是甄怀修,一个要成为网红的程序员
* 喜欢前端的PHP后端工程师
* 下面我来写个页面简单介绍一下自己
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all 1s;
  -webkit-transition: all 1s;
}

/* 白色背景太刺眼,换一个原谅绿*/
html {
  background: rgba(101, 234, 45, 0.59);
}

/* ok,美化一下我们的工作区 */
.style-div {
  top: 1vh;
  padding: 10px 10px 20px;
  overflow: auto;
  background: rgb(48, 48, 48);
  color: white;
  border: 1px solid #ccc;
  width: 45vw;
  height: 90vh;
  font-size: 14px;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
}

/* 代码看着不舒服,加个高亮 */
.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E69F0F }
.token.property{ color: #64D5EA; }
.token.punctuation{ color: #ddd; }
.token.function{ color: #BE84F2; }

.style-div {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 改变一下可视角度 */
html{
  perspective: 1500px;
  -webkit-perspective: 1500px; /* Safari 和 Chrome */
}

/* 接下来我给自己准备一个编辑器 */
.resume-div{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* 好了，我开始写简历了 */


`,
          `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 再对 HTML 加点样式 */
.resume-div{
  padding: 2em;
}
.resume-div h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resume-div ul,.resume-div ol{
  list-style: none;
}
.resume-div ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resume-div ol {
  counter-reset: section;
}
.resume-div ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resume-div blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `方应杭
----

资深前端工程师，资深前端讲师，现在在 [饥人谷](http://jirengu.com) 教前端课程。

技能
----

* 前端开发
* Rails 开发
* Node.js 开发
* 前端授课

工作经历
----

1. [饥人谷](http://jirengu.com)
2. 腾讯即时通讯平台部
3. 阿里巴巴B2B部门
4. 彩程知人项目组

链接
----

* [GitHub](https://github.com/frankfang)
* [我的文章](https://www.zhihu.com/people/zhihusucks/pins/posts)

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>
