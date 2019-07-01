<template>
    <div class="home-banner swiper-container">
       <div class="swiper-wrapper">
           <div class="swiper-slide"
                v-for="banner in banners"
                :key="banner.id"    
           >
               <img width="100%" :src="getImages(banner.images.small)" alt="">
           </div>
       </div>
       <div class="swiper-pagination"></div>
    </div>
</template>


<script>
//https://blog.csdn.net/jsyxiaoba/article/details/79628983
import Swiper from "swiper"
import getImages from "@/modules/util-getImages"
export default {
    data(){
        return{
            banners:[]
        }
    },
    methods:{
       //getImages
        getImages/* ( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        } */
    },
    created(){  
        this.$http.get("/api/db/in_theaters?limit=6",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list;
            //数据后续更改  虚拟dom进行对比 Ddiff算法 重新进行真是dom的渲染
            //必须等到因数据改变引发真实dom渲染完毕后，再去进行实例化操作即可
            //this.$nextTick(()=>{})
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination"
                    }
                })  
            })
        })
    }
}
</script>

<style lang="scss">
    .home-banner{
        height:2.2rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .swiper-pagination-bullet-active{
        background:white;
    }
</style>

 