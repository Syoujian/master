<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-05 10:39:36
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 02:27:36
 -->
<template>
<!-- 登录组件 -->
  <div>
    <loginheader titleName="登录"></loginheader>
    <van-form @submit="onSubmit" class="form">
      <van-field
        class="username"
        v-model="username"
        name="username"
        placeholder="手机号/邮箱/用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="pwd"
        class="pwd"
        type="password"
        name="pwd"
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
            <li @click="goRegister(state)">
                <i class="iconfont icon-mobilephone"></i>
                <p>手机注册</p>
            </li>
            <li  @click="goRegister(!state)">
                <i class="iconfont icon-email"></i>
                <p>邮箱注册</p>
            </li>
            <li  @click="findPwd()">
                <i class="iconfont icon-service"></i>
                <p>修改密码</p>
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
import { mapMutations } from 'vuex'
import axios from 'axios'
import Vue from 'vue'
import { Form, Field, Button, Dialog } from 'vant'
import loginheader from '@/components/LoginHeader'
Vue.use(Form).use(Field).use(Button).use(Dialog)
export default {
  data () {
    return {
      username: '',
      pwd: '',
      state: true
    }
  },
  mounted () {
    this.hide()
  },
  methods: {
    ...mapMutations('myshow', ['show', 'hide']),
    ...mapMutations('myCreate', ['showCreate', 'hideCreate']),
    onSubmit (values) {
      // console.log('submit', values)
      axios.get(`/wxl/myapi?type=login&username=${values.username}&pwd=${values.pwd}`)
        .then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            Dialog.alert({
              message: '该账号还未注册，点击确认去注册吧！',
              overlay: true
            }).then(() => {
              this.hideCreate()
              this.$router.push('/register')
            })
          }
          if (res.data.code === 1) {
            Dialog.alert({
              message: '登录成功！',
              overlay: true,
              lockScroll: true
            }).then(() => {
              this.$router.push('/index')
              //  在本地localstorage存储令牌记录状态
              // console.log(res.data.username);
              localStorage.setItem('token', JSON.stringify({ isLogin: true }))
            })
          }
          if (res.data.code === 2) {
            Dialog.alert({
              message: '密码错误，请重新输入！',
              overlay: true,
              lockScroll: true
            }).then(() => {
              Dialog.close()
            })
          }
        })
    },

    findPwd () {
      // console.log('找回密码')
      if (localStorage.getItem('token')) {
        this.$router.push('/findpwd')
      } else {
        Dialog.alert({
          message: '您还未登录不能进行此项操作！',
          overlay: true
        }).then(() => {
          Dialog.close()
        })
      }
    },
    goRegister (data) {
      // console.log(data);

      if (data) {
        this.showCreate()
      } else {
        this.hideCreate()
      }
      this.$router.push('/register')
    }
  },
  computed: {

  },
  deactivated () {
    this.show()
  },
  components: {
    loginheader
  }
}
</script>
<style lang="scss" scoped>
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
    padding-left: 5%;
    background: rgb(238, 237, 237);
    padding: 5% ;
    a{
        p{
            color: #000;
        }
        img{
            margin-left: 5%;
        }
    }
}
</style>
