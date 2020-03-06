<!--
 * @说明:
 * @版本: 2.0
 * @姓名: As hely
 * @Date: 2020-03-06 01:02:40
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-07 01:59:29
 -->
<template>
<!-- 验证码组件 -->
    <div class="count">
        <div class="box">
            <input type="text" placeholder="请输入验证码" v-model="myNum" @change="checkNum()">
            <p v-show="isErr" class="err">验证码错误</p>
            <span class="Num">{{Num}}</span>
            <span @click="randomStr()" class="btn">刷新</span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      Num: '4F6c',
      myNum: '',
      isErr: false
    }
  },
  methods: {
    random (max, min) {
      return Math.round(Math.random() * (max - min) + min)
    },
    randomStr () {
      // 创建一个空字符，用于存放随机数/字母
      var strData = ''
      // 生成随机字符库 (验证码四位，随机数三种，取公倍数12,所以循环4次。也可以是120次，1200次。)
      for (var i = 0; i < 4; i++) {
        var num = this.random(0, 9)// 生成0-9的随机数
        var az = String.fromCharCode(this.random(97, 122))// 生成a-z
        var AZ = String.fromCharCode(this.random(65, 90))// 生成A-Z
        strData = strData + num + az + AZ// 将生成的字符进行字符串拼接
      }
      // 开始真正的随机(从随机字符库中随机取出四个)
      var str = ''
      for (let i = 0; i < 4; i++) {
        str += strData[this.random(0, strData.length - 1)]
      }
      console.log(str)
      this.Num = str
    },
    checkNum () {
      if (this.myNum) {
        if (!(this.myNum === this.Num)) {
          this.isErr = true
          this.randomStr()
        } else {
          this.isErr = false
        }
      } else {
        this.isErr = false
      }
      this.$emit('xzw', this.isErr)
    }

  }
}
</script>
<style lang="scss" scoped>
.count{
    .box{
    position: relative;
    .err{
        position: absolute;
        left: 0;
        bottom: -20px;
        color: red;
    }
    input{
    width: 60%;
    border: solid 1px #ccc;
    font: 14px/42px "";
    text-indent: 2%;
}
    .Num{
    margin:0 3%;
    padding: 10px;
    background: #666;
    color: white;
    border-radius: 5px;
}
    }

}

</style>
