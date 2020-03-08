<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 22:28:54
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-09 00:53:53
 -->
<template>
<!-- 导航小图标组件 -->
  <div>
    <ul>
      <router-link tag="li" v-for="(data,index) in dataList" :key="index" :to="data.path">
        <img :src="data.add" />
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        //   add 为图片地址  path 为路由地址 后期再改
        {
          add: 'http://images.d1.com.cn/wap/2015/03/menu201503_01_2.jpg',
          path: '/member'
        },
        {
          add: 'http://images.d1.com.cn/wap/2015/03/menu201503_02_2.jpg',
          path: '/shoppingcar'
        },
        {
          add: 'http://images.d1.com.cn/wap/2015/03/menu201503_03_2.jpg',
          path: '/integral'
        },
        {
          add: 'http://images.d1.com.cn/wap/2015/03/menu201503_04_2.jpg',
          path: 'discounts'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
ul {
    margin: 5px 0;
  width: 100%;
  display: flex;
  flex: 1;
  li {
    width: 25%;
    img {
      width: 100%;
    }
  }
}
</style>
