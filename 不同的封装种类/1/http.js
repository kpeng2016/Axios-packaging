import axios from 'axios'
import service from './contactApi'
// import {Toast} from 'vant' 根据自己的要求添加消息提示

let instance = axios.create()


const Http = {}; // 包裹请求方法的容器

// 请求格式/参数的统一
for(let key in service){
    let api = service[key]; // url method
    // async 作用：避免进入回调地狱
    Http[key] = async function(
        params, // 请求参数 get：url，put，post，patch（data），delete：url
        isFormData=false,// 标识是否是form-data请求
        config={} // 配置参数
    ){
        let newParams = {}

        //  content-type是否是form-data的判断
        if(params && isFormData){
            newParams = new FormData()
            for(let i in params){
                newParams.append(i,params[i])
            }
        }else{
            newParams = params
        }
        // 不同请求的判断
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
    }
}

export {instance,Http}
