import store from '../store'

const roleId = store.state.user?.roleId || 0 // 必须是0

const roleObj = {
  0: '管理',
  1: '教师',
  2: '学生',
}

export default roleObj[roleId]
