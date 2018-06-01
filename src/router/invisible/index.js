export default [
  {
    path: '/demo',
    component: () => import('@/components/core/MainLayout/index.vue'),
    meta: {requiresAuth: true},
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login/index.vue')
  }
]
