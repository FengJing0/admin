import printJS from 'print-js'

export default {
  install (Vue, options) {
    Vue.prototype.$print = (name, title = '') => {
      if (name === '') {
        console.log('必须输入name')
      } else {
        printJS({
          printable: name,
          header: title,
          headerStyle: 'text-align:center',
          type: 'html',
          scanStyles: false,
          style: '*{text-align:left;}td{border-bottom:1px solid #ebeef5;padding:6px 0}'
        })
      }
    }
  }
}
