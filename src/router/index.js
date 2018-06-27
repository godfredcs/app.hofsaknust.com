import Vue from 'vue'
import Router from 'vue-router'

import {
  Auth,
  Timeline,
  Posts
} from '@/modules'

// For Auth
import { Login, Register, ResetPassword } from '../modules/Auth/_components';

// For Timeline
import { Trending, Users } from '../modules/Timeline/_components';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '', component: Auth, children: [
      { path: '', name: 'Login', component: Login },
      { path: '/register', name: 'Register', component: Register },
      { path: '/reset_password', name: 'ResetPassword', component: ResetPassword }
    ] },

    { path: '/timeline', component: Timeline, children: [
      { path: '', name: "Timeline", component: Trending },
      { path: 'users', name: 'Timeline-users', component: Users }
    ] },

    { path: '/posts', name: 'Posts', component: Posts},
    { path: '*', redirect: { name: 'Login' } }
  ]
})
