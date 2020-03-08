<template>
    <div>
        <ul>
            <li v-for="data in datalist1" :key="data.pmtitle">
              <!-- a标签 链接到 商品详情页 -->
              <a href=""><img :src="data.pmpic" alt="" @click="handleShop()"></a>

            </li>
        </ul>
        <ul>
            <li v-for="data in datalist2" :key="data.pmtitle">
              <!-- a标签 链接到 商品详情页 -->
              <a href=""><img :src="data.pmpic" alt="" @click="handleShop()"></a>

            </li>
        </ul>
        <ul>
            <li v-for="data in datalist3" :key="data.pmtitle">
              <!-- a标签 链接到 商品详情页 -->
              <a href=""><img :src="data.pmpic" alt="" @click="handleShop()"></a>

            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist1: [],
      datalist2: [],
      datalist3: []
    }
  },

  mounted () {
    axios.get('/wzq/ajax/wap/getpagespg.jsp?id=3934&page=1').then(res => {
      this.datalist1 = res.data.pics
    })
    axios.get('/wzq/ajax/wap/getpagespg.jsp?id=3934&page=2').then(res => {
      this.datalist2 = res.data.pics
    })
    axios.get('/wzq/ajax/wap/getpagespg.jsp?id=3934&page=5').then(res => {
      this.datalist3 = res.data.pics
    })
  }
}
</script>
<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>
