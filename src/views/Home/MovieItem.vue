<template>
    <div class="movieitem">
        <div class="img-box">
            <img width="100%" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561739188060&di=3cce7009310cd6f009841ab539a3c875&imgtype=0&src=http%3A%2F%2Fpic37.nipic.com%2F20140113%2F8800276_184927469000_2.png" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <div class="title">急死我</div>
                <div class="count">8256</div>
            </div>
            <div class="info-right">
                <div class="director">杨彪子</div>
                <div class="rating">8</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .movieitem{
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
            .rating{
                padding-top:4px;
                color:orange;
                font-size:16px;
                font-weight:bold;
            }
        }
    }
</style>
