import qs from 'qs'
import axios from 'axios'
import NProgress from 'nprogress/nprogress'
import 'nprogress/nprogress.css'
let instance = axios.create()
instance.defaults.transformRequest = [function (data) {
  return qs.stringify(data)
}]

// 拦截器，拦截发送和接收
instance.interceptors.request.use(
  config => {
    NProgress.start()
    // console.log('request,init')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  response => {
    NProgress.done()
    // console.log('response,init')
    return response
  },
  error => {
    NProgress.done()
    return Promise.reject(error.response.data)
  }
)

instance.defaults.timeout = 2000

export default instance
