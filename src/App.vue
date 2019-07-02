<template>
  <div id="app">
      <router-view></router-view>
      <AppHeader></AppHeader>
      hello world
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

