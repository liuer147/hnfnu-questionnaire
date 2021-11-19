import storage from '../../utils/storage'
import { login } from '../../api/users'
import roleMenuObj from '@/config/menu.config'
import { resetRouter } from '@/router'

export default {
  namespaced: true,
  state() {
    return {
      token: storage.getItem('token') || '',
      user: storage.getItem('user') || {},
      menus: storage.getItem('menus') || [],
    }
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
    menus: (state) => state.menus,
    roleId: (state) => state.user.roleId,
    userId: (state) => state.user.userId,
  },
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
    },
    setUser(state, newUser) {
      state.user = newUser
    },
    setMenus(state, newMenu) {
      state.menus = newMenu
    },
  },
  actions: {
    async loginAcc({ commit, dispatch }, data) {
      const loginData = await login(data)
      if (!loginData) return false
      // 更新token
      commit('setToken', loginData.token)
      storage.setItem('token', loginData.token)
      // 更新user
      commit('setUser', loginData.user)
      storage.setItem('user', loginData.user)

      // 更新菜单
      dispatch('loadMenu')
      return true
    },
    logout({ commit }) {
      commit('setToken', '')
      commit('setUser', null)

      resetRouter() // 重置路由
      storage.clearAll()
    },
    loadMenu({ commit, state }) {
      const roleId = state.user.roleId
      const menus = roleMenuObj[roleId]
      commit('setMenus', menus)
      storage.setItem('menus', menus)
    },
  },
}
