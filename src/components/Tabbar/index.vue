<template>
    <div class="tabbar">
        <Item txt="首页"></Item>
        <Item txt="书影音"></Item>
        <Item txt="广播"></Item>
        <Item txt="分组"></Item>
        <Item txt="我的"></Item>
    </div>
</template>

<script>
import Item from "./Item"
export default {
    components: {
        Item
    }
}
</script>

<style lang="scss">
    .tabbar{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        background:pink;
        display:flex;
    }

</style>
