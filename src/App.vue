<template>
  <div id="app">
      <div>
        <router-view> </router-view>
        <AppHeader></AppHeader>
      </div>
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

