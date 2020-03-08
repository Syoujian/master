<template>
    <div>
         <!-- 导航栏下的第一层 -->
        <div class="zqnav">
            <ul class="navul" v-show="isAreaShow">
                <li v-for="(data,index) in digitallist.rcklist" :key="index" @click="handleShowClick(data.rckcode)">
                    <span>{{data.rckname}}</span>
                </li>
            </ul>
            <!-- 点击后出现第二层，第一层消失 -->
            <ul class="navul2" v-show="isUlShow">
                <li v-for="(data,index) in digitallist.rcklist" :key="index" @click="handleShowChild(data.rckcode)">
                    <span>{{data.rckname}}</span>
                </li>
            </ul>
        </div>
        <div class="upper">
            <ul >
                <li @click="handleSortClick('4')"><a href="##">上架时间</a></li>
                <li @click="handleSortClick('3')"><a href="##">销量</a></li>
                <li @click="handleSortClick('0')"><a href="##">综合</a></li>
            </ul>
        </div>
        <!-- 商品内容 -->
        <div class="content">
            <ul>
                <li v-for="data in digitallist.products" :key="data.p_gdsid" @click="handleDetail(data.p_gdsid)">
                    <img :src="data.p_img" alt="">
                    <div class="zqtitle">
                        <p>{{data.p_gdsname}}</p>
                        <h6>{{data.p_gdstitle}}</h6>
                        <span>￥{{data.p_msprice}}</span>
                    </div>
                </li>
            </ul>
        </div>

        <van-pagination
            :page-count="12"
            mode="simple"
            />
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Vue from 'vue'
import { Pagination } from 'vant'
Vue.use(Pagination)
export default {
  data () {
    return {
      isAreaShow: true,
      isUlShow: false,
      rckcode: '081',
      number: '4'
    }
  },
  mounted () {
    // this.$store.dispatch('digital/getDigitalAction',this.rckcode)
    this.getDigitalAction(this.rckcode)
  },
  methods: {
    ...mapActions('digital', ['getDigitalAction']),
    ...mapActions('digital', ['getDigitalAction2']),
    // ...mapMutations('digital', ['setDigitallist']),
    handleShowClick (rckcode) {
      // this.$store.dispatch('digital/getDigitalAction',rckcode)
      // console.log(rckcode)
      this.getDigitalAction(rckcode)
      this.isAreaShow = false
      this.isUlShow = true
      // console.log("click",this.digitallist)
    },
    handleShowChild (rckcode) {
      this.getDigitalAction(rckcode)
    },
    handleSortClick (number) {
      this.getDigitalAction2(number)
    },
    handleDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  },
  computed: {
    ...mapState('digital', ['digitallist'])
  }
}
</script>
<style lang="scss" scoped>
    .zqnav {
        width: 100%;
        .navul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            span{
                display: inline-block;
                flex: 1;
                border: 1px solid #ccc;
                padding: 10px;
            }
        }
        .navul2{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            span{
                display: inline-block;
                 padding: 10px;
                 border: 1px solid #ccc;
                 flex: 1;
            }
        }
    }
    .upper{
        width: 100%;
        height: 30px;
        ul{
            width: 100%;
            height: 30px;
            display: flex;
            li{
                width: 33%;
                height: 30px;
                line-height: 30px;
                text-align: center;
                a{
                    color: #000;
                }
                a:hover{
                    color: orange;
                }
            }
        }
    }
    .content{
        width: 100%;
        ul{
            width: 100%;
            li{
                box-sizing: border-box;
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                display: flex;
                img{
                    width: 160px;
                }
                .zqtitle{
                    display: inline-block;
                    p{
                        margin-bottom: 10px;
                        font-size: 12px;
                    }
                    h6{
                        margin-bottom: 10px;
                        color: #f0424e;
                    }
                    span{
                        color: gold;
                    }
                }
            }
        }
    }
</style>
