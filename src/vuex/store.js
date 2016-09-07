/**
 * Created by kexiao on 2016/9/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  // TODO: 放置初始状态
  msg: '123'
}

export default new Vuex.Store({
  state,
  mutations
})
