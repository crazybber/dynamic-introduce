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
          `/**
* Everybody yo yo ,come let's go !
* 大家好,我是甄怀修,一个要成为网红的程序员
* 喜欢前端的PHP后端工程师
* 下面我来写个页面简单介绍一下自己
*/

/**
 *  首先给所有元素加上过渡效果
 */
* {
  transition: all 1s;
  -webkit-transition: all 1s;
}

/**
 * 白色背景太刺眼,换一个原谅绿
 */
html {
  background: rgba(101, 234, 45, 0.59);
  height:100%; width:100%;
  /* Emmm.. It doesn't seem to fit me */
  background: rgb(63, 82, 99);
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
  background: white; color: #222;
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
`
,
`
/**
 * 我现在竟然感觉Markdown格式更好看
 * 对 HTML 加点样式
 */
.resume-div {
  padding: 10px;
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
   margin: 10px;
}

/**
 * OK,还有最后一句话
 * PHP是世界上最好的语言
 */
`],
        currentMarkdown: '',
        fullMarkdown: `
## 甄怀修
----

- 手机：134 - hello - world;
- Email：huaixiu.zhen@gmail.com;
- 个人技术博客：https://www.litblc.com;

## 基本信息
----

- 甄怀修 / 男 / 1992;
- 中南民族大学 / 本科;
- PHP 开发工程师 / 深圳;
- 喜欢探索新技术 / 自学PHP已达四年时间

## 技能
----

* LINUX | GIT | NGINX | APACHE | DOCKER
* COMPOSER | NPM | WEBPACK | GULP
* PHP | MYSQL | LARAVEL | SYMFONY
* VUE | JQUERY | BOOTSTRAP

## 工作经历
----

- 深圳市天英联合教育股份有限公司  南山智园 2017/06 - 至今
- 深圳市蓝网科技股份有限公司  南山智园 2016/09 - 2017/06

## 链接
----

* [个人导航|HTML5](http://phpb.io)
* [GitHub|shyZhen](https://github.com/shyZhen)
* [我的博客|全站SSL全球CDN七牛静态资源分发](https://www.litblc.com)
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
    min-height: 100%;
  }
  *{
    box-sizing: border-box;
  }
</style>
