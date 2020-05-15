import Vue from 'vue'
import Router from 'vue-router'

import App from '../App'

Vue.use(Router)


const routes = [
  { path: '/', name: 'Default', component: App },
  {
    path: '/q',
    name: 'Quick',  //quick load without progressing
    component: App,
    props: { quickLoad: true,silent:'keep' }
  }
]

const router = new Router({ base: process.env.BASE_URL, routes })


export default router
