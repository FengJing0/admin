export default {
  install: function (Vue) {
    Vue.component('Loading', () => import('./loading'))
  }
}
