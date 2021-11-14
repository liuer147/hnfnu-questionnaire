import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>
  import(/* webpackChunkName: "login" */ '../views/login/login.vue')
const Home = () =>
  import(/* webpackChunkName: "home" */ '../components/home.vue')
const Welcome = () =>
  import(/* webpackChunkName: "welcome" */ '../views/welcome/welcome.vue')
const NotFound = () =>
  import(/* webpackChunkName: "not-found" */ '../views/not-found.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'welcome',
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: Welcome,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
})

export default router
