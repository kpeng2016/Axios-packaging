### 介绍
基于三个模块的AXIOS二次封装，核心代码是`http.js`,`api`的调用是在模块里的，自己写，这一次的封装开放度给的很足
### 使用
main.js
```
import HTTP from './request/http'
// 实例配置
HTTP.instance.defaults.baseURL = 'http://localhost:9000/api'
HTTP.instance.defaults.timeout = 1000
// 实例注册
Vue.prototype.$http = HTTP
```
自己调用的API写入
api.js
```js
export default{
    right: '你自己的请求路径'
}
```
页面使用
```
import api from './api'
  methods:{
    fetchData: async function () {
      let params = {}
      const res = await this.$http.get(api.right,params)
    }
  },
.....
```


### 改进

还有很多的东西需要改，也有许多的东西要开放出来，只是做了一个基本的架构