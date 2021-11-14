import axios from 'axios'
import store from '../../store'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000

axios.interceptors.request.use((req) => {
  const token = store.state.token

  req.headers['token'] = token

  return req
})

axios.interceptors.response.use((res) => {
  const data = res.data

  return data
})

export default axios
