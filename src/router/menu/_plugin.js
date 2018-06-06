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
    },
    {
      // mock
      title: '模拟数据',
      icon: 'globe',
      children: [
        {
          title: '数据模板',
          icon: 'file-o',
          path: 'mock/demoDTD',
          name: 'demo-plugins-mock-demoDTD',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/mock/demoDTD.vue')
        },
        {
          title: '数据占位符',
          icon: 'file-o',
          path: 'mock/demoDPD',
          name: 'demo-plugins-mock-demoDPD',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/mock/demoDPD.vue')
        },
        {
          title: '拦截Ajax请求',
          icon: 'file-o',
          path: 'mock/ajax',
          name: 'demo-plugins-mock-ajax',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/mock/ajax.vue')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
