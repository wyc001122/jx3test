import axios from 'axios'
import {
  redirect
} from "@/utils/auth.js"
const qs = require('qs');
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 跨域请求是否需要携带 cookie。前端配置了这个withCredentials=true，后端设置Access-Control-Allow-Origin不能为 " * ",必须是源地址,而且还要设置header(Access-Control-Allow-Credentials: true)
  timeout: 5000 // 请求超时时长
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 请求前....

    if (store.state.token) {
      config.headers.token = store.state.token;
      // 让每个请求都携带token
      // 假如:token字段是['X-Token']
      // config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // 请求失败时...
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.data.code === 10003) {
      redirect();
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

// 请求封装
/**
 * @param {Object} config 配置参数 文档:http://www.axios-js.com/zh-cn/docs/
 * 常用
 * {
 *    url:"", // 请求路径
 *    method:"GET", // 请求方法
 *    params:{id:1,name:'wyc'}, // 请求url的query参数
 *    data:{}, // 设置请求体
 *    responseType:"json", // 响应数据类型,可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 * }
 * @param {Object} params 查询参数
 * qs使用:https://blog.csdn.net/q290057637/article/details/104544757
 */
const request = (config, params) => {
  const methods = ['post', 'put', 'patch'];
  if (methods.includes(config.method)) {
    // 参数放请求体
    config.data = params
  } else {
    // 参数放url
    config.params = params;
    // 序列化
    config.paramsSerializer = (param) => qs.stringify(param, {
      indices: false
    })
  }
  return new Promise((resolve, reject) => {
    service(config).then(res => {
      resolve(res)
    }).catch((error) => {
      reject(error);
    });
  })
}

export default request