<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-05 10:40:01
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-06 13:17:17
 -->
<template>
    <div>
        <loginheader :titleName="isCreate?'手机注册':'邮箱注册'"></loginheader>
        <div class="count">
            <span>温馨提示：如您在电脑上已注册过D1优尚网账号可直接登陆，无需再次注册。点击这里<router-link to="/login" tag="a">直接登录。</router-link>
        </span>
        <myphone v-if="isCreate"></myphone>
        <myemail v-if="!isCreate"></myemail>
         <div class="down">
            <p>==注册会员的好处==</p>
                <p>1、购买商品可享受D1优尚会员优惠资格。</p>
                <p>2、累计购物积分，兑换礼品。</p>
                <p>3、开启收藏夹功能。</p>
        </div>
        </div>

    </div>
</template>
<script>
import loginheader from '@/components/LoginHeader'
import myphone from '@/views/register/Phone'
import myemail from '@/views/register/Email'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
    // this.isCreate =Boolean(this.$route.query.mysteta);
    this.hide()
    // console.log(typeof this.isCreate);
    // console.log(this.isCreate);
  },
  components: {
    loginheader,
    myemail,
    myphone
  },
  methods: {
    ...mapMutations('myshow', ['show', 'hide'])
  },
  computed: {
    ...mapState('myCreate', ['isCreate'])
  },
  deactivated () {
    this.show()
  }
}
</script>
<style lang="scss" scoped>
    .count{
        width: 90%;
        margin-left: 5%;
        span{
            color: red;
            font-size: 14px;
        }
        .down{
            p{
                margin-top: 2%;
                font-size: 14px;
                color: #575757;
                font-family: "微软雅黑";
            }
        }
    }
</style>
