import Vue from 'vue'
import Router from 'vue-router'
import invisible from './invisible'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...invisible
  ]
})
// console.log()
