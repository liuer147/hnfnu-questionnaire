import { Message } from 'element-ui'
import routes from '../config/routes.config'

export default function loadRoutes(router) {
  if (!routes || routes.length === 0) {
    Message.warning('路由为空~')
    return
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].type === 2) {
      router.addRoute('Home', routes[i])
    } else {
      router.addRoute(routes[i])
    }
  }
}
