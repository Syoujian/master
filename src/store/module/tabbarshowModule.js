const module = {
  namespaced: true, // 命名空间
  state: {
    isTabbarShow: true
  },
  actions: {

  },
  mutations: {
    show (state) {
      state.isTabbarShow = true
    },
    hide (state) {
      state.isTabbarShow = false
    }
  }
}

export default module
