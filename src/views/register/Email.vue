<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-05 22:32:47
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-07 19:23:34
 -->
<template>
<!-- 邮箱注册组件 -->
  <div class="count">
    <div class="box">
      <input type="text" class="email identical" v-model="email" placeholder="输入邮箱地址" />
      <p class="err" v-show="!checkEmail">邮箱格式错误</p>
      <input type="text" class="pwd identical" v-model="pwd" placeholder="请输入密码" />
      <input type="text" class="checkPwd identical" v-model="checkPwd" placeholder="确认密码" />
      <p class="pwderr" v-show="!checkPassword">两次密码不相同请重新输入</p>
      <!-- <p class="pwdErr"></p> -->
    </div>
    <identify class="identify" @xzw="getSteta"></identify>
    <button
      :class="!checkPassword||!checkEmail||state||!email||!pwd||!checkPwd||!identifyValue?'btnerr':'btn'"
      @click="subData()"
      :disabled="!checkPassword||!checkEmail||state||!email||!pwd||!checkPwd||!identifyValue"
    >提交</button>
  </div>
</template>
<script>
import identify from '@/util/Identify'
import axios from 'axios'
import Vue from 'vue'
import { Dialog } from 'vant'
Vue.use(Dialog)
export default {
  data () {
    return {
      // pattern: /^1[3456789]\d{9}$/,
      email: '',
      pwd: '',
      checkPwd: '',
      state: '',
      // 验证码的输入框文本值
      identifyValue: ''
    }
  },
  computed: {
    checkEmail () {
      //   console.log(/^1[3456789]\d{9}$/.test(this.email));
      if (this.email === '') {
        return true
      } else {
        return /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(
          this.email
        )
      }
    },
    checkPassword () {
      if (!this.checkPwd) {
        return true
      } else {
        if (this.checkPwd === this.pwd) {
          return true
        } else {
          return false
        }
      }
    }
  },
  components: {
    identify
  },
  methods: {
    subData () {
      console.log('提交数据')
      axios
        .get(`/wxl/myapi?type=register&username=${this.email}&pwd=${this.pwd}`)
        .then(res => {
          // console.log(1)
          console.log(res.data)
          if (res.data.code === 1) {
            Dialog.confirm({
              title: '恭喜',
              message: '注册成功,点击确定去登录吧'
            })
              .then(() => {
                this.$router.push('/login')
              })
              .catch(() => {
                Dialog.close()
              })
          } else {
            Dialog.alert({
              message: '你的邮箱号已经被注册过啦！'
            }).then(() => {
              Dialog.close()
            })
          }
        })
    },
    getSteta (data) {
      this.state = data.state
      this.identifyValue = data.data
    }
  }
}
</script>
<style lang="scss" scoped>
.count {
  margin-top: 5%;
  .box {
    position: relative;
    .identical {
      width: 99%;
      border: solid 1px #ccc;
      font: 14px/42px "";
      text-indent: 2%;
      margin-top: 10%;
    }
    .pwderr {
      color: red;
      position: absolute;
      left: 0;
      bottom: -10%;
    }
    .err {
      color: red;
      position: absolute;
      left: 0;
      top: 36%;
    }
  }

  .identify {
    margin-top: 10%;
  }
  .btn {
    padding: 8px 20px;
    color: white;
    background: rgb(240, 66, 78);
    border: none;
    border-radius: 5px;
    margin-top: 7%;
    width: 100%;
  }
  .btnerr {
    padding: 8px 20px;
    color: white;
    background: rgb(148, 147, 147);
    border: none;
    border-radius: 5px;
    margin-top: 7%;
    width: 100%;
  }
  .key {
    width: 99%;
    border: solid 1px #ccc;
    font: 14px/20px "";
    text-indent: 2%;
    margin-bottom: 5%;
    border-radius: 5px;
  }

  .msg {
    font: 14px/30px "";
    color: red;
  }
  .sub {
    width: 99%;
    color: white;
    background: rgb(240, 66, 78);
    border: none;
    border-radius: 5px;
  }
}
</style>
