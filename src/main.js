import Vue from 'vue'
import Mobile from './Mobile'

var width = document.documentElement.clientWidth
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Mobile)
})
