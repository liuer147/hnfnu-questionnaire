const adminMenu = [
  {
    _id: 1,
    name: '题库管理',
    icon: 'el-icon-s-order',
    path: '/question',
    type: 1,
    children: [
      {
        _id: 101,
        name: '个人题库',
        icon: '',
        path: '/question/self',
        type: 2,
      },
      {
        _id: 102,
        name: '公共题库',
        icon: '',
        path: '/question/public',
        type: 2,
      },
    ],
  },
  {
    _id: 2,
    name: '问卷管理',
    icon: 'el-icon-document',
    path: '/questionnaire',
    type: 2,
  },
]
const teacherMenu = [
  {
    _id: 1,
    name: '题库管理',
    icon: 'el-icon-s-order',
    path: '/question',
    type: 1,
    children: [
      {
        _id: 101,
        name: '个人题库',
        icon: '',
        path: '/question/self',
        type: 2,
      },
    ],
  },
  {
    _id: 2,
    name: '问卷管理',
    icon: 'el-icon-document',
    path: '/questionnaire',
    type: 2,
  },
]

const roleMenuObj = {
  0: adminMenu,
  1: teacherMenu,
  2: teacherMenu,
}

// const roleId = store.state.user?.roleId || 0 // $此处必须是0，因为当前面为0时，会执行到 || 右边

export default roleMenuObj
