import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.config.performance = true
console.log('Env ' + process.env.NODE_ENV)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
