import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import registerElement from './global/element-ui'

Vue.config.productionTip = false

Vue.use(registerElement)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
