
module.exports = {
  devServer: {
    // 设置反向代理
    proxy: {
      // 请求哪个接口的时候才会被服务代理 target里为原网站地址
      '/ajax': {
        target: 'http://m.d1.cn',
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
