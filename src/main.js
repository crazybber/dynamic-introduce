import Vue from 'vue'
import Mobile from './Mobile'
import router from './router'
//var width = document.documentElement.clientWidth

new Vue({
  router,
  render: h => h(Mobile)
}).$mount('#app')
