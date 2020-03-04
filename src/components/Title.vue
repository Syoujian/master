<!--
 * @说明:
 * @版本: 2.0
 * @姓名: Ashely
 * @Date: 2020-03-04 23:39:37
 * @最后编辑: Ashely
 * @LastEditTime: 2020-03-05 01:42:58
 -->
<template>
<!-- 标题组件 -->
    <div>
        <h4>{{mytitle}}</h4>
    </div>
</template>
<script>
export default {
  props: ['mytitle']
}
</script>
<style scoped lang="scss">
h4{
    margin-left: 3%;
    width: 95%;
    display: block;
    font: 16px/36px "宋体";
    border-left: solid 2px #f0424e;
    padding-left: 3%;
    color: rgb(116, 115, 115);
    background: white;
}
</style>
