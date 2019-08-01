import Vue from 'vue'
import App from './App.vue'
import HTTP from './http'
// 实例配置
HTTP.instance.defaults.baseURL = 'http://localhost:9000/api'
HTTP.instance.defaults.timeout = 1000
// 实例注册
Vue.prototype.$http = HTTP

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')