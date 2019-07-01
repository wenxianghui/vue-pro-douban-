import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
//加载通用样式  all in js
import "./stylesheets/main.scss"
//引入rem.js
import "./modules/rem"
//引入swiper.min.css样式文件
import "swiper/dist/css/swiper.min.css"

import axios from "axios"
Vue.prototype.$http = axios;   //方便以后在组件中通过 this.$http获取啊axios

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
