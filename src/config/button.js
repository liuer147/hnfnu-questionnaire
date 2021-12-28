const buttonData = {
  confirm: { prop: 'confirm', label: '确定' },
  cancel: { prop: 'cancel', label: '取消', type: '' },
  add: { prop: 'add', label: '新增', icon: 'el-icon-plus' },
  delete: { prop: 'delete', label: '删除', icon: 'el-icon-close', type: '' },
}

const textButtonList = {
  edit: { prop: 'edit', label: '编辑' },
  delete: { prop: 'delete', label: '删除' },
}

const formButtonList = [buttonData.confirm, buttonData.cancel]

export default buttonData

export { formButtonList, textButtonList }
