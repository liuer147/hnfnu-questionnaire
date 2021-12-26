import {
  getPublicQuestionsList,
  getSelfQuestionsByUserId,
  createNewQuestion,
} from '../../api/questions'

export default {
  namespaced: true,
  state() {
    return {
      selfQuestions: [],
      selfTotal: 0,
      publicQuestions: [],
      publicTotal: 0,
    }
  },
  getters: {
    selfQuestions: (state) => state.selfQuestions,
    selfTotal: (state) => state.selfTotal,
    publicQuestions: (state) => state.publicQuestions,
    publicTotal: (state) => state.publicTotal,
  },
  mutations: {
    setSelfQuestions(state, newList) {
      state.selfQuestions = newList
    },
    setSelfTotal(state, newTotal) {
      state.selfTotal = newTotal
    },
    setPublicQuestions(state, newPQ) {
      state.publicQuestions = newPQ
    },
    setPublicTotal(state, newPT) {
      // $应该将其放到一起，不然容易写错
      state.publicTotal = newPT
    },
  },
  actions: {
    async getSelfQuestions({ commit, rootGetters }, payload) {

      const userId = rootGetters['users/userId']
      const resData = await getSelfQuestionsByUserId(userId, payload)
      // const resData = await axios
      //   .get(
      //     'https://www.fastmock.site/mock/49cfd9c8f915ffd262398b70b32c7911/questionnaire/questions'
      //   )
      //   .then((res) => res.data)
      if (!resData) return false

      const { records, total } = resData
      commit('setSelfQuestions', records)

      commit('setSelfTotal', total)
      return true
    },
    async getPublicQuestions({ commit }, pagination) {
      const resData = await getPublicQuestionsList(pagination)
      if (!resData) return false
      const { records, total } = resData
      commit('setPublicQuestions', records)

      commit('setPublicTotal', total)
      return true
    },
    async createQuestion(store, data) {
      console.log('createSubmit')
      const res = await createNewQuestion(data)
      console.log(res)
    }
  },
}
