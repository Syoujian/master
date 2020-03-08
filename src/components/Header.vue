<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 15:07:54
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-07 19:19:32
 -->
<template>
<!-- 导航头组件 -->
  <div class="count">
    <div class="logo">
      <a href="http://m.d1.cn/wap/index.html">
        <img src="http://images.d1.com.cn/wap/head/d1_logo.png" />
      </a>
    </div>
    <div class="search">
      <button class="iconfont icon-search btn" @click="goSearch()" ></button>
      <input type="text" class="text">
    </div>
    <div class="mine">
      <i class="iconfont icon-account" @click="goMIne()"></i>
      <i class="iconfont icon-cart" @click="goCar()"></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.count {
    margin-top: 10px;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
  .logo {
    a {
      img {
        width: 88px;
        height: 35px;
      }
    }
  }
  .search {
      position: relative;
      margin-left: 5px;
      box-sizing: border-box;
      margin-top: 2px;
      .text{
          height: 25px;
          width: 205px;
      }
      .btn{
          position: absolute;
          right: 0;
          top: 0;
          background: black;
          color: white;
          border: none;
          padding: 5px 10px;
          box-sizing: border-box;
      }
  }
  .mine{
          color: red;
          font-size: 25px;
          i{
            margin-left: 5px;
            font:bold 23px/23px "";

          }
      }
}
</style>
<script>
export default {
  methods: {
    goMIne () {
      console.log('去我的页面')
    },
    goCar () {
      // console.log('去购物车')
      this.$router.push('/car')
    },
    goSearch () {
      console.log('去搜索页')
    }
  }

}
</script>
