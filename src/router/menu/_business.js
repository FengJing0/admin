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
      component: () => import('@/pages/demos/business/index/')
    },
    {
      title: '用户中心',
      icon: 'user',
      children: [
        {
          title: '个人中心首页',
          icon: 'file-o',
          path: 'user-center/home',
          name: 'demo-business-user-center-home',
          meta: {
            requiresAuth: true
          },
          component: () => import('@/pages/demos/business/user-center/home/')
        }
      ]
    }
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
