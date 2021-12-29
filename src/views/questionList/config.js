import { textButtonList } from '@/config/button'

const tableButtonList = [{ prop: 'preView', label: '预览' }, textButtonList.edit, textButtonList.delete]

function typeFormatter(row) {
  const mapObj = {
    0: '单选题',
    1: '多选题',
    2: '判断题',
  }
  return mapObj[row.type]
}

export const questionListTablePageConfig = {
  tableList: [
    { type: 'index', label: '序号' },
    { prop: 'type', label: '题型', bindConfig: { formatter: typeFormatter } },
    { prop: 'text', label: '题干' },
    { prop: 'createTime', label: '创建时间' },
    {
      type: 'button',
      buttonList: tableButtonList,
      itemConfig: { width: '140' },
    },
  ], // 表格列项
  searchList: [
    {
      prop: 'type',
      label: '题型',
      component: 'input',
      bindConfig: { placeholder: '请输入题型' },
    },
    {
      prop: 'text',
      label: '题干',
      component: 'input',
      bindConfig: { placeholder: '请输入题干(模糊搜索)' },
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
// setTimeout(() => {
//   if (this.pageData.pageNum === 1) {
//     this.tableData = [
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '0',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '2',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '0',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//     ]
//   } else {
//     this.tableData = [
//       {
//         type: '0',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//       {
//         type: '1',
//         text: '我是这个题目的题干',
//         createTime: '2021-12-28 10:11:35',
//       },
//     ]
//   }
//   this.pageData.total = 22
// }, 0)
