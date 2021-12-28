import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import _ from 'lodash'

Vue.prototype.$_ = _
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
