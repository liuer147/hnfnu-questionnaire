import axios from './config'

export function get(url, params) {
  return axios.get(url, { params })
}

export function post(url, data) {
  return axios.post(url, data)
}

export function deletes(url) {
  return axios.delete(url)
}

export function patch(url, data) {
  return axios.patch(url, data)
}
