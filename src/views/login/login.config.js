export const formItems = [
  {
    type: 'text',
    field: 'userId',
    label: '学号',
    placeholder: '请输入学号',
  },
  {
    type: 'password',
    field: 'password',
    label: '密码',
    placeholder: '请输入密码',
  },
]

export const rules = {
  userId: [
    { required: true, trigger: 'blur', message: '请输入学号' },
    { max: 20, message: '长度在20个字符以内' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { max: 40, message: '长度在40个字符以内' },
  ],
}
