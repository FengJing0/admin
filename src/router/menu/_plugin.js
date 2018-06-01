export const menu = {
  title: '插件',
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/components/core/MainLayout/index.vue'),
  redirect: {
    name: 'demo-plugins-index'
  },
  children: [
    {
      path: 'index',
      name: 'demo-plugins-index',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/plugins/index/index.vue')
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
