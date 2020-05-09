import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import router from './routes'
import VueAxios from 'vue-axios'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter, axios)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

window.eventHub = new Vue()

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
