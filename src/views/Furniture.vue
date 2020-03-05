<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 17:07:50
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-04 17:11:05
 -->
<template>
    <div class="Furniture">
        <div class="daohang">

            <ul>
                <div class="te" @click="handback()">返回</div>
                <li v-for="(item,index) in rcklist" :key="index" @click="handclick(item.rckcode)">{{item.rckname}}</li>
            </ul>
        </div>

        <div class="biaoqianlan">
            <p class="active" @click="handclick2(4)">上架时间</p>
            <p @click="handclick2(3)">销量</p>
            <p @click="handclick2(0)">综合</p>
        </div>

        <div class="list">
            <ul>
                <li v-for="item in products" :key="item.p_gdsid">
                    <img :src="item.p_img" alt="" style="width:;">
                    <div class="you">
                        <p>{{item.p_gdsname}}</p>
                        <p>{{item.p_gdstitle}}</p>
                        <span>{{item.p_msprice}}<i>{{item.p_saleprice}}</i></span>
                    </div>
                </li>
            </ul>
        </div>

<van-pagination
  v-model="currentPage"
  :page-count="12"
  mode="simple"
/>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import Vue from 'vue'
import { Pagination } from 'vant'

Vue.use(Pagination)

export default {
  data () {
    return {
      currentPage: 1
    }
  },
  mounted () {
    this.$store.dispatch('Furnituremodule/getlist')
  },
  computed: {
    ...mapState('Furnituremodule', ['rcklist', 'brandlist', 'pricelist', 'products', 'nowrckcode'])
  },
  methods: {
    handclick (rckcode) {
      this.$store.dispatch('Furnituremodule/getlist', rckcode)
    },
    handclick2 (shuzi) {
      this.$store.dispatch('Furnituremodule/getlist2', shuzi)
    },
    handback () {
      this.$store.dispatch('Furnituremodule/getlist', this.$store.state.Furnituremodule.nowrckcode[0])
    }
  }
}
</script>

<style scoped lang="scss">
    .daohang{
        ul{
             max-height: 160px;
             overflow-y:scroll;
            display:flex;
            flex-wrap:wrap;
            text-align:center;
            border-left:1px solid #dedede;
            border-top:1px solid #dedede;
            border-bottom:1px solid #dedede;
            .te{
                width:33%;
                height:40px;
                border-bottom:1px solid #dedede;
                border-right:1px solid #dedede;
                line-height:40px;
            }
            li{
                width:33%;

                 border-right:1px solid #dedede;
                border-bottom:1px solid #dedede;
                 height:40px;
                 line-height:40px;
            }
        }
    }
    .biaoqianlan{
        .active{
            color:red;
            border-bottom:1px solid red;
        }
        display:flex;
        text-align:center;
        p{
            flex:1;
            line-height:35px;
            border-bottom:1px solid #fff;
        }
    }
    .list{
        ul{
            li{
                margin-bottom:20px;
                display:flex;
                img{
                    width:135px;
                    height:135px;
                }
                .you{
                    width:60%;
                    margin-left:15px;
                    p:nth-child(1){
                        color:#663704;
                        font:14px/18px "";
                        margin-bottom:15px;
                    }
                    p:nth-child(2){
                        color:rgb(240, 66, 78);
                        font:18px/20px "";
                        margin-bottom:5px;
                    }
                    span{
                        color:red;
                        font:17px/20px "";
                        i{
                            color:#9d9d9d;
                            font:12px/20px "";
                            margin-left:20px;
                        }
                    }
                }
            }
        }
    }
</style>
