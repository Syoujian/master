<template>
    <div>
        <router-view></router-view>
        <ul>
            <li v-for="(data,index) in datalist" :key="index">
               <p v-html="data.pcontent">{{data.pcontent}} </p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {

  },
  methods: {

  },
  mounted () {
    axios.get('/ajax/wap/getztlistview.jsp?id=1160&sc=&mid=27889518').then(res => {
      this.datalist = res.data.plist
    })
  }
}
</script>
<style lang="scss">
    img{
        width: 100%;
    }
</style>
