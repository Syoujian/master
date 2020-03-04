/*
 * @说明:
 * @版本: 2.0
 * @姓名: Youmi
 * @Date: 2020-02-21 15:23:45
 * @最后编辑: Youmi
 * @LastEditTime: 2020-02-22 21:59:40
 */
module.exports = {
  devServer: {
    // 设置反向代理
    proxy: {
      // 请求哪个接口的时候才会被服务代理 target里为原网站地址
      '/xzw': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/xzw': ''
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false// 关了eslint检查,可以做到实时更新

}
