import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        isLogin:true    // 添加该字段，表示进入这个路由是需要登录的
      }//路由元
    },{
      path:"/login",
      name:"login",
      component:Login
    }
  ]
})
