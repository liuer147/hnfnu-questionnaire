import Vue from 'vue'
import Vuex from 'vuex'

import storage from '../utils/storage'
import { login } from '../service/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: storage.getItem('token') || '',
    user: storage.getItem('user') || null,
  },
  mutations: {
    setToken(state, newToken) {
      state.token = newToken
    },
    setUser(state, newUser) {
      state.user = newUser
    },
  },
  actions: {
    async loginAcc({ commit }, data) {
      const loginData = await login(data)
      if (!loginData) return false
      // 更新token
      commit('setToken', loginData.token)
      storage.setItem('token', loginData.token)
      // 更新user
      commit('setUser', loginData.user)
      storage.setItem('user', loginData.user)

      return true
    },
  },
  modules: {},
})
