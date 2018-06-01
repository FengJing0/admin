import * as chart from './_chart'
import * as business from './_business'
import * as plugin from './_plugin'
import * as compenents from './_compenents'
import home from './_home'

// 菜单
export const menu = [
  home,
  plugin.menu,
  compenents.menu,
  chart.menu,
  business.menu
]

// 路由
export const router = [
  home,
  plugin.router,
  compenents.router,
  chart.router,
  business.router
]
