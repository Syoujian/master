/*
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-06 12:58:28
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-06 13:28:05
 */
// 根据点击的是 手机还是 邮箱 来显示不同注册页面状态
const module = {
  namespaced: true,
  state: {
    isCreate: true
  },
  mutations: {
    showCreate (state) {
      state.isCreate = true
    },
    hideCreate (state) {
      state.isCreate = false
    }
  }
}
export default module
