# Axios小助手 ***一款基于`Axios`的请求管理工具***

[![npm](https://img.shields.io/npm/v/axiospackaging)](https://www.npmjs.com/package/axiospackaging)


----------


![项目使用图片](https://s2.ax1x.com/2019/08/03/eDKypq.png)


----------


## 介绍
* `axios`的使用体验更加愉快
* 对`请求API`做了统一的管理，方便调用
* `请求相关配置`更加透明化，开放接口供用户配置
* 自由开发相关模块
### 代码对比
GET请求


----------


![此处输入图片的描述][1]


----------
![此处输入图片的描述][2]


----------


## 须知
***注意事项:*** 引入前请先下载本项目的依赖Axios
`npm i axios`或`yarn add axios`

## Installing
Using npm:      
`$ npm i axiospackaging`   
Using yarn:   
`$ yarn add axiospackaging`    
Using cdn:   
`$ 待定,还没时间`

## 使用

### 框架中的使用
Using Vue Import:   
[vue-demo](https://github.com/Ricemonster/Axios-packaging/tree/vue-demo)   

Using React Import: `待定，还未有时间，如果你想帮我测试的话，万分感谢！`

### 本地使用
1.引入
```
import HTTP from 'axiospackaging'
```
2.配置实例
```
// 实例配置
HTTP.instance.defaults.baseURL = 'http://localhost:9000/api'
HTTP.instance.defaults.timeout = 1000
// 实例注册
Vue.prototype.$http = HTTP
```
3.使用请求
```
import api from './request/api' // 引入请求API
····
fetchData: async function () {
  let params = {}
  const res = await this.$http.get(api.请求名,params)
}
····
```

## 请求配置
**全局配置：**
 - `HTTP.instance.defaults.baseURL` 
 - `HTTP.instance.defaults.timeout` 


## API
 get   
 `this.$http.get(url,params)`   
 post   
 `this.$http.post(url,data)`

## Resources

## 使用证书(License)

## 联系作者
QQ: 766140773   
邮箱: 766140773@qq.com


  [1]: https://s2.ax1x.com/2019/08/04/ey0k7Q.png
  [2]: https://s2.ax1x.com/2019/08/04/ey0Ekj.png