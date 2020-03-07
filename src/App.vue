<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 11:08:42
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 17:18:15
 -->
<template>
  <div>
    <div v-if="isshow">
      <myheader></myheader>
      <tabber></tabber>
    </div>
    <router-view></router-view>
    <myfooter v-if="isshow"></myfooter>
  </div>
</template>
<script>
import myheader from '@/components/Header'
import tabber from '@/components/Tabber'
import myfooter from '@/components/Footer'
import { mapState } from 'vuex'
export default {
  components: {
    myheader,
    tabber,
    myfooter
  },
  computed: {
    ...mapState('myshow', ['isshow'])
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
a {
  text-decoration: none;
}
*{
  margin: 0;
  padding: 0;
}
</style>
