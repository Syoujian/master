<template>
    <div>
        <ul>
        <router-link tag="li" activeClass="active" to="/index">首页</router-link>
        <router-link tag="li" activeClass="active" to="/furniture">家居</router-link>
        <router-link tag="li" activeClass="active" to="/digital">数码</router-link>
        <router-link tag="li" activeClass="active" to="/equip">酷装备</router-link>
        <router-link tag="li" activeClass="active" to="/makeup">美妆</router-link>
        <router-link tag="li" activeClass="active" to="/seckill">秒杀</router-link>
        </ul>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped lang="scss">
ul{
    display: flex;
    margin-top: -7px;
    li{
        text-align: center;
        color: white;
        width: 16.666666666666666%;
        background: rgb(240, 66, 78);
        font: 15px/36px "宋体";
    }
    .active{
            border-bottom: solid 2px rgb(158, 50, 50);
        }
}
</style>
