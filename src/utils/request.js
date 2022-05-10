import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
// import store from '@/store';
import { getToken } from './auth';

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 每次请求，都需要携带x-token的请求头，用来判断服务器session是否过期
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken();
    // }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * 如果要获取http信息（例如标题或状态），请返回响应=>响应
  */
  /**
   * 通过自定义代码确定请求状态
   */
  response => {
    const res = response.data;
    // 响应码不是 200，则表示出错，常规错误是 500
    if (res.code !== 200) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 501 未登录，502 本地token与服务器token不相同
      if (res.code === 501 || res.code === 502) {
        MessageBox.confirm('登录已超时，是否重新登录?', '登录提醒', {
          confirmButtonText: '重新登录',
          type: 'warning'
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.msg || res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.msg || error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

/**
* 核心函数，可通过它处理一切请求数据，并做横向扩展
* @param {url} 请求地址
* @param {params} 请求参数
* @param error 本次是否显示错误
*/
function request(url, params, method) {
  return new Promise((resolve, reject) => {
    let data = {}
    // get请求使用params字段
    if (method === 'get') data = { params }
    // post请求使用data字段
    if (method === 'post') data = { data: params }
    service({
      url,
      method,
      ...data
    }).then((res) => {
      if (res.code === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    }).catch((error) => {
      console.log(error)
      let errorMsg = error.message ? error.message : '请求异常'
      reject(errorMsg);
    }).finally(() => {

    })
  })
}

// 封装GET请求
export function get(url, params) {
  return request(url, params, 'get')
}

// 封装POST请求
export function post(url, params) {
  return request(url, params, 'post')
}