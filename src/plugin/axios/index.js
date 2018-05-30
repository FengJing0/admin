import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'

axios.interceptors.response.use(res => {
  if (res.data.code !== undefined) {
    if (res.data.code !== 0) {
      Message.error(res.data.msg)
      return Promise.reject(res.data.msg)
    } else {
      return res.data.data
    }
  } else {
    return res.data
  }
}, err => {
  return Promise.reject(err)
})

axios.defaults.baseURL = ''

Vue.prototype.$axios = axios
