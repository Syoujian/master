<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 17:02:19
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 01:54:27
 -->
<template>
    <div class="outermost">
        <van-swipe class="my-swipe count" :autoplay="3000" indicator-color="blue">
        <van-swipe-item v-for="(data,index) in list.lblist" :key="index" class="box">
          <img :src="data.pmpic" >
        </van-swipe-item>
</van-swipe>
      <maplist></maplist>
      <creativity :mylist="list"></creativity>
      <theme :mylist="list"></theme>
      <myfooter></myfooter>
    </div>
</template>
<style lang="scss" scoped>
.outermost{
  background: rgb(238, 237, 237);
  .count{
  margin-top: 1%;
  .box{
  img{
    width: 100%;
  }
}
}
}

</style>
<script>
// vant 轮播组件
import Vue from 'vue'
import axios from 'axios'
import maplist from '@/views/main/MapList'
import theme from '@/views/main/CreativityTheme'
import creativity from '@/views/main/CreativityList'
import myfooter from '@/views/main/Footer'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data () {
    return {
      list: {}
    }
  },
  mounted () {
    axios.get('/xzw/ajax/wap/getzttm2016.jsp').then(res => {
      console.log(res.data)
      this.list = res.data
    })
  },
  components: {
    maplist,
    theme,
    creativity,
    myfooter
  }
}
</script>
