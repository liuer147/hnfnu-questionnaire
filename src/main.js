import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'

import registerElement from './plugins/element-ui'

Vue.config.productionTip = false

Vue.use(registerElement)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
