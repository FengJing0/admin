export default {
  title: '首页',
  path: '/',
  name: '',
  component: () => import('@/components/core/MainLayout/index.vue'),
  meta: { requiresAuth: true },
  redirect: {
    name: 'index'
  },
  children: [
    {
      path: 'index',
      name: 'index',
      meta: { requiresAuth: true },
      component: () => import('@/pages/core/index/index.vue')
    }
  ]
}
