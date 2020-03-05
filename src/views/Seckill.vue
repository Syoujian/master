<template>
    <div>
        <ul>
            <li v-for="data in datalist1" :key="data.pmtitle">
               <img :src="data.pmpic" alt="" @click="handleShop()">
            </li>
        </ul>
        <ul>
            <li v-for="data in datalist2" :key="data.pmtitle">
               <img :src="data.pmpic" alt="" @click="handleShop()">
            </li>
        </ul>
        <ul>
            <li v-for="data in datalist3" :key="data.pmtitle">
               <img :src="data.pmpic" alt="" @click="handleShop()">
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
    axios.get('/ajax/wap/getpagespg.jsp?id=3934&page=1').then(res => {
      this.datalist1 = res.data.pics
    })
    axios.get('/ajax/wap/getpagespg.jsp?id=3934&page=2').then(res => {
      this.datalist2 = res.data.pics
    })
    axios.get('/ajax/wap/getpagespg.jsp?id=3934&page=5').then(res => {
      this.datalist3 = res.data.pics
    })
  }
}
</script>
<style lang="scss">
    img{
        width: 100%;
    }
</style>
