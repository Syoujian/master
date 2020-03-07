<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-07 22:46:54
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 03:27:22
 -->
<template>
  <div>
    <loginHeader titleName="会员中心"></loginHeader>
    <div class="count">
      <div class="top">
        <div class="left">
          <img src="../../public/img/member.jpg" />
        </div>
        <div class="right">
          <p>尊敬的会员：377185344@qq.com</p>
          <p>会员等级：普通会员</p>
          <p>剩余积分：0</p>
        </div>
      </div>
      <div class="iconList">
        <ul>
          <router-link tag="li" to="">
            <img src="http://images.d1.com.cn/wap/2014/01.png" />
            <p>我的订单</p>
          </router-link>
          <router-link tag="li" to="">
            <img src="http://images.d1.com.cn/wap/2014/02.png" />
            <p>我的优惠券</p>
          </router-link>
          <router-link tag="li" to="">
            <img src="http://images.d1.com.cn/wap/2014/04.png" />
            <p>我的积分</p>
          </router-link>
          <li  @click="myexit()">
            <img src="http://images.d1.com.cn/wap/2014/03.png" />
            <p>退出登录</p>
          </li>
          <router-link tag="li" to="">
            <img src="http://images.d1.com.cn/wap/2014/05.png" />
            <p>修改密码</p>
          </router-link>
          <router-link tag="li" to="">
            <img src="http://images.d1.com.cn/wap/2014/06.png" />
            <p>积分商城</p>
          </router-link>
        </ul>
      </div>
    </div>
    <myfooter class="footer"></myfooter>
  </div>
</template>
<script>
import myfooter from '@/components/Footer'
import { mapMutations } from 'vuex'
import Vue from 'vue'
import { Dialog } from 'vant'
import loginHeader from '@/components/LoginHeader'
Vue.use(Dialog)
export default {
  data () {
    return {

    }
  },
  components: {
    loginHeader,
    myfooter
  },
  methods: {
    ...mapMutations('myshow', ['show', 'hide']),
    myexit () {
      Dialog.confirm({
        message: '确定退出登录，回到首页吗？'
      }).then(() => {
        // on confirm
        localStorage.removeItem('token')
        this.$router.push('/index')
      }).catch(() => {
        Dialog.close()
      })
    }
  },
  mounted () {
    this.hide()
    //  axios.get(`/wxl/myapi?type=member&user`)
  },
  deactivated () {
    this.show()
  }
}
</script>
<style lang="scss" scoped>
.count {
  background: rgb(238, 237, 237);
  .top {
    display: flex;
    margin-top: 2%;
    padding-top: 5%;

    .left {
      width: 30%;
      height: 30%;
      margin-left: 3%;
      img {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        border: solid 1px rgb(240, 66, 78);
      }
    }
    .right {
      font: 16px/24px "";
    }
  }
  .iconList {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.33333%;
        margin-top: 3%;
        margin-bottom: 3%;
        img {
          width: 25%;
        }
        p {
          font-size: 12px;
          margin-top: 2%;
        }
      }
    }
  }
}
.footer {
  margin-top: 2%;
  background: rgb(238, 237, 237);
}
</style>
