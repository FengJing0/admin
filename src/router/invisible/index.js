export default [
  {
    path: '/login',
    name: 'login',
    // component: resolve => { require(['@/pages/core/login/index.vue'], resolve) }
    component: () => import('@/pages/core/login/index.vue')
  }
]
