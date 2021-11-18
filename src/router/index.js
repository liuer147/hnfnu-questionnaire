import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import usePermission from './permission'
import loadRoutes from '../utils/load-routes'
Vue.use(VueRouter)

const Login = () =>
  import(/* webpackChunkName: "login" */ '../views/login/login.vue')
const Home = () =>
  import(/* webpackChunkName: "home" */ '../components/home.vue')
const Welcome = () =>
  import(/* webpackChunkName: "welcome" */ '../views/welcome/welcome.vue')
const NotFound = () =>
  import(/* webpackChunkName: "not-found" */ '../views/not-found.vue')

const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        meta: { title: '欢迎使用' },
        component: Welcome,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: Login,
  },
  {
    path: '*',
    name: 'NotFound',
    meta: { title: '404' },
    component: NotFound,
  },
]

const createRouter = () => {
  return new VueRouter({
    routes: constantRoutes,
  })
}

const router = createRouter()

usePermission(router, store) // 权限控制

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
  console.log(router.matcher)
}

if (
  store.state.token &&
  router.history &&
  router.history.current.fullPath !== '/login'
) {
  loadRoutes(router, store.state.user.roleId) // 加载路由
}

export default router
