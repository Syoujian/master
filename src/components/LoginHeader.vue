<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-05 20:54:17
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 23:18:54
 -->
<template>
<!--登录注册标题部分 -->
    <div>
        <div class="header">
      <i class="iconfont icon-back" @click="Back()"></i>
      <div class="center">
        <i class="iconfont icon-smile"></i>
        <span>{{titleName}}</span>
      </div>
      <div class="right">
        <i class="iconfont icon-store" @click="goMain()"></i>
        <i class="iconfont icon-account" @click="goMine()"></i>
        <i class="iconfont icon-cart" @click="goShoppingcar()"></i>
      </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
    .header {
  padding-right: 3%;
  display: flex;
  justify-content: space-between;
  font: 20px/40px "";
  background: rgb(238, 237, 237);
  i {
    color: rgb(143, 142, 142);
    font-size: 20px;
  }
  .center {
    box-sizing: border-box;
    margin-left: 10%;
  }
  .right {
    box-sizing: border-box;
    i {
      margin-right: 5%;
    }
  }
}
</style>
<script>
export default {
  methods: {
    goMain () {
      this.$router.push('/main')
    },
    goMine () {
      // console.log('去我的页面')
      this.$router.push('/member')
    },
    goShoppingcar () {
      console.log('去购物车页面')
    },
    Back () {
      this.$router.back()
    }
  },
  props: ['titleName']
}
</script>
