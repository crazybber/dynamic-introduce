webpackJsonp([1],{100:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},40:function(n,t){},41:function(n,t,e){e(88);var r=e(15)(e(48),e(99),"data-v-2df95543",null);n.exports=r.exports},42:function(n,t,e){e(87);var r=e(15)(e(49),e(98),"data-v-2ca90776",null);n.exports=r.exports},43:function(n,t,e){e(86);var r=e(15)(e(46),e(97),"data-v-288975d1",null);n.exports=r.exports},44:function(n,t,e){e(89);var r=e(15)(e(47),e(100),"data-v-b76f4cbc",null);n.exports=r.exports},46:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(16),o=e.n(r),i=e(26),s=e.n(i),a=e(25),u=e.n(a),l=e(42),c=e.n(l),d=e(41),p=e.n(d),h=e(40);e.n(h);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/**\n* Everybody yo yo ,come let's go !\n* 大家好，我是arch.run\n* this a demo just showing something.\n* let's go.\n*/\n\n/**\n *  首先给所有元素加上过渡效果\n */\n* {\n  transition: all 1s;\n  -webkit-transition: all 1s;\n}\n\n/**\n * 白色背景太刺眼,换一个原谅绿\n */\nhtml {\n  background: rgba(101, 234, 45, 0.59);\n  height:100%; width:100%;\n  /* Emmm.. It doesn't seem to fit me */\n  background: rgb(63, 82, 99);\n}\n\n/**\n * ok,美化一下我们的工作区\n */\n.style-div {\n  padding: 10px 10px 20px;\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  color: white;\n  border: 1px solid #ccc;\n  width: 45%;\n  height: 90%;\n  font-size: 14px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n}\n.style-div:hover {\n  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);\n}\n\n/**\n * 代码看着不舒服,加个高亮\n */\n.token.comment { color: #857F6B; font-size: 12px; font-style: italic; }\n.token.selector { color: #E69F0F }\n.token.property { color: #64D5EA; }\n.token.punctuation { color: #ddd; }\n.token.function { color: #BE84F2; }\n\n/**\n * 加一些3D转换效果\n */\n.style-div {\n  position: fixed; left: 10px; top: 10px;\n  transform: rotateY(10deg) translateZ(-100px);\n  -webkit-transform: rotateY(10deg) translateZ(-100px);\n}\n\n/**\n * 改变一下可视角度\n */\nhtml {\n  perspective: 1500px;\n  -webkit-perspective: 1500px;\n}\n\n/**\n * Okey,我还需要一个填充内容的容器\n */\n.resume-div {\n  position: fixed; right: 10px; top: 10px;\n  padding: 10px; margin: 10px;\n  width: 48%; height: 90%;\n  border: 1px solid;\n  background: rgb(48, 48, 48); color: white;\n  overflow: auto;\n  transform: rotateY(-10deg) translateZ(-100px);\n  -webkit-transform: rotateY(-10deg) translateZ(-100px);\n}\n\n/**\n * 好，开始写内容\n */\n\n\n","\n/**\n * 把 Markdown 格式转换成 HTML\n */\n","\n/**\n * 我现在感觉Markdown格式更好看\n * 对 HTML 加点样式\n */\n.resume-div a {\n      color: wheat;\n  }\n.resume-div h2 {\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 20px 0 10px;\n}\n.resume-div ul,.resume-div ol {\n  list-style: none;\n}\n.resume-div ul> li::before {\n  content: '•';\n  margin-right: 10px;\n}\n.resume-div ul> li {\n   margin: 8px;\n}\n\n/**\n * OK,还有最后一句话\n * PHP是世界上最好的语言\n */\n"],currentMarkdown:"",fullMarkdown:"\n## Arch.run\n----\n\n技术爱好者、开源爱好者、技术极客、技术布道师\n- Email：;\n- open source ：;\n\n## 基本信息\n----\n\n- name;\n- education\n- location;\n- hobby\n\n## 技能\n----\n\n* LINUX|wINDOWS | GIT | NGINX | KUBERNETES\n* ELASTICSEARCH | REDIS | KAFKA | DOCKER\n* COMPOSER | NPM | WEBPACK | GULP\n* PHP | MYSQL | LARAVEL | SYMFONY\n* UNI-APP | VUE | MP-WEIXIN | NODEJS\n\n## 工作经历\n----\n\n- A Company\n- B Company\n- C Company\n\n## 链接\n----\n\n* [Open Source](http://github.com/gb28181)\n* [GitHub](https://github.com/crazybber)\n* [Community](https://github.com/micro-in-cn)\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},47:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(16),o=e.n(r),i=e(26),s=e.n(i),a=e(25),u=e.n(a),l=e(42),c=e.n(l),d=e(41),p=e.n(d),h=e(40);e.n(h);t.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:p.a},data:function(){return{interval:20,currentStyle:"",enableHtml:!1,fullStyle:["/**\n * Everybody yo yo ,come let's go !\n * Hello ,I am Arch.run\n * I love new techs\n * i want to say something\n */\n\n/**\n *  首先给所有元素加上过渡效果\n */\n* {\n  transition: all 1s;\n  -webkit-transition: all 1s;\n}\n\n/**\n * 白色背景太刺眼,换一个原谅绿\n */\nhtml {\n  background: rgba(101, 234, 45, 0.59);\n  height:100%; width:100%;\n          /* Emmm.. It doesn't seem to fit me */\n  background: rgb(63, 82, 99);\n}\n\n/**\n * ok,美化一下我们的工作区\n */\n.style-div {\n  padding: 10px 10px 20px;\n  overflow: auto;\n  background: rgb(48, 48, 48);\n  color: white;\n  border: 1px solid #ccc;\n  width: 95%;\n  height: 90%;\n  font-size: 14px;\n  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n}\n.style-div:hover {\n  box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);\n}\n\n/**\n * 代码看着不舒服,加个高亮\n */\n.token.comment { color: #857F6B; font-size: 12px; font-style: italic; }\n.token.selector { color: #E69F0F }\n.token.property { color: #64D5EA; }\n.token.punctuation { color: #ddd; }\n.token.function { color: #BE84F2; }\n\n/**\n * 加一些3D转换效果\n */\n.style-div {\n  position: fixed; left: 10px; top: 10px;\n  transform: rotateY(10deg) translateZ(-100px);\n  -webkit-transform: rotateY(10deg) translateZ(-100px);\n}\n\n/**\n * 改变一下可视角度\n */\nhtml {\n  perspective: 1500px;\n  -webkit-perspective: 1500px;\n}\n\n/**\n * Okey,我还需要一个填充内容的容器\n */\n.resume-div {\n  position: fixed; right: 10px; top: 10px; z-index: 9999;\n  padding: 10px; margin: 10px;\n  width: 90%;\n  height: 70%;\n  border: 1px solid;\n  background: rgb(48, 48, 48); color: white;\n  overflow: auto;\n  transform: rotateY(-10deg) translateZ(-100px);\n  -webkit-transform: rotateY(-10deg) translateZ(-100px);\n}\n\n/**\n * 好，开始写内容\n */\n\n\n","\n/**\n * 把 Markdown 格式转换成 HTML\n */\n","\n/**\n * 我现在竟然感觉Markdown格式更好看\n * 再对 HTML 加点样式\n */\n.resume-div a {\n      color: wheat;\n  }\n.resume-div h2 {\n    display: inline-block;\n    border-bottom: 1px solid;\n    margin: 20px 0 10px;\n  }\n.resume-div ul,.resume-div ol {\n    list-style: none;\n  }\n.resume-div ul> li::before {\n    content: '•';\n    margin-right: 10px;\n  }\n.resume-div ul> li {\n    margin: 8px;\n  }\n\n/**\n * OK,还有最后一句话\n * PHP是世界上最好的语言\n */\n"],currentMarkdown:"",fullMarkdown:"\n## Arch.run\n----\n\n- Mobile：136 - hello - world;\n- Wrchat：;\n- Site: arch.run;\n\n## 基本信息\n----\n\n- Name;\n- Education;\n- Location;\n- Work\n\n## 技能\n----\n\n* LINUX | GIT | NGINX | APACHE\n* ELASTICSEARCH | REDIS | KAFKA | DOCKER\n* COMPOSER | NPM | WEBPACK | GULP\n* PHP | MYSQL | LARAVEL | SYMFONY\n* UNI-APP | VUE | MP-WEIXIN | NODEJS\n\n## 工作经历\n----\n\n- Company A\n- Company B\n- Company C\n\n## 链接\n----\n\n* [Open Source](http://github.com/gb28181)\n* [GitHub](https://github.com/crazybber)\n* [Community](https://github.com/micro-in-cn)\n  "}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return t.apply(this,arguments)}var t=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return this.interval=0,n.next=5,this.progressivelyShowResume();case 5:return this.interval=10,n.next=8,this.progressivelyShowStyle(1);case 8:return n.next=10,this.showHtml();case 10:return n.next=12,this.progressivelyShowStyle(2);case 12:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new o.a(function(e,r){var o=t.interval,i=u()(s.a.mark(function t(){var r,a,u,l,c,d=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:a=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)}else t()}()})}}}},48:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(90),o=e.n(r);t.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(91),o=e.n(r);t.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(45),o=e(43),i=e.n(o),s=e(44),a=e.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},86:function(n,t){},87:function(n,t){},88:function(n,t){},89:function(n,t){},97:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),e("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},98:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"style-div"},[e("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),e("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},99:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"container",staticClass:"resume-div",class:{htmlMode:n.enableHtml}},[n.enableHtml?e("div",{domProps:{innerHTML:n._s(n.result)}}):e("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.efbe041c20b2baa7d92c.js.map