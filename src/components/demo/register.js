import Vue from 'vue'
import {GridLayout, GridItem} from 'vue-grid-layout'

Vue.component('PageIndexArticle', () => import('./PageIndexArticle'))
Vue.component('GridLayout', GridLayout)
Vue.component('GridItem', GridItem)
Vue.component('SplitPane', () => import('vue-splitpane'))
