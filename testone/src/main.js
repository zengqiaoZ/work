// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// import "bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
import VueJsonp from "vue-jsonp"
import axios from "axios"
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
