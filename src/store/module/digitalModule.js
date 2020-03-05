import http from '@/util/http'
// import axios from 'axios'
const module = {
  namespaced: true,
  state: {
    digitallist: []
  },
  actions: {
    getDigitalAction (store, rckcode) {
      http.get(`/ajax/wap/getresult.jsp?pageno=1&productsort=${rckcode}&order=4&psize=48&pprice=&brand=&shopd1=&iftkt=`).then(res => {
        store.commit('setDigitallist', res.data)
        console.log(res.data)
      })
    },
    getDigitalAction2 (store, number) {
      http.get(`/ajax/wap/getresult.jsp?pageno=1&productsort=081&order=${number}&psize=48&pprice=&brand=&shopd1=&iftkt=`).then(res => {
        store.commit('setDigitallist', res.data)
        console.log(res.data)
      })
    }
  },
  mutations: {
    setDigitallist (state, data) {
      // console.log(data)
      state.digitallist = data
      // console.log(state.digitallist)
    }
  },
  getters: {

  }
}
export default module
