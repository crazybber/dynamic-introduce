<template>
  <div id="app">
    <div class="background"></div>
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
* 同学你好,这里是
* 东南大学
* 计算机科学与工程学院、
* 软件学院、人工智能学院。
*/

/*
* 一起来看看你的学长学姐们
* 是怎么做推送的吧～
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了,我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
  overflow: hidden;
}
body{
  background: rgb(0,43,54);
}
.background{
  z-index:-10000;
  position:fixed;
  left:0;
  top:0;
  height:100vh; width:100vh;
  background: rgb(0,43,54);
}
/* 调整一下代码框的位置 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
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

/* 太高了 */
.styleEditor {
  height: 20vh;
}

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-30deg) translateZ(0px) ;
}

/* 接下来,正文就要登场了 */
.resumeEditor{
  position: fixed;
  top: 21%; left: 0; right: 0;
  padding: .5em;  
  margin: 20px;
  height: 72vh;
  border: 1px solid;
  background: #FCFFDB; color: #222;
  overflow: auto;
  border-radius: 8px;
}
/* 一起来看看我们的学院介绍吧！ */


`,
          `
/* 这个介绍好像差点什么
 * 对了,这是 Markdown 格式的,我需要变成对 萌新们 更友好的格式
 * 简单,用开源工具翻译成 HTML 就行了
 */
`
          ,
          `
/* 格式还需要优化 */
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
  margin: 1em 0 .5em;
  font-size: 20px;
  color: #007419;
}

/* 文本小一些显得精致 */
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

.resumeEditor li{
  font-size: 15px;
}

.resumeEditor li strong{
  color:#003174;
}

.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
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

/* 好了，认真看一下学院介绍吧！*/

.styleEditor {
  opacity:0;
}
.resumeEditor {
  top:0;
  height:95vh;
}



`],
        currentMarkdown: '',
        fullMarkdown: `

# 东南大学计算机科学与工程学院、软件学院、人工智能学院

## 计算机科学与工程学院简介


学院起源于1960年建立的
“解算装置及技术”专业,
曾自主研制我国第一台数字积分机,
填补了国内空白,
并成功地应用于国防现代化和工业自动化领域,
取得了开创性成果。
现有
**“计算机科学与技术”**
和
**“软件工程”**
两个一级学科博士点,
其中 “计算机应用技术”
二级学科博士点为**国家重点学科**。
在ESI学科排名中,
计算机学科已进入**全球前1‰**
(截止目前,列全球第22位,国内第二位)。
计算机科学与技术一级学科为
**“双一流”国家重点建设学科**,
软件工程一级学科于2018年
进入**江苏省优势学科**立项建设范围。
近五年来,获国家教学成果一等奖、
江苏省教学成果一等奖、
省优秀教学成果二等奖、
中国学位与研究生教育学会二等奖、
全国高等学校计算机实践教学一等奖各1项。
![计算机学院本科教学与人才培养](https://static.myseu.cn/2019-xueyuantuisong/计算机学院本科教学与人才培养.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">计算机学院本科教学与人才培养</p>
“计算机教学实验中心”是
国家及江苏省教学实验示范中心建设点,
“数据库原理共享课”为国家级精品课程。
![东南大学计算机科学与技术一级学科博士学位授权点](https://static.myseu.cn/2019-xueyuantuisong/东南大学计算机科学与技术一级学科博士学位授权点.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">计算机科学与技术一级学科博士学位授权点</p>
![东南大学计算机科学与技术一级学科博士后流动站](https://static.myseu.cn/2019-xueyuantuisong/东南大学计算机科学与技术一级学科博士后流动站.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">计算机科学与技术一级学科博士后流动站</p>

## 软件学院简介
学院成立于2001年12月,
是首批成立的**“国家示范性软件学院”**
依托“软件工程”和“计算机科学与技术”
两个一级学科开展办学,其中,
“软件工程”学科是在“计算机软件与理论”
江苏省**重点学科**基础上发展形成的。
该学科于1986年获硕士学位授予权,
2003年获博士学位授予权,
2006年成为江苏省重点学科,
2012年成为江苏省一级学科重点学科。
学院始终以**现代工程教育**的理念为指引
建立创新人才培养模式,
并成为学校**工程教育教学改革**的先行者。
![国家示范性软件学院](https://static.myseu.cn/2019-xueyuantuisong/国家示范性软件学院.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">国家示范性软件学院</p>

## 人工智能学院简介
学院以计算机科学与工程学院为基础,
以学校相关专业为依托发展而来,成立于2018年,
是国家**首批申报并设立**“人工智能”专业的学院之一。
2018年秋季依托计算机科学与工程学院
招收了第一届人工智能专业本科生。
学院在**人工智能基础理论**和
**应用研究**方面具有深厚的研究基础,
主要研究方向包括**机器学习**、
**知识表示与推理**、
**计算机视觉**、
**自然语言处理**、
**多智能体**、**图像处理**、**科学可视化**等。
学院集中了计算机科学与技术、
控制科学与工程、
信息与通信工程等
多个国家**“双一流”**学科所在学院的
优势科研团队和科研资源,将在学科地位、
科研水平、
教学质量、
人才培养等方面建设国内外
具有**明显特色**和**较高学术水平**的人工智能专业。
![人工智能学院、人工智能研究院](https://static.myseu.cn/2019-xueyuantuisong/人工智能学院、人工智能研究院.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">人工智能学院、人工智能研究院</p>
![江苏省人工智能学会副理事长单位](https://static.myseu.cn/2019-xueyuantuisong/江苏省人工智能学会副理事长单位.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">江苏省人工智能学会副理事长单位</p>

## 师资队伍
学院现有专任教师93人,
拥有一支**结构合理、充满朝气、
以中青年教师为主的**高水平师资队伍。
其中,

* 中国工程院院士 **1** 人
* 博士生导师 **22** 人
* 新世纪“百千万人才工程”国家级人选 **1** 人
* 长江学者特聘教授 **1** 人
* 青年长江特聘教授 **1** 人
* 获国家自然科学基金优秀青年科学基金 **2** 人
* 教育部跨世纪人才 **2** 人
* 教育部新世纪优秀人才 **6** 人
* 教育部优秀青年教师 **2** 人
* 江苏省“333人才工程”培养对象 **6** 人
* 江苏省“六大人才高峰” **10** 人
* 江苏省“青蓝工程”培养对象 **8** 人
* 江苏省教育系统先进工作者 **1** 人
* 江苏省“双创人才” **1** 人
* 江苏省“双创博士”资助对象 **3** 人
* “长江学者和创新团队发展计划”创新团队 **1** 个

![学院师资队伍](https://static.myseu.cn/2019-xueyuantuisong/计算机学院师资队伍.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">学院师资队伍</p>

## 国际交流

学院坚持走国际化办学的强院道路,
积极拓宽国际视野、增强国际理念、加强国际交流、深化国际合作,
在高层次国际交流、与国际知名大学合作办学等方面实现了重要突破。

![承办第15届亚太人工智能国际会议](https://static.myseu.cn/2019-xueyuantuisong/承办第15届亚太人工智能国际会议.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">承办第15届亚太人工智能国际会议</p>
![承办第22届CSCWD国际会议](https://static.myseu.cn/2019-xueyuantuisong/承办第22届CSCWD国际会议.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">承办第22届CSCWD国际会议</p>

近年来,教学计划中逐步增加外教、全英文、双语授课课程,
为学生创造国际化的学习环境,为培养适应国际合作与竞争背景的优秀人才提供了有力保障。
2011年,开始与澳大利亚Monash大学联合培养软件工程硕士,
邀请了来自美国、德国、荷兰和加拿大等国家的知名学者来学院讲学,
接待了来自美国 Carnegie Mellon大学、Temple大学、肯特州立大学、
爱沙尼亚塔尔图大学、德国乌尔姆大学、澳大利亚Monash大学、
法国巴黎高科、英国女王大学代表团来访,并洽谈了合作事宜。
与美国普渡大学、爱尔兰阿斯隆理工学院、
爱尔兰考德大学、日本早稻田大学、澳大利亚昆士兰大学、
比利时 GROUP-T大学、爱尔兰 Ericsson公司等签署了合作协议联合培养学生,
每年均有一定比例的学生到上述大学和企业进行研究和实习,
培养了一批具有国际竞争能力的精英型计算机、软件人才。



## 学生活动

学院重视学生全面发展,通过打造学生自我成长、
开拓创新的实践平台持续推动第二课堂的建设。
在院团委的指导下,学院共设有学生会、
青年志愿者协会、科学技术协会、
新媒体工作室等四大学生组织,
同学们可根据兴趣、能力需求选择加入其中,
参与到组织策划多项内涵丰富的活动中,
如“南京地质博物馆微笑讲解团”志愿活动,
迎新晚会等。在充分发挥学生的主观能动性的同时锻炼学生的沟通、
执行、抗压等多项素质。同时,学院重视打造专业特色学生组织建设,
学生组织作为学生实践开拓与能力提升的重要载体,
持续产出学生自主设计、精心开发的项目成果,
并多次获校级、省级以及国家、国际级别的各大奖项。
每年超过二十余场极具专业特色、饱含实践意义的活动,
培养学生对科研的浓厚兴趣的同时极大地丰富着同学们的课余生活,
指引同学们在专业与自我发展方面不断进步与成长。

![获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌](https://static.myseu.cn/2019-xueyuantuisong/获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">获ICPC（国际大学生程序设计竞赛）亚洲区域赛金牌</p>
![获全国高校云计算应用创新大赛一等奖](https://static.myseu.cn/2019-xueyuantuisong/获全国高校云计算应用创新大赛一等奖.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">获全国高校云计算应用创新大赛一等奖</p>
![院运会](https://static.myseu.cn/2019-xueyuantuisong/tp1.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">院运会</p>
![中山陵志愿者活动](https://static.myseu.cn/2019-xueyuantuisong/tp2.png)
<p style="text-align:center;font-weight:bold;font-size:14px;">中山陵志愿者活动</p>
![“我爱东大”校史校情知识竞赛](https://static.myseu.cn/2019-xueyuantuisong/tp4.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">“我爱东大”校史校情知识竞赛</p>
![环九龙湖自行车赛](https://static.myseu.cn/2019-xueyuantuisong/tp3.jpg)
<p style="text-align:center;font-weight:bold;font-size:14px;">环九龙湖自行车赛</p>
`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        this.interval = 0
        await this.progressivelyShowResume()
        this.interval = 20
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          this.$nextTick(() => {
            this.$refs.resumeEditor.goTop()
          })
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
              showResume()
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
    min-height: 100vh; position: relative;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }

</style>
