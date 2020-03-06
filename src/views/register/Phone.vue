<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-05 22:32:08
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-06 11:28:09
 -->
<template>
  <div class="count">
    <div class="box">
      <input type="text" class="phone" v-model="phone" placeholder="输入手机号" />
      <p class="err" v-show="!checkNumber">手机号格式错误</p>
    </div>
    <identify class="identify"></identify>
    <button class="btn">获取验证码</button>
    <span class="tip">如果您已收到短信激活码，请填入短信激活码提交</span>
    <van-form @submit="onSubmit">
      <van-field
      class="key"
        v-model="username"
        name="激活码"
        placeholder="激活码"
        :rules="[{ required: true, message: '请填写激活码' }]"
      />
      <van-field
      class="key"
        v-model="password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请设置密码' }]"
      />
      <div class="msg">
          支持数字、符号、字母、字母区分大小写
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" class="sub">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Vue from 'vue'
import { Field, Form } from 'vant'
import identify from '@/util/Identify'
Vue.use(Field).use(Form)
export default {
  data () {
    return {
      // pattern: /^1[3456789]\d{9}$/,
      phone: '',
      username: '',
      password: ''
    }
  },
  computed: {
    checkNumber () {
    //   console.log(/^1[3456789]\d{9}$/.test(this.phone))
      if (this.phone === '') {
        return true
      } else {
        return /^1[3456789]\d{9}$/.test(this.phone)
      }
    }
  },
  components: {
    identify
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>
<style lang="scss" scoped>
.count {
  margin-top: 5%;
  .box {
    position: relative;
    .phone {
      width: 99%;
      border: solid 1px #ccc;
      font: 14px/42px "";
      text-indent: 2%;
    }
    .err {
      color: red;
      position: absolute;
      left: 0;
      bottom: -23px;
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
  }
  .tip{
    font-size: 13px;
    font-family: "微软雅黑";
    color: #575757;
    display: block;
    text-align: center;
    margin: 7% 0 ;
  }
  .key{
      width: 99%;
      border: solid 1px #ccc;
      font: 14px/20px "";
      text-indent: 2%;
      margin-bottom: 5%;
      border-radius: 5px;
  }

  .msg{
      font: 14px/30px "";
      color: red;
  }
  .sub{
    width: 99%;
    color: white;
    background: rgb(240, 66, 78);
    border: none;
    border-radius: 5px;
  }
}
</style>
