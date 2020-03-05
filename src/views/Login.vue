<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-05 10:39:36
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 17:01:32
 -->
<template>
  <div>
    <div class="header">
      <i class="iconfont icon-back" @click="Back()"></i>
      <div class="center">
        <i class="iconfont icon-smile"></i>
        <span>登录</span>
      </div>
      <div class="right">
        <i class="iconfont icon-store" @click="goMain()"></i>
        <i class="iconfont icon-account" @click="goMine()"></i>
        <i class="iconfont icon-cart" @click="goShoppingcar()"></i>
      </div>
    </div>
    <van-form @submit="onSubmit" class="form">
      <van-field
        class="username"
        v-model="username"
        name="用户名"
        placeholder="手机号/邮箱/用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        class="pwd"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" class="btn">登录</van-button>
      </div>
    </van-form>
    <div class="register">
        <ul>
            <!-- goRegister 可以写成一个组件传入不同的参数 -->
            <li @click="goRegister(1)">
                <i class="iconfont icon-mobilephone"></i>
                <p>手机注册</p>
            </li>
            <li  @click="goRegister(-1)">
                <i class="iconfont icon-email"></i>
                <p>邮箱注册</p>
            </li>
            <li  @click="findPwd()">
                <i class="iconfont icon-service"></i>
                <p>找回密码</p>
            </li>
        </ul>
    </div>
    <div class="wechat">
         <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf4e9b021c59f5bcd&redirect_uri=http%3A%2F%2Fm.d1.cn%2Fwap%2Fweixinlogin.jsp%3Fbackurl%3Dhttp%3A%2F%2Fm.d1.cn%2Fwap%2Fsearch.html%3Fheadsearchkey%3D%C8%F3%BB%AC%D3%CD&response_type=code&scope=snsapi_userinfo&state=2e9gie34cvkh83eo&connect_redirect=1#wechat_redirect">
         <p>微信快捷登录</p>
         <img src="../../public/img/wechat.png" >
         </a>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import { Form, Field, Button } from 'vant'
Vue.use(Form).use(Field).use(Button)
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    this.hide()
  },
  methods: {
    ...mapMutations('myshow', ['show', 'hide']),
    onSubmit (values) {
      console.log('submit', values)
    },
    goMain () {
      this.$router.push('/main')
    },
    goMine () {
      console.log('去我的页面')
    },
    goShoppingcar () {
      console.log('去购物车页面')
    },
    Back () {
      this.$router.back()
    },
    findPwd () {
      console.log('找回密码')
    },
    goRegister (data) {
      this.$router.push('/register')
    }
  },
  computed: {
    ...mapState('myshow', ['isshow'])
  },
  deactivated () {
    this.show()
  }
}
</script>
<style lang="scss" scoped>
.header {
  padding-right: 3%;
  display: flex;
  justify-content: space-between;
  font: 20px/30px "";
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
.form{
    padding: 30px 20px;
    .username{
        border: solid 1px rgb(83, 83, 83)
    }
    .pwd{
        margin-top: 5%;
        border: solid 1px rgb(83, 83, 83)
    }
    .btn{
        border-radius: 5px;
        background: rgb(240, 66, 78);
        color: white;
        width: 100%;
    }
}
.register{
    ul{
        display: flex;
        justify-content: space-around;
        li{
            text-align: center;
            color: #666;
            i{
                font-size: 26px;
            }
            p{
                font-size: 20px;
            }
        }
    }
}
.wechat{
    width: 100%;
    padding-left: 5%;
    background: rgb(238, 237, 237);
    padding: 5% ;
    a{
        p{
            color: #000;
        }
        img{

        }
    }
}
</style>
