import Vue from 'vue'
import Router from 'vue-router'

import {
  Auth,
  Timeline
} from '@/modules'

import { Login, Register, ResetPassword } from '../modules/Auth/_components';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '', component: Auth, children: [
      { path: '', name: 'Login', component: Login },
      { path: '/register', name: 'Register', component: Register },
      { path: '/reset_password', name: 'ResetPassword', component: ResetPassword }
    ] },
    { path: '/timeline', name: 'Timeline', component: Timeline },
    { path: '*', redirect: { name: 'Login' } }
  ]
})
