import axios from 'axios'
const module = {
  namespaced: true,
  state: {
    rcklist: [],
    brandlist: [],
    pricelist: [],
    products: [],
    nowrckcode: []
  },
  mutations: {
    setlist (state, data) {
      state.rcklist = data.rcklist
      state.brandlist = data.brandlist
      state.pricelist = data.pricelist
      state.products = data.products
    },
    setrckcode (state, setdata) {
      state.nowrckcode.push(setdata)
    }
  },
  actions: {
    getlist (store, rckcode = '012') {
      axios.get(`/ajax/wap/getresult.jsp?pageno=1&productsort=${rckcode}&order=4&psize=48&pprice=&brand=&shopd1=&iftkt=`).then(res => {
        store.commit('setlist', res.data)
        store.commit('setrckcode', rckcode)
      })
    },
    getlist2 (store, shuzi = '4') {
      axios.get(`/ajax/wap/getresult.jsp?pageno=1&productsort=012&order=${shuzi}&psize=48&pprice=&brand=&shopd1=&iftkt=`).then(res => {
        store.commit('setlist', res.data)
      })
    }
  }
}

export default module
