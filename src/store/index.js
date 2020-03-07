/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-06 13:23:13
 */
import Vue from 'vue'
import Vuex from 'vuex'
import digital from './module/digitalModule'
import detail from './module/detailModule'

import myshow from './module/IsShow'
import myCreate from './module/IsCreate'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState({})],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    digital,
    detail,
    myshow,
    myCreate
  }
})
