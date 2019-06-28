import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
//加载通用样式  all in js
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
