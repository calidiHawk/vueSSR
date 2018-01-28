import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.component('modal', {
  template: '#modal-template',
  props: ['show'],
  methods: {
    savePost: function () {

      this.$emit('close');
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
