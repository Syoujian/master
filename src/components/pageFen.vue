<template>
    <van-pagination
        v-model="currentPage"
        :page-count="12"
        @change="handchange()"
        mode="simple"
    />
</template>

<script>
import Vue from 'vue'
import { Pagination } from 'vant'
Vue.use(Pagination)
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    handchange () {
      this.$emit('changePage', this.currentPage)
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="scoped">

</style>
