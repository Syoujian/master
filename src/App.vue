<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-04 17:46:58
 -->
<template>
  <div>
    <myheader></myheader>
    <tabber></tabber>
    <router-view></router-view>
  </div>
</template>
<script>
import myheader from '@/components/Header'
import tabber from '@/components/Tabber'
export default {
  components: {
    myheader,
    tabber
  }
}
</script>
<style lang="scss">
html,body{
  height: 100%;
  width: 100%;
}
li{
  list-style: none;
}
*{
  margin: 0;
  padding: 0;
}
</style>
