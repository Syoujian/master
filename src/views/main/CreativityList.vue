<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 23:07:39
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 01:50:13
 -->
<template>
<!-- 创意清单组件 -->
    <div class="count">
        <mytitle mytitle="创意清单" ></mytitle>
        <ul>
            <router-link to="" tag="li" v-for="(data,index) in mylist.pmlist" :key="index">
                <img :src="data.pmpic" :alt="data.pmtitle">
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
    overflow: hidden;
    background: rgb(238, 237, 237);
    ul{
    margin-top: 3%;
    display: flex;
    flex: 1;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
        width: 47%;
        img{
           width: 100%;
        }
    }
}
}

</style>
