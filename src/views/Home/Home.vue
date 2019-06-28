<template>
    <div class="home">
        <div style="padding-top:60px">
            <Banner></Banner>
            <MovieBox></MovieBox>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
//引入Tabbar组件
import Tabbar from "@/components/Tabbar"    //index可以不写
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
export default {
    components:{
        Tabbar,
        Banner,
        MovieBox
    }
}
</script>

<style lang="scss">
    .home{
        padding-bottom:60px;
    }
</style>
