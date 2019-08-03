import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
// 引入及相关配置
import HTTP from 'axiospackaging'
// 实例配置
HTTP.instance.defaults.baseURL = 'https://cnodejs.org/api/v1'
HTTP.instance.defaults.timeout = 10000
// 实例注册
Vue.prototype.$http = HTTP





new Vue({
  render: h => h(App),
}).$mount('#app')
