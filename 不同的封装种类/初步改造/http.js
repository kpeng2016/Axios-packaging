'use strict'
import axios from 'axios'
import qs from 'qs'


axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

// 成功
function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

// 错误，多重检查并返回可以做 tips
function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  // 检测是否有data且是否有成功且为true
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  return res
}







// 改的代码



// let ap = {
//   get (url, params={}) {
//     return instance({
//       method: 'get',
//       // baseURL: 'http://localhost:9000/api',
//       url,
//       params, // get 请求时带的参数
//       // timeout: 10000,
//       headers: {}
//     })
    
//     .then(
//       (response) => {
//         return checkStatus(response)
//       }
//       // 多重检测执行完后，res到checkCode里再次检查，回复各种错误检查
//     ).then(
//       (res) => {
//         return checkCode(res)
//       }
//     )
//   }
// }

// export {instance,ap}
let instance = axios.create()
// 核心代码
export default {
  instance,
  // instance ({bashUrl,Timeout}){
  //   return axios.create({
  //     baseURL: bashUrl,
  //     timeout: Timeout
  //   })
  // },
  // post请求方法
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: 'http://localhost:9000/api',
      url,
      data: qs.stringify(data),
      // timeout: 1000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest',
      //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  // get请求方法
  get (url, params={}) {
    return instance({
      method: 'get',
      // baseURL: 'http://localhost:9000/api',
      url,
      params, // get 请求时带的参数
      // timeout: 10000,
      headers: {}
    })
    
    .then(
      (response) => {
        return checkStatus(response)
      }
      // 多重检测执行完后，res到checkCode里再次检查，回复各种错误检查
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}