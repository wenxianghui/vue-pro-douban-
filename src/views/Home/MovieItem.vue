<template>
    <div class="movieitem">
        <div class="img-box">
            <img width="100%" :src="getImages(movie.images.small)" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <div class="title">{{movie.title}}</div>
                <div class="count">{{movie.collect_count}}人评价</div>
            </div>
            <div class="info-right">
                <div class="director">导演：{{movie.directors[0].name}}</div>
                <div class="rating">评分：{{movie.rating.average}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import  getImages from "@/modules/util-getImages"
export default { 
    props:{
        movie:Object
    },
    methods:{
       //getImages
        getImages
    }
}
</script>

<style lang="scss">
    .movieitem{      
        box-shadow:2px 3px 4px #c5bdbd;
        border-radius:5px;
        margin-bottom:20px;
        .img-box{
            height:2.2rem;
            img{
                height:2.2rem;
            }
        }
        .info{
            display:flex;
            justify-content:space-between;
            padding:0 .3rem;
            .title{
                font-size:18px;
                font-weight:bold;
                color:#9d6d6d;
                padding-top:4px;
                padding-bottom:4px;
            }
            .rating,.director{
                padding-top:4px;
                color:orange;
                font-size:16px;
                font-weight:bold;
            }
        }
    }
</style>
