<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-06 22:13:18
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-08 19:04:19
 -->
<template>
  <!-- 修改密码组件 -->
  <div>
    <loginheader titleName="修改密码"></loginheader>
    <div class="count">
      <div class="title">请输入旧的密码：</div>
      <input type="text" class="pwd identical" v-model="pwd" placeholder="请输入旧的密码" />
      <div class="title">请输入新的密码：</div>
      <input type="text" class="newPwd identical" v-model="newPwd" placeholder="请输入新的密码" />
      <div class="err" v-if="checkNum">密码相同请重新输入</div>
      <identify class="identify" @xzw="getSteta"></identify>
      <button
        :class="checkNum||!pwd||!newPwd||!identifyValue||state?'errbtn':'btn'"
        :disabled="checkNum||!pwd||!newPwd||!identifyValue||state"
        @click="submit()"
      >提交</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue';
import { Dialog } from 'vant';
Vue.use(Dialog);
import identify from "@/util/Identify";
import loginheader from "@/components/LoginHeader";
export default {
  data() {
    return {
      pwd: "",
      newPwd: "",
      identifyValue: "",
      state: ""
    };
  },
  computed: {
    checkNum() {
      if (this.newPwd) {
        if (this.newPwd === this.pwd) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  },
  components: {
    loginheader,
    identify
  },
  methods: {
    submit() {
      axios.get(
        `/wxl/myapi?type=amend&username=${this.$store.state.user}&oldPwd=${this.pwd}&newPwd=${this.newPwd}`
      ).then(res=>{
        // console.log(res.data);
        if(res.data.code==2){
          Dialog.alert({
            message: '您的旧密码输入错误，验证失败。请输入正确的原密码'
          }).then(() => {
            Dialog.close()
          });
        }
        if(res.data.code==1){
          Dialog.alert({
            message: '密码修改成功，点击确认重新登录'
          }).then(() => {
            localStorage.removeItem('token');
            this.$router.push("/login");
          });
        }
      });
    },
    getSteta(data) {
      this.identifyValue = data.data;
      this.state = data.state;
    }
  }
};
</script>
<style lang="scss" scoped>
.count {
  padding: 0 20px;
  position: relative;
  .title {
    margin-top: 10%;
    font: 16px/24px "微软雅黑";
    margin-bottom: 2%;
  }
  .identical {
    width: 99%;
    border: solid 1px #ccc;
    font: 14px/42px "";
    text-indent: 2%;
  }
  .identify {
    margin-left: -6%;
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
  .errbtn {
    padding: 8px 20px;
    color: white;
    background: rgb(168, 165, 165);
    border: none;
    border-radius: 5px;
    margin-top: 7%;
    width: 100%;
  }
  .err {
    color: red;
    position: absolute;
    bottom: 34%;
    left: 5%;
  }
}
</style>
