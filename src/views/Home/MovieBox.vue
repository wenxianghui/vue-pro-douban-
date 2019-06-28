<template>
    <div class="moviebox">
        <MovieItem></MovieItem>
    </div>
</template> 

<script>
import MovieItem from "./MovieItem"
export default {
    components:{
        MovieItem 
    }
}
</script>

<style lang="scss">
    .moviebox{
        margin:0 .14rem;
        background:pink
    }
</style>
