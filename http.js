// 'use strict'
import axios from 'axios'
import qs from 'qs'

// 应该是async处理函数
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})
// -------------------------------------------------暂时上面不用管----------------
// 错误集中
const tips = {
  // 可根据后端定义的错误码,自己添加,也可导出快速添加
  1: '抱歉，出了一个错误',
  1000: '输入参数错误',
  1001: '输入的JSON格式不正确',
  1002: '找不到资源',
  1003: '未知错误',
  1004: '禁止访问',
  1006: '服务器内部错误'
}
// 私有函数
function _show_error(error_code) {
  if (!error_code) {
      error_code = 1
     }
    const tip = tips[error_code]
    // 如果存在返回原有的，如果不存在默认返回‘抱歉出了一个错误’
    return tip?tip:tips[1]
  }


// 集中式的错误处理和成功处理

function checkStatus (response) {
  // 如果不是则返回错误信息
  const errmsg = _show_error(response.status)
  return alert(errmsg)
}


// 核心代码
let instance = axios.create()

export default {
  instance,
  // POST请求
  post (url, data) {
    return instance({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).catch(
      (err) =>{
        return checkStatus(err)
      }
    )
  },
  // GET请求
  get (url, params={}) {
    return instance({
      method: 'get',
      url,
      params,
      headers: {}
    }).then(
      // 检测正确性
      (response) => {
        return response
      }
    ).catch(
      (err) => {
        return checkStatus(err)
    })
  }
}