/*
 * @说明:
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-02-21 15:23:45
 * @最后编辑: Youmi
 * @LastEditTime: 2020-03-06 21:47:55
 */
module.exports = {
  devServer: {
    // 设置反向代理
    proxy: {
      // 请求哪个接口的时候才会被服务代理 target里为原网站地址
      '/xzw': {
        target: 'http://m.d1.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/xzw': ''
        }
      },
      '/myapi': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false// 关了eslint检查,可以做到实时更新

}
