import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false


Vue.use(MintUI)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
