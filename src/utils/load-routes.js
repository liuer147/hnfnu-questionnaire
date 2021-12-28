import { Message } from 'element-ui'
import roleRoutesObj from '../config/routes.config'

export default function loadRoutes(router, roleId) {
  const routes = roleRoutesObj[roleId]

  if (!routes || routes.length === 0) {
    Message.warning('路由为空~')
    return
  }

  for (let i = 0; i < routes.length; i++) {
    if (isExist(router, routes[i])) continue
    if (routes[i].type === 2) {
      router.addRoute('Home', routes[i])
    } else {
      router.addRoute(routes[i])
    }
  }
}

function isExist(router, route) {
  const vueRoutes = router.options.routes
  const res = vueRoutes.find((item) => item.path === route.path)
  return !!res
}
