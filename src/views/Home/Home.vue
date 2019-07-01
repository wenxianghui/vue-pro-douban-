<template>
    <div class="home">
        <div style="padding-top:60px">
            <Banner></Banner>
        </div>
        <div class="navbar">
            <span
                v-for="nav in navs"
                :key="nav.id"
            >{{nav.title}}</span>
        </div>
        <MovieBox></MovieBox>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
//引入Tabbar组件
import Tabbar from "@/components/Tabbar"    //index可以不写
import Banner from "@/components/Banner"
import MovieBox from "./MovieBox"
export default {
    data(){
        return{
            type:"in_theaters",
            navs:[
                {id:1,title:"正在热映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"}
            ]
        }
    },
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
        .navbar{
            position: relative;
            width:100%;
            height:50px;
            background:#fff;
            display:flex;
            justify-content:space-around;
            align-items:center;
            margin-top:10px;
            .active{
                color:orange;
            }
        }
    }
</style>
