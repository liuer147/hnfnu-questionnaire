import questionType from '../../constant.js/question.type'

export const tableColumns = [
  {
    label: '题目',
    prop: 'text',
  },
  {
    label: '类型',
    prop: 'typeId',
    map: (v) => questionType[v],
  },
]
