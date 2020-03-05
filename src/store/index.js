/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 14:49:47
 */
import Vue from 'vue'
import Vuex from 'vuex'
import myshow from './module/IsShow'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer (val) {
      return {
        city: val.city
      }
    }
  })],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    myshow
  }
})
