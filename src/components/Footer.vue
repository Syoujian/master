<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-05 01:52:36
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-07 22:44:56
 -->
<template>
<!-- 页脚组件 -->
    <div>
        <div class="top">
            <span @click="goLogin()">登录</span>
            <span @click="goRegister()">注册</span>
            <span @click="goTop()">回到顶部</span>
        </div>
        <div class="down">
            <p>客服热线:400-108-5518(工作日9:00-18:00)</p>
            <p>Copyright ©2017 京030072</p>
        </div>

    </div>
</template>
<script>
import Vue from 'vue'
import { Dialog } from 'vant'
Vue.use(Dialog)
export default {
  methods: {
    goTop () {
      let t
      clearInterval(t)
      if (document.documentElement.scrollTop > 0) {
        clearInterval(t)
        t = setInterval(() => {
          document.documentElement.scrollTop -= 45
          if (document.documentElement.scrollTop <= 0) {
            clearInterval(t)
          }
        }, 30)
      } else {
        document.documentElement.scrollTop = 0
      }
    },
    goLogin () {
      if (localStorage.getItem('token')) {
        Dialog.alert({
          message: '您已经登录！',
          overlay: true
        }).then(() => {
          Dialog.close()
        })
      } else {
        this.$router.push('/login')
      }
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>
<style scoped lanng="scss">
.top{
    display: flex;
    justify-content: space-around;
    font: 16px/70px "";
    color: #666;
}
.down{
    font-size: 14px;
    height: 50px;
    text-align: center;
    color: #666;
}
</style>
