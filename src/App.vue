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
