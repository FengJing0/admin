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
    },
    {
      title: '图标',
      icon: 'font-awesome',
      children: [
        {
          title: 'FontAwesome',
          icon: 'file-o',
          path: 'icon/list',
          name: 'demo-components-icon-list',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/icon/list.vue')
        },
        {
          title: '图标组件',
          icon: 'file-o',
          path: 'icon/icon',
          name: 'demo-components-icon-icon',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/icon/icon.vue')
        },
        {
          title: 'SVG图标组件',
          icon: 'file-o',
          path: 'icon/svg',
          name: 'demo-components-icon-svg',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/icon/svg.vue')
        },
        {
          title: '图标选择器',
          icon: 'file-o',
          path: 'icon/select',
          name: 'demo-components-icon-select',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/icon/select.vue')
        }
      ]
    },
    {
      title: 'markdown解析',
      icon: 'font',
      children: [
        {
          title: '效果演示',
          icon: 'file-o',
          path: 'markdown/demo',
          name: 'demo-components-markdown-demo',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/markdown/demo.vue')
        },
        {
          title: '文档',
          icon: 'file-o',
          path: 'markdown/doc',
          name: 'demo-components-markdown-doc',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/markdown/doc.vue')
        }
      ]
    },
    {
      title: '数字动画',
      icon: 'magic',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'countup/demo',
          name: 'demo-components-countup-demo',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/countup/demo.vue')
        }
      ]
    },
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        {
          title: '基本示例',
          icon: 'file-o',
          path: 'highlight/demo',
          name: 'demo-components-highlight-demo',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/compenents/highlight/demo.vue')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
