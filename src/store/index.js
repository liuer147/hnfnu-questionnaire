import Vue from 'vue'
import Vuex from 'vuex'

import storage from '../utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: storage.getItem('token') || '',
  },
  mutations: {},
  actions: {},
  modules: {},
})
