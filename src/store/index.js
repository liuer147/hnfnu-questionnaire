import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import questions from './modules/questions'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    questions,
  },
})
