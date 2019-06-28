<template>
  <div id="app">
      <router-view></router-view>
      <AppHeader></AppHeader>
  </div>
</template>
<script>
import AppHeader from "@/components/Header"
export default {
  components:{
    AppHeader
  }
}
</script>
<style>


</style>

