import '@babel/polyfill'
import 'mutationobserver-shim'

import Vue from 'vue'

import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue-icons'

import './plugins/vue-json-csv'
import './plugins/vue-page-title'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
