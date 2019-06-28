<template>
    <div class="class">
        <Banner></Banner>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
//引入Tabbar组件
import Tabbar from "@/components/Tabbar"    //index可以不写
import Banner from "@/components/Banner"
export default {
    components:{
        Tabbar,
        Banner
    }
}
</script>

<style>

</style>
