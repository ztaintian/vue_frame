// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '../flexible/flexible.js' // 控制rem
import VueRouter from 'vue-router'
import router from './router'
// import Vuex from 'vuex' 
import store from './store'
/* eslint-disable no-new */
Vue.use(VueRouter)
console.log(store)
// Vue.use(Vuex)
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
