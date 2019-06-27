<template>
  <div id="app">
      <div>
        <router-view> </router-view>
        <Tabbar></Tabbar>
      </div>
  </div>
</template>
<script>
//引入Tabbar组件
import Tabbar from "./components/Tabbar"    //index可以不写
export default {
  components:{
    Tabbar
  }
}
</script>

<style>


</style>

