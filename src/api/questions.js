import { get, post } from './base'

const prefix = 'question'

export function getSelfQuestionsByUserId(userId, params) {
  return get(`${prefix}/${userId}/questions`, params).then((res) => {
    return res.data
  })
}

export function getPublicQuestionsList(params) {
  return get(`${prefix}/questions`, params).then((res) => {
    return res.data
  })
}

export function createNewQuestion(data) {
  return post(prefix, data)
}
