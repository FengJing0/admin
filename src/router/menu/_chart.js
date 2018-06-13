const maker = (title, name) => {
  return {
    title: title,
    icon: 'file-o',
    path: 'demo/' + name,
    name: 'demo-chart-demo' + name,
    meta: {
      requiresAuth: true
    },
    component: () => import(`@/pages/demos/chart/demo/${name}.vue`)
  }
}

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
    },
    {
      title: '单独演示',
      icon: 'bar-chart',
      children: [
        maker('面积图', 'areaBase'),
        maker('条形图', 'barBase'),
        maker('柱形图', 'columnBase'),
        maker('折线图', 'lineBase'),
        maker('阶梯折线图', 'lineStep'),
        maker('南丁格尔玫瑰图', 'nightingaleRoseBase'),
        maker('饼图', 'PieBase'),
        maker('雷达图', 'radarBase')
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
