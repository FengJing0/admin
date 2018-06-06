import Mock from 'mockjs'
export default {
  data () {
    return {
      regexp: {
        title: '正则表达式',
        code: `{
  "regexp1": /[a-z][A-Z][0-9]/,
  "regexp2": /\\w\\W\\s\\S\\d\\D/,
  "regexp3": /\\d{5,10}/,
  "regexp4": /[\\u4e00-\\u9fa5]{6}/
}`,
        json: {
          'regexp1': /[a-z][A-Z][0-9]/,
          'regexp2': /\w\W\s\S\d\D/,
          'regexp3': /\d{5,10}/,
          'regexp4': /[\u4e00-\u9fa5]{6}/
        },
        mocked: ''
      }
    }
  },
  methods: {
    regexpMock () {
      this.regexp.mocked = JSON.stringify(Mock.mock(this.regexp.json), null, 2)
    }
  }
}
