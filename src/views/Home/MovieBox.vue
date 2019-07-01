<template>
    <div class="moviebox" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <div class="loading" v-if="movies.length===0"></div>
        <MovieItem
            v-else
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></MovieItem>
    </div>
</template> 

<script>
import MovieItem from "./MovieItem"
import {Toast} from "mint-ui"
export default {
    props:["type"],
    data(){
        return{
            movies:[],
            loading:false, //开启无限滚动
            limit:6,
            page:1,
            hasMore:true,
        }
    },
    methods:{
        loadMore(){
            if(!this.hasMore){//没有更多数据了
                this.loading = true; //关闭无限滚动
                Toast({
                    message: '我是有底线的...',
                    position:'bottom',
                },1000);
                return false;// 阻止后续代码的请求
            }
            this.getMovies()
        },
        getMovies(){
            let {limit,page} = this;
            this.loading = true;//关闭无限滚动
            let instance = Toast({
                message: '正在加载中...',
                iconClass: 'fa fa-cog fa-spin'
            },-1);
            this.$http.get("/api/db/in_theaters",{
                params:{
                    limit,
                    page
                }
            }).then(res=>{
                instance.close() //数据请求回来了，弹出框需要关闭
                this.loading = false;//数据请求完毕后再去开启无限滚动
                this.movies = this.movies.concat(res.data.object_list);
                if(this.limit * this.page >= res.data.total){
                    this.hasMore = false; //没有更多数据了
                    return false;
                }
                this.page++;
            })
        }
    },
    created(){
        
    },
    components:{
        MovieItem 
    }
}
</script>

<style lang="scss">
    .moviebox{
        margin:0 .14rem;
    }
</style>
