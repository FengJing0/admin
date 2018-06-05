export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/components/core/MainLayout/index.vue'),
  redirect: {
    name: 'demo-chart-index'
  },
  children: [
    {
      path: 'index',
      name: 'demo-chart-index',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/chart/index/index.vue')
    },
    {
      title: '所有',
      icon: 'th',
      path: 'all',
      name: 'demo-chart-all',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/chart/all/index.vue')
    },
    {
      title: '动态尺寸',
      icon: 'refresh',
      path: 'dynamicSize',
      name: 'demo-chart-dynamicSize',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/chart/dynamicSize/index.vue')
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
