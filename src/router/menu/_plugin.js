const meta = { requiresAuth: true }

export const menu = {
  title: '插件',
  path: '/demo/plugins',
  name: 'demo-plugins',
  meta,
  component: () => import('@/components/core/MainLayout/index'),
  redirect: {
    name: 'demo-plugins-index'
  },
  children: [
    {
      path: 'index',
      name: 'demo-plugins-index',
      meta,
      component: () => import('@/pages/demos/plugins/index')
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
          meta,
          component: () => import('@/pages/demos/plugins/mock/demoDTD')
        },
        {
          title: '数据占位符',
          icon: 'file-o',
          path: 'mock/demoDPD',
          name: 'demo-plugins-mock-demoDPD',
          meta,
          component: () => import('@/pages/demos/plugins/mock/demoDPD')
        },
        {
          title: '拦截Ajax请求',
          icon: 'file-o',
          path: 'mock/ajax',
          name: 'demo-plugins-mock-ajax',
          meta,
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
          meta,
          component: () => import('@/pages/demos/plugins/layout/grid')
        },
        {
          title: '可调布局',
          icon: 'file-o',
          path: 'layout/splitpane',
          name: 'demo-plugins-layout-splitpane',
          meta,
          component: () => import('@/pages/demos/plugins/layout/splitpane')
        }
      ]
    },
    {
      title: '多国语',
      icon: 'book',
      children: [
        {
          title: '演示页面 1',
          icon: 'file-o',
          path: 'vue-i18n/demo-1',
          name: 'demo-plugins-vue-i18n-demo-1',
          meta,
          component: () => import('@/pages/demos/plugins/vue-i18n/demo-1')
        },
        {
          title: '使用方法',
          icon: 'file-o',
          path: 'vue-i18n/doc',
          name: 'demo-plugins-vue-i18n-doc',
          meta,
          component: () => import('@/pages/demos/plugins/vue-i18n/doc')
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
          meta,
          component: () => import('@/pages/demos/plugins/import/csv')
        },
        {
          title: '导入xlsx文件',
          icon: 'download',
          path: 'import/xlsx',
          name: 'demo-plugins-import-xlsx',
          meta,
          component: () => import('@/pages/demos/plugins/import/xlsx')
        },
        {
          title: '导出表格',
          icon: 'cloud-download',
          path: 'export/table',
          name: 'demo-plugins-export-table',
          meta,
          component: () => import('@/pages/demos/plugins/export/table')
        },
        {
          title: '导出文本',
          icon: 'cloud-download',
          path: 'export/txt',
          name: 'demo-plugins-export-txt',
          meta,
          component: () => import('@/pages/demos/plugins/export/txt')
        }
      ]
    },
    {
      title: '剪贴板',
      icon: 'clipboard',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'clipboard-polyfill/demo',
          name: 'demo-plugins-clipboard-polyfill-demo',
          meta,
          component: () => import('@/pages/demos/plugins/clipboard-polyfill/demo')
        }
      ]
    },
    {
      title: 'Cookie',
      icon: 'hdd-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'js-cookie/demo',
          name: 'demo-plugins-js-cookie-demo',
          meta,
          component: () => import('@/pages/demos/plugins/js-cookie/demo')
        }
      ]
    },
    {
      title: '时间计算',
      icon: 'clock-o',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'timeago/demo',
          name: 'demo-plugins-timeago-demo',
          meta,
          component: () => import('@/pages/demos/plugins/timeago/demo')
        }
      ]
    },
    {
      title: '多环境发布',
      icon: 'paper-plane',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'build',
          name: 'demo-plugins-build',
          meta,
          component: () => import('@/pages/demos/plugins/build')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
