[TOC]
### 介绍
```
├── src
│   └── request
│       ├── 具体请求
│       └── http.js
```
其`http.js`依赖具体请求文件，根据 `import servce from ./具体请求 `所以离开具体请求就无法生效。
HTTP中是根据遍历然后判断参数判断请求，然后返回`respones`

```
  let response = {}; // 请求的返回值
        if(api.method === 'put'|| api.method === 'post'||api.method === 'patch'){
            try{
                response =  await instance[api.method](api.url,newParams,config)
            }catch(err){
                response = err
            }
        }else if(api.method === 'delete'|| api.method === 'get'){
            config.params = newParams
            try{
                response =  await instance[api.method](api.url,config)
            }catch(err){
                response = err
            }
        }
        return response; // 返回响应值
```


### 使用
`man.js中引入`
```js
// 引入
import {Http,instance} from './request/http'

// 实例配置
instance.defaults.baseURL = 'http://localhost:9000/api' // 请求地址前缀
instance.defaults.timeout = 1000    // 请求超时参数

// 实例注册
Vue.prototype.$http = Http


```
`在页面中使用`
```js
method:{
	async getList(){
	<!-- 返回的数据被装在res里 -->
		let res = await this.$http.getContactList()
		console.log(res.data)
	}
}

```


### 问题
* 全局配置实例只能配置两个`bashURL`和`timeout`，更多的无法配置
* 其内部的实现无法兼顾所有，比如我设置 `parame:{appkeyid:"1213123"}`,根本无法实现
*  `http`依靠具体请求的遍历实现，根本无法独立为模块
