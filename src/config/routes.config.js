import store from '../store'

const SelfQuestionBank = () =>
  import(
    /* webpackChunkName: 'selfQuestionBank' */ '@/views/self-question-bank/self-question-bank.vue'
  )
const PublicQuestionBank = () =>
  import(
    /* webpackChunkName: 'publicQuestionBank' */ '@/views/public-question-bank/public-question-bank.vue'
  )
const Questionnaire = () =>
  import(
    /* webpackChunkName: 'questionnaire' */ '@/views/questionnaire/questionnaire.vue'
  )
const adminRoutes = [
  {
    path: '/question/self',
    name: 'self-question-bank',
    component: SelfQuestionBank,
    type: 2,
  },
  {
    path: '/question/public',
    name: 'public-question-bank',
    component: PublicQuestionBank,
    type: 2,
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    component: Questionnaire,
    type: 1,
  },
]

const roleRoutesObj = {
  0: adminRoutes,
  1: adminRoutes,
  2: adminRoutes,
}

const roleId = store.state.user?.roleId || 0 // $此时必须是0, 理由同menu.config.js

export default roleRoutesObj[roleId] || []
