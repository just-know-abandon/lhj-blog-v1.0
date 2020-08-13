import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// 全局样式
import '../src/assets/css/css.css'

Vue.config.productionTip = false

// 把axios绑定到vue的原型上
// 调用方式 this.$axios
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
