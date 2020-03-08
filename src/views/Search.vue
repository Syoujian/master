<template>
  <div>
    <div class="query">
       <van-search
          v-model="mytext"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
        <!-- 商品布局 -->
        <div>

            <ul v-if="goodsList.length">
                <li v-for="data in goodsList" :key="data.p_gdsid">
                  <!-- a标签 链接到 商品详情页 -->
                    <!-- 商品详情页地址+p_gdsid -->
                    <a href="">
                        <img :src="data.p_img" alt="">
                        <div class="goods">
                            <p>{{data.p_gdsname}}</p>
                            <h3>{{data.p_gdstitle}} </h3>
                            <span>￥{{data.p_msprice}}</span>
                            <s>￥{{data.p_saleprice}}</s>
                        </div>
                    </a>
                </li>
            </ul>
            <div v-else>
                没用匹配到商品
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
import Vue from 'vue'
import { Search, Cell } from 'vant'
Vue.use(Cell).use(Search)
export default {
  data () {
    return {
      mytext: '',
      goodsList: []
    }
  },
  methods: {
    ...mapMutations('myshow', ['hide', 'show']),
    onSearch () {
      axios.get(`/wzq/ajax/wap/getsearch.jsp?headsearchkey=${this.mytext}&key_wds=&pageno=1&rackcode=&order=&psize=12`).then(res => {
        console.log(res.data.products)
        this.goodsList = res.data.products
      })
    },
    onCancel () {
      this.$router.back()
    }
  },
  mounted () {
    this.hide()
  },
  computed: {
    searchDataList () {
      return this.goodsList.filter(item => item.name.includes(this.mytext) || item.name.toUpperCase().includes(this.mytext) ||
        item.name.toLowerCase().includes(this.mytext))
    }

  },
  destroyed () {
    this.show()
  }
}
</script>
<style lang="scss" scoped>
    li{
        border-bottom: 1px solid #cccccc;
        padding: 10px 6px 0 6px;

        position: relative;

        a{
            display: flex;
            justify-content: space-between;
            img{
            width: 136px;
            height: 136px;
            }
            .goods{
                width: 203px;
                p{
                    margin: 5px 0 0;
                    color: #663704;
                    font: 14px "微软雅黑";
                }
                h3{
                    margin: 8px 0 0;
                    color: rgb(237, 61, 0);
                    font: 18px "微软雅黑";
                }
                span{
                    color: #ed3d00;
                    font: 17px "微软雅黑";
                }
                s{
                    color: #9D9D9D;
                    font: 12px "微软雅黑";
                }
            }
        }

    }
</style>
