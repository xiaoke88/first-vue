import Vue from 'vue'
import App from './App'
import routersCombine from './routers'
var VueRouter = require('vue-router')
Vue.use(VueRouter)

var router = new VueRouter()

routersCombine(router)

router.start(Vue.extend(App), '#app')

window.router = router
