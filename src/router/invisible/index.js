export default [
  {
    path: '/',
    component: () => import('@/components/core/MainLayout/index.vue'),
    redirect: {
      name: 'index'
    },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/pages/core/index/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/core/login/index.vue')
  }
]
