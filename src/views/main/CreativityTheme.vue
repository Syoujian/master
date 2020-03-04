<template>
    <div class="count">
        <mytitle mytitle="创意主题"></mytitle>
        <ul>
            <router-link tag="li" to="" v-for="(data,index) in mylist.tjlist" :key="index">
                <img :src="data.pmpic" >
                <h5>{{data.pmtitle}}</h5>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mytitle from '@/components/Title'
export default {
  components: {
    mytitle
  },
  props: ['mylist']
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
