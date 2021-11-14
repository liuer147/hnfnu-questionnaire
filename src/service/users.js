import { post } from './base'

const prefix = 'users'

export function login(data) {
  return post(prefix + '/login', data)
}
