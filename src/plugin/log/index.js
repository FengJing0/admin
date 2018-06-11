export default {
  install (Vue, options) {
    Vue.prototype.$log = (arg1 = 'log', ...logs) => {
      if (logs.length === 0) {
        console.log(arg1)
      } else {
        console.group(arg1)
        logs.forEach(e => {
          console.log(e)
        })
        console.groupEnd()
      }
    }
  }
}
