<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-07 19:37:02
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-09 00:50:05
 -->
<template>
    <div class="count">
        <mytitle mytitle="创意主题"></mytitle>
        <ul>
        <li v-for="(data,index) in mylist.tjlist" :key="index" @click="goDetial(data.pmurl)">
                <img :src="data.pmpic" >
                <h5>{{data.pmtitle}}</h5>
            </li>
        </ul>
    </div>
</template>
<script>

import mytitle from '@/components/Title'

export default {
  data () {
    return {
      text: 'dedetail/'
    }
  },
  components: {
    mytitle
  },
  props: ['mylist'],
  methods: {
    goDetial (data) {
      this.$router.push(`/detail/${data.substring(data.lastIndexOf('=') + 1)}`)
    }
  }
}
</script>
<style scoped lang="scss">
.count{
    background: rgb(238, 237, 237);
    ul{
    margin-top: 3%;
    li{
        width: 100%;
        margin-left: 2%;
        text-align: center;
        img{
            width: 96%;
        }
        h5{
            font:bold 14px/28px "微软雅黑";
        }
    }
}
}

</style>
