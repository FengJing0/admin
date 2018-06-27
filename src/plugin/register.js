import Vue from 'vue'
import pluginLog from './log'
import pluginImport from './import'
import pluginExport from './export'
// 异步请求库
import './axios'

Vue.use(pluginLog)
Vue.use(pluginImport)
Vue.use(pluginExport)
