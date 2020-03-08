/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-08 14:52:43
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 22:31:54
 */
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
