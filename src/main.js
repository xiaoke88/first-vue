import Vue from 'vue'
import App from './App'
var VueRouter = require('vue-router')
Vue.use(VueRouter)

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

var Hello = Vue.extend({
  template: '<p>This is hello!</p>'
})

var router = new VueRouter()
router.map({
  'bar': {
    component: Bar
  },
  'hello': {
    component: Hello
  }
})

router.start(Vue.extend(App), '#app')
window.router = router
