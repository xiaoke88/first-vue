import Vue from 'vue'
import App from './App'
import routersCombine from './routers'
import store from './vuex/store'
var VueRouter = require('vue-router')
Vue.use(VueRouter)

var router =routersCombine(VueRouter)

const app = new Vue({
  router,
  store,
  ...App
});
app.$mount('#app');

