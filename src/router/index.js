import Vue from 'vue'
import Router from 'vue-router'
import invisible from './invisible'

import * as menu from './menu'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    ...menu.router,
    ...invisible
  ]
})

export default router
