import axios from 'axios'
import { Message } from 'element-ui'

import store from '../../store'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000

axios.interceptors.request.use((req) => {
  const token = store.state.token

  req.headers['token'] = token

  return req
})

axios.interceptors.response.use(
  (res) => {
    const data = res.data
    return data
  },
  (error) => {
    // console.log(error.response)
    // timeout of 10ms exceeded
    // ECONNABORTED econnaborted
    if (
      error.code === 'ECONNABORTED' &&
      error.message === `timeout of ${error.config.timeout}ms exceeded`
    ) {
      Message.error('网络超时~')
      return error
    }
    return Promise.reject(error)
  }
)

export default axios
