<template>
    <div>
        <loginheader titleName="详情页"></loginheader>
        <div class="swiper">
            <swiper :key="this.detailList.gimgitems.length">
                <div class="swiper-slide" v-for="(data,index) in this.detailList.gimgitems" :key="index">
                    <img :src="data.gimgitem" alt="">
                </div>
            </swiper>
        </div>

        <div class="text">
            <p>{{this.detailList.pgdsname}}</p>
            <p class="p2">{{this.detailList.pgdsename}}</p>
            <p class="p2">{{this.detailList.shoptxt}}</p>
            <p class="p3">{{this.detailList.pgdstitle}}</p>
            <div class="seckill">
                <div class="price">
                    <p>秒杀价：</p>
                </div>
                <div class="market">
                    <span>{{this.detailList.hyprice}}</span>
                    <p>市场价：{{this.detailList.saleprice}}</p>
                </div>
                <div class="Discount">
                    <p><span>折扣：5.6折</span></p>
                </div>
            </div>
            <p class="number">
                商品数量：<span class="dreduce" @click="handledreduce()">-</span>
                <span id="dnum">{{this.dnumber}}</span>
                <span class="dadd" @click="handledadd()">+</span>
            </p>
            <div class="lasttime">
                <p>倒计时：{{}}恢复原价</p>
            </div>
            <div class="choice">
                <span>选择规格：</span>
                    <a v-for="(data,index) in this.detailList.gdssku" :key="index">{{data.skuname}}</a>
            </div>
            <div class="evaluate">
                <p>
                    商品评价：
                </p>
                <div v-for="(data,index) in this.detailList.coms" :key="index">
                    {{data.ctxt}}
                </div>
            </div>
        </div>

        <div class="img">
            <p>{{this.detailList.pgdstitle}}</p>
            <li v-for="(data,index) in this.detailList.gimgitems" :key="index">
                <img :src="data.gimgitem" alt="">
            </li>
        </div>

        <div class="shopping">
            <div class="like">收藏商品</div>
            <div class="goshopping">加入购物车</div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import swiper from '@/components/Zqswiper'
import loginheader from '@/components/LoginHeader'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('detail', ['getDetailAction']),
    ...mapMutations('detail', ['hide', 'add', 'reduce']),
    handleBack () {
      this.$router.back()
    },
    handledreduce () {
      if (this.dnumber > 0) {
        this.reduce()
      }
    },
    handledadd () {
      // console.log("+")
      this.add()
    }

  },
  beforeMount () {
    this.getDetailAction(this.$router.history.current.params.zq)
  },
  mounted () {
    // this.getDetailAction(this.$router.history.current.params.zq)
    // this.hide()

  },
  computed: {
    ...mapState('detail', ['detailList', 'isTabbarShow', 'dnumber'])
  },
  destroyed () {
    // this.show()
  },
  components: {
    swiper,
    loginheader
  }
}
</script>
<style lang="scss" scoped>
    header {
        background-color: yellow;
    }
    .swiper{
        width: 80%;
        margin: 0 auto;
        // background-color: red;
        img{
            width: 100%;
        }
    }
    .text{
        .number{
            width: 100%;
            height: 30px;
            line-height: 30px;
            span{
                width: 30px;
                height: 30px;
                display: inline-block;
                background-color: #f1f1f1;
                text-align: center;
                border: 1px solid #ccc;
            }
        }
        .p2{
            font-size: 14px;
            color: rgb(114, 112, 112);
        }
        .p3{
            color: red;
        }
        .seckill{
            width: 100%;
            background-color: #db372e;
            margin-top: 10px;
            height: 80px;
            display: flex;
            .price{
                width: 80px;
                height: 80px;
                margin-left: 15px;
                background-color: #be1623;
                p{
                    width: 100%;
                    height: 100%;
                    line-height: 80px;
                    color: #fff;
                    text-align: center;
                }
            }
            .market{
                width: 100px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                span{
                    font-size: 28px;
                    color: #fff;
                }
                p{
                    color: #fff;
                }
            }
            .Discount{
                width: 150px;
                height: 100%;
                p{
                    height: 100%;
                    width: 100%;
                    line-height: 80px;
                    text-align: center;
                    span{
                        background-color: orange;
                        color: #fff;
                    }
                }
            }
        }
        .lasttime{
            background-color: #ededed;
            width: 100%;
            height: 80px;
            p{
                width: 100%;
                height: 100%;
                line-height: 80px;
                text-align: center;
            }
        }
        .choice{
            width: 100%;
            height: 80px;
            a{
                width: 100px;
                height: 40px;
                line-height: 40px;
                border: 1px solid #ccc;
                border-radius: 5px;
                margin-right: 10px;
            }
        }

    }
    .shopping{
        height: 50px;
        width: 100%;
        background-color: #ccc;
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        div{
            width: 150px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 5px;
            text-align: center;
            line-height: 30px;
        }
        .like{
            background-color: yellow;
        }
        .goshopping{
            background-color: red;
        }
    }
</style>
