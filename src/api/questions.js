import { get, post, deletes } from './base'

const prefix = 'question'

// 查询个人题库
export function getSelfQuestionsByUserId(userId, params) {
  return get(`${prefix}/${userId}/questions`, params).then((res) => {
    return res.data
  })
}

// 删除题目
export function deleteQuestionByid(questionId) {
  return deletes(`/questionnaires/question/${questionId}`).then((res) => {
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
