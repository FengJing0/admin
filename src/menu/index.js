// 路由菜单 插件
const demoPlugins = {
  title: '插件',
  path: '/demo/plugins',
  name: 'demo-plugins-index',
  children: (pre => [
    {
      title: '模拟数据',
      icon: 'globe',
      children: [
        { title: '数据模板', icon: 'file-o', name: `${pre}mock-demoDTD` },
        { title: '数据占位符', icon: 'file-o', name: `${pre}mock-demoDPD` },
        { title: '拦截Ajax请求', icon: 'file-o', name: `${pre}mock-ajax` }
      ]
    },
    {
      title: '布局',
      icon: 'object-ungroup',
      children: [
        { title: '可拖动网格布局', icon: 'file-o', name: `${pre}layout-grid` },
        { title: '可调布局', icon: 'file-o', name: `${pre}layout-splitpane` }
      ]
    },
    {
      title: '多国语',
      icon: 'book',
      children: [
        { title: '演示页面 1', icon: 'file-o', name: `${pre}vue-i18n-demo-1` },
        { title: '可调布局', icon: 'file-o', name: `${pre}vue-i18n-doc` }
      ]
    },
    {
      title: '导入和导出',
      icon: 'download',
      children: [
        { title: '导入csv文件', icon: 'download', name: `${pre}import-csv` },
        { title: '导入xlsx文件', icon: 'download', name: `${pre}import-xlsx` },
        { title: '导出表格', icon: 'cloud-download', name: `${pre}export-table` },
        { title: '导出文本', icon: 'cloud-download', name: `${pre}export-txt` }
      ]
    },
    {
      title: '剪贴板',
      icon: 'clipboard',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}polyfill-demo` }
      ]
    },
    {
      title: 'Cookie',
      icon: 'hdd-o',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}js-cookie-demo` }
      ]
    },
    {
      title: '时间计算',
      icon: 'clock-o',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}timeago-demo` }
      ]
    },
    {
      title: '多环境发布',
      icon: 'paper-plane',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}build` }
      ]
    }
  ])('demo-plugins-')
}

// 路由菜单 组件
const demoComponents = {
  title: '组件',
  path: '/demo/components',
  name: 'demo-components-index',
  children: (pre => [
    {
      title: '页面容器',
      icon: 'window-restore',
      children: [
        { title: '文档', icon: 'file-o', name: `${pre}container` },
        { title: '卡片', icon: 'file-o', name: `${pre}container-normal` },
        { title: '隐形', icon: 'file-o', name: `${pre}container-ghost` },
        { title: '撑满', icon: 'file-o', name: `${pre}card-full` }
      ]
    },
    {
      title: '编辑器',
      icon: 'font',
      children: [
        { title: '富文本', icon: 'file-o', name: `${pre}editor-quill` },
        { title: 'markdown', icon: 'file-o', name: `${pre}editor-markdown` }
      ]
    },
    {
      title: '图标',
      icon: 'font-awesome',
      children: [
        { title: 'FontAwesome', icon: 'file-o', name: `${pre}icon-list` },
        { title: '图标组件', icon: 'file-o', name: `${pre}icon-icon` },
        { title: 'SVG图标组件', icon: 'file-o', name: `${pre}icon-svg` },
        { title: '图标选择器', icon: 'file-o', name: `${pre}icon-select` }
      ]
    },
    {
      title: 'markdown解析',
      icon: 'font',
      children: [
        { title: '效果演示', icon: 'file-o', name: `${pre}markdown-demo` },
        { title: '文档', icon: 'file-o', name: `${pre}markdown-doc` }
      ]
    },
    {
      title: '数字动画',
      icon: 'magic',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}countup-demo` }
      ]
    },
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}highlight-demo` }
      ]
    }
  ])('demo-components-')
}

// 路由菜单 图表
const demoCharts = {
  title: '图表',
  path: '/demo/chart',
  name: 'demo-chart-index',
  children: (pre => [
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}highlight-demo` }
      ]
    }
  ])('demo-chart-')
}

// 路由菜单 演示页面
const demoBusiness = {
  title: '示例界面',
  path: '/demo/business',
  name: 'demo-business-index',
  children: (pre => [
    {
      title: '代码高亮',
      icon: 'code',
      children: [
        { title: '基本示例', icon: 'file-o', name: `${pre}highlight-demo` }
      ]
    }
  ])('demo-business-')
}

export const mainMeun = [
  {
    title: '首页',
    name: 'index'
  },
  demoPlugins,
  demoComponents,
  demoCharts,
  demoBusiness
]
