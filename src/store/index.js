import Vue from 'vue'
import Vuex from 'vuex'
import digital from './module/digitalModule'
import detail from './module/detailModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    digital,
    detail
  }
})
