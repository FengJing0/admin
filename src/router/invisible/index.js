export default [
  {
    path: '/demo',
    // component: () => import('@/components/core/MainLayout/index'),
    meta: {requiresAuth: true},
    redirect: {
      name: 'index'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login/index')
  },
  {
    path: '*',
    redirect: {
      name: 'index-notFount'
    }
  }
]
