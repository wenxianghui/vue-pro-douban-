<template>
    <div class="tabbar">
        <!-- <Item txt="首页" mark="home" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png"/>
        </Item>
        <Item txt="书影音" mark="audio" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png"/>
        </Item>
        <Item txt="广播" mark="broadcast" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png"/>
        </Item>
        <Item txt="分组" mark="group" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png"/>
        </Item>
        <Item txt="我的" mark="mine" :sel="selected" @changeSelected="changeSelected">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png"/>
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png"/>
        </Item> -->
        <Item
            v-for="item in footer"
            :key="item.id"
            :txt="item.txt"
            :mark="item.mark"
            :sel="selected"
        >
             <img slot="normalImg" :src="item.normalImg"/>
            <img slot="activeImg" :src="item.activeImg"/>
        </Item>
    </div>
</template>
 
<script>
import Item from "./Item"
export default {
    data(){
        return{
            selected:this.$route.name,   //注意是route
            footer:[
                {id:1,txt:"首页",mark:"home",activeImg:require("../../assets/ic_tab_home_active.png"),normalImg:require("../../assets/ic_tab_home_normal.png")},
                {id:2,txt:"书影音",mark:"audio",activeImg:require("../../assets/ic_tab_audio_active.png"),normalImg:require("../../assets/ic_tab_audio_normal.png")},
                {id:3,txt:"广播",mark:"broadcast",activeImg:require("../../assets/ic_tab_broadcast_active.png"),normalImg:require("../../assets/ic_tab_broadcast_normal.png")},
                {id:4,txt:"分组",mark:"group",activeImg:require("../../assets/ic_tab_group_active.png"),normalImg:require("../../assets/ic_tab_group_normal.png")},
                {id:5,txt:"我的",mark:"mine",activeImg:require("../../assets/ic_tab_mine_active.png"),normalImg:require("../../assets/ic_tab_mine_normal.png")}
            ]
        }
    },
    methods:{
        changeSelected(val){  //相当于改selected
            this.selected = val; 
        }
    },
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
        background:#fff;
        width:100%;
        height:60px;
        display:flex;
        border-top:1px solid #e1dcdc;

    }

</style>
