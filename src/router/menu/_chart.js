const meta = { requiresAuth: true }

const pagesPath = 'chart/list'

const maker = (title, type, name, icon = 'file-o') => {
  return {
    title,
    icon,
    path: `${type}/${name}`,
    name: `demo-chart-${type}-${name}`,
    meta,
    component: () => import(`@/pages/demos/${pagesPath}/${type}/${name}`)
  }
}

export const menu = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart',
  meta,
  component: () => import('@/components/core/MainLayout'),
  redirect: {
    name: 'demo-chart-index'
  },
  children: [
    {
      path: 'index',
      name: 'demo-chart-index',
      meta,
      component: () => import('@/pages/demos/chart/index')
    },
    (pre => ({
      title: '折线图',
      icon: 'folder-o',
      children: [
        maker('一般', pre, 'demo1'),
        maker('指定指标维度', pre, 'demo2'),
        maker('排序条形图', pre, 'demo3'),
        maker('堆叠条形图', pre, 'demo4'),
        maker('纵轴为连续的数值轴', pre, 'demo5')
      ]
    }))('bar'),
    (pre => ({
      title: '柱状图',
      icon: 'folder-o',
      children: [
        maker('一般', pre, 'demo1'),
        maker('设置显示的指标维度', pre, 'demo2'),
        maker('柱状图+折线图', pre, 'demo3'),
        maker('堆叠柱状图', pre, 'demo4'),
        maker('默认显示柱状图数据', pre, 'demo5'),
        maker('横轴为连续的数值轴', pre, 'demo6')
      ]
    }))('histogram'),
    (pre => ({
      title: '条形图',
      icon: 'folder-o',
      children: [
        maker('一般', pre, 'demo1'),
        maker('横坐标的倾斜', pre, 'demo2'),
        maker('堆叠面积图', pre, 'demo3'),
        maker('显示指标数值', pre, 'demo4'),
        maker('设置别名', pre, 'demo5')
      ]
    }))('line'),
    (pre => ({
      title: '饼图',
      icon: 'folder-o',
      children: [
        maker('一般', pre, 'demo1'),
        maker('设置指标维度', pre, 'demo2'),
        maker('玫瑰图', pre, 'demo3'),
        maker('限制显示条数饼图', pre, 'demo4'),
        maker('多圆饼图', pre, 'demo5'),
        maker('设置饼图半径边距', pre, 'demo6')
      ]
    }))('pie'),
    (pre => ({
      title: '环图',
      icon: 'folder-o',
      children: [
        maker('一般', pre, 'demo1'),
        maker('设置指标维度', pre, 'demo2'),
        maker('玫瑰图', pre, 'demo3'),
        maker('限制显示条数饼图', pre, 'demo4'),
        maker('设置环图半径', pre, 'demo5')
      ]
    }))('ring')
  ]
}

export const router = {
  ...menu,
  children: [].concat(...menu.children.map(e => e.children || e))
}
