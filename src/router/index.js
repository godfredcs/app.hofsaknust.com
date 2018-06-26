import Vue from 'vue'
import Router from 'vue-router'

import {
  Home,
  Login,
  Register,
  Timeline
} from '@/modules'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/timeline', name: 'Timeline', component: Timeline },
    { path: '*', redirect: { name: 'Home' } }
  ]
})
