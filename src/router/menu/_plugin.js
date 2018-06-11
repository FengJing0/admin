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
          component: () => import('@/pages/demos/plugins/mock/ajax')
        }
      ]
    },
    {
      title: '布局',
      icon: 'object-ungroup',
      children: [
        {
          title: '可拖动网格布局',
          icon: 'file-o',
          path: 'layout/grid',
          name: 'demo-plugins-layout-grid',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/layout/grid')
        },
        {
          title: '可调布局',
          icon: 'file-o',
          path: 'layout/splitpane',
          name: 'demo-plugins-layout-splitpane',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/layout/splitpane')
        }
      ]
    },
    {
      title: '导入和导出',
      icon: 'download',
      children: [
        {
          title: '导入csv文件',
          icon: 'download',
          path: 'import/csv',
          name: 'demo-plugins-import-csv',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/import/csv')
        },
        {
          title: '导入xlsx文件',
          icon: 'download',
          path: 'import/xlsx',
          name: 'demo-plugins-import-xlsx',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/import/xlsx')
        },
        {
          title: '导出表格',
          icon: 'cloud-download',
          path: 'export/table',
          name: 'demo-plugins-export-table',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/export/table')
        },
        {
          title: '导出文本',
          icon: 'cloud-download',
          path: 'export/txt',
          name: 'demo-plugins-export-txt',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/plugins/export/txt')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
