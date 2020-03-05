/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-05 14:29:41
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 14:47:56
 */
const module = {
  namespaced: true,
  state: {
    isshow: true
  },
  mutations: {
    show (state) {
      state.isshow = true
    },
    hide (state) {
      state.isshow = false
    }
  }
}
export default module
