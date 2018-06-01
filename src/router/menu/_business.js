export const menu = {
  title: '示例界面',
  path: '/demo/business',
  name: 'demo-business',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/components/core/MainLayout/index.vue'),
  redirect: {
    name: 'demo-business-index'
  },
  children: [
    {
      path: 'index',
      name: 'demo-business-index',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/business/index/index.vue')
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
