/*const SelfQuestionBank = () =>
  import(
    /!* webpackChunkName: 'selfQuestionBank' *!/ '@/views/self-question-bank/self-question-bank.vue'
  )
const PublicQuestionBank = () =>
  import(
    /!* webpackChunkName: 'publicQuestionBank' *!/ '@/views/public-question-bank/public-question-bank.vue'
  )
const Questionnaire = () =>
  import(
    /* webpackChunkName: 'questionnaire' *!/ '@/views/questionnaire'
  )*/
const QuestionList = () => import(/* webpackChunkName: 'questionList' */ '@/views/questionList')
const QuestionnaireList = () => import(/* webpackChunkName: 'questionnaireList' */ '@/views/questionnaireList')

const adminRoutes = [
  {
    path: '/questionnaireList',
    name: 'QuestionnaireList',
    meta: { title: '问卷记录' },
    component: QuestionnaireList,
    type: 2,
  },
  {
    path: '/questionList',
    name: 'QuestionList',
    meta: { title: '试题记录' },
    component: QuestionList,
    type: 2,
  },
]
const teacherRoutes = [
  {
    path: '/questionnaireList',
    name: 'QuestionnaireList',
    meta: { title: '问卷记录' },
    component: QuestionnaireList,
    type: 2,
  },
  {
    path: '/questionList',
    name: 'QuestionList',
    meta: { title: '试题记录' },
    component: QuestionList,
    type: 2,
  },
]

const roleRoutesObj = {
  0: adminRoutes,
  1: teacherRoutes,
  2: adminRoutes,
}

// const roleId = store.state.user?.roleId || 0 // $此时必须是0, 理由同menu.config.js

export default roleRoutesObj

/*
{
  path: '/question/self',
    name: 'self-question-bank',
  meta: { title: '个人题库' },
  component: SelfQuestionBank,
    type: 2,
},
{
  path: '/question/public',
    name: 'public-question-bank',
  meta: { title: '公共题库' },
  component: PublicQuestionBank,
    type: 2,
},
{
  path: '/questionnaire',
    name: 'questionnaire',
  meta: { title: '问卷' },
  component: Questionnaire,
    type: 1,
}, */
