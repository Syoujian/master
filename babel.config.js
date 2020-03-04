/*
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-04 20:51:54
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
