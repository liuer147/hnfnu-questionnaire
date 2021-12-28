import { textButtonList } from '@/config/button'

const tableButtonList = [
  textButtonList.edit,
  textButtonList.delete,
  { prop: 'start', label: '开始答题' }
]

export const questionnaireListTablePageConfig = {
  tableList: [
    { type: 'index', label: '序号' },
    { prop: 'name', label: '名称' },
    { prop: 'createTime', label: '创建时间' },
    {
      type: 'button',
      buttonList: tableButtonList,
      itemConfig: { width: '140' },
    },
  ], // 表格列项
  searchList: [
    {
      prop: 'id',
      label: '试卷id',
      component: 'input',
      bindConfig: { placeholder: '请输入试卷id' },
    },
    {
      prop: 'name',
      label: '名称',
      component: 'input',
      bindConfig: { placeholder: '请输入名称(模糊搜索)' },
    },
  ],
  searchFormConfig: {
    closeInfoSearch: true,
    mainConfig: {
      isColon: true,
      labelWidth: 'auto',
      style: {
        marginLeft: '50px',
      },
    },
  },
}
