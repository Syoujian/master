<template>
    <div>
        <p class="d1title">D1优尚网</p>
        <ul class="carContent" v-show="this.goods.length">
            <li v-for="(data,index) in this.goods" :key="index" class="carLi">
                <div class="goodsImg">
                    <img :src="data.pimg" alt="">
                </div>
                <div class="goodsText">
                    <p >{{data.pgdsname}}</p>
                    <p class="p2">成交价：{{data.hyprice}}</p>
                    <div class="number">
                        <div>
                            <span @click="handleGoodsreduce()">-</span>
                            <span>{{data.amount}}</span>
                            <span @click="handleGoodsadd()">+</span>
                        </div>
                        <button @click="handleDel(index)">删除</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    // ...mapMutations('detail',['goodsAdd','goodsReduce']),
    handleGoodsreduce () {
      console.log(this.detailList)
    },
    handleGoodsadd () {
      console.log(this.detailList)
    },
    handleDel (index) {
      this.goods.splice(index, 1)
    }
  },
  mounted () {

  },
  computed: {
    ...mapState('detail', ['goods', 'detailList'])
    // ...mapState('car',['goodsNumber'])
  }
}
</script>
<style lang="scss" scoped>
    .d1title{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #ededed;
        text-indent: 20px;
    }
    .carContent{
        width: 100%;
        .carLi{
            padding: 16px;
            // background-color: aqua;
            height: 130px;
            display: flex;
            .goodsImg{
                width: 90px;
                height: 100%;
                // background-color: azure;
                overflow: hidden;
                img{
                    width: 90px;
                }
            }
            .goodsText{
                width: 200px;
                margin-left: 20px;
                font-size: 14px;
                .p2{
                    color: red;
                }
                .number{
                    display: flex;
                    justify-content: space-between;
                    span{
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        border: 1px solid #ccc;
                        line-height: 30px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
