const defaultTitle = '一师问卷'
const whiteList = ['/login', '/questionnaire']

function getTitle(route) {
  const title = route.meta.title
  if (title) {
    return `${title} / ${defaultTitle}`
  } else {
    return defaultTitle
  }
}

function usePermission(router, store) {
  router.beforeEach((to, from, next) => {
    document.title = getTitle(to) // 修改网页title

    const token = store.getters.token // 获取token

    if (token) {
      // 有token
      if (to.fullPath === '/login') {
        // 有token表示已经登录，若是再返回登录界面，则重定向到首页
        next('/')
      } else {
        next()
      }
    } else {
      // 没有token 则表示没有登录
      if (whiteList.indexOf(to.fullPath) >= 0) {
        // 判断将要进入的页面是否是在白名单内，如果在白名单内
        next()
      } else {
        // 如果不再白名单内
        next('/login') // 则重定向到登录界面
      }
    }
  })
}

export default usePermission
