import Vue from 'vue'

import App from './App.vue'
import Router from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import RecipePage from './recipePage.vue'


Vue.config.productionTip = false

Vue.use(Router)

const router =  new Router({
  routes: [
      {
      path: '/',
      name: 'Recipe',
      component: RecipePage
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app ')