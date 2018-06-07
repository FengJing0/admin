import Vue from 'vue'

Vue.component('G2AreaBase', () => import('./G2/components/Area/base.vue'))
Vue.component('G2LineBase', () => import('./G2/components/Line/base.vue'))
Vue.component('G2LineStep', () => import('./G2/components/Line/step.vue'))
Vue.component('G2ColumnBase', () => import('./G2/components/Column/base.vue'))
Vue.component('G2BarBase', () => import('./G2/components/Bar/base.vue'))
