export const menu = {
  title: '组件',
  path: '/demo/components',
  name: 'demo-components',
  meta: {
    requiresAuth: true
  },
  component: () => import('@/components/core/MainLayout/index.vue'),
  redirect: {
    name: 'demo-components-index'
  },
  children: [
    // 首页
    {
      path: 'index',
      name: 'demo-components-index',
      meta: {
        requiresAuth: true
      },
      component: () => import('@/pages/demos/compenents/index/index.vue')
    },
    // 页面容器
    {
      title: '页面容器',
      icon: 'window-restore',
      children: [
        {
          title: '文档',
          icon: 'file-o',
          path: 'container',
          name: 'demo-components-container',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/container/index.vue')
        },
        {
          title: '卡片',
          icon: 'file-o',
          path: 'container/normal',
          name: 'demo-components-container-normal',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/container/normal.vue')
        },
        {
          title: '隐形',
          icon: 'file-o',
          path: 'container/ghost',
          name: 'demo-components-container-ghost',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/container/ghost.vue')
        },
        {
          title: '撑满',
          icon: 'file-o',
          path: 'container/card-full',
          name: 'demo-components-container-card-full',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/container/card-full.vue')
        }
      ]
    },
    {
      title: '编辑器',
      icon: 'font',
      children: [
        {
          title: '富文本',
          icon: 'file-o',
          path: 'editor/quill',
          name: 'demo-components-editor-quill',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/editor/quill/demo.vue')
        },
        {
          title: 'markdown',
          icon: 'file-o',
          path: 'editor/markdown',
          name: 'demo-components-editor-markdown',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/editor/markdown/demo.vue')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
