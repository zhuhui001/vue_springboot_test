import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'//导入自定义路由配置

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router//配置路由
}).$mount('#app')
