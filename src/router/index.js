import Vue from 'vue'
import Router from 'vue-router'
import invisible from './invisible'
import Cookies from 'js-cookie'

import * as menu from './menu'

Vue.use(Router)

let router = new Router({
  // mode: 'history',
  routes: [
    ...menu.router,
    ...invisible
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (Cookies.get('token')) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})

export default router
