export const formItems = [
  {
    type: 'number',
    field: 'questionId',
    label: 'id',
    placeholder: '请输入题目id',
  },
]

export const rules = {
  questionId: [{ validator: validateId, trigger: 'change' }],
}

function validateId(rule, value, callBack) {
  if (value && typeof value !== 'number') {
    callBack(new Error('id必须为数值'))
  } else {
    callBack()
  }
}
