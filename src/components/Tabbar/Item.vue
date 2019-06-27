<template>
    <div class="item">
        <span><img src="../../assets/ic_tab_home_normal.png" alt=""></span>
        <span>{{txt }}</span>
    </div> 
</template>

<script>
export default {
    props:["txt"]
}
</script>

<style lang="scss">
    .item{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items: center;
        img{
            width:40px;
            height:40px;
        }
    }

</style>
