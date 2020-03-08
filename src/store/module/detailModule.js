import http from '@/util/http'
const module = {
  namespaced: true,
  state: {
    isTabbarShow: true,
    detailList: [],
    dnumber: 1
  },
  mutations: {
    show (state) {
      state.isTabbarShow = false
    },
    hide (state) {
      state.isTabbarShow = false
    },
    setDetailList (state, data) {
      state.detailList = data
      // console.log(1)
      // console.log(state.detailList)
    },
    add (state) {
      return state.dnumber++
    },
    reduce (state) {
      return state.dnumber--
    }
  },
  actions: {
    getDetailAction (store, id) {
      http.get(`/ajax/wap/getgdsinfo.jsp?id=${id}&tj=`).then(res => {
        store.commit('setDetailList', res.data)
        // console.log(res.data)
      })
    }
  },
  getters: {

  }
}
export default module
