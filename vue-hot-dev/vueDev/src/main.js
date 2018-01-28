import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
