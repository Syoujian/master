<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-05 01:52:36
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 02:29:13
 -->
<template>
<!-- 页脚组件 -->
    <div>
        <div class="top">
            <router-link tag="span" to="" >请登录</router-link>
            <router-link tag="span" to="" >注册</router-link>
            <span @click="goTop()">回到顶部</span>
        </div>
        <div class="down">
            <p>客服热线:400-108-5518(工作日9:00-18:00)</p>
            <p>Copyright ©2017 京030072</p>
        </div>

    </div>
</template>
<script>
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
