import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuex from "vuex"
import router from './router'
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
