/* eslint-disable */
export default [
  // 字符串
  {
    title: "占位符演示",
    json: {
      "name": {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
      }
    }
  },
  {
    title: "占位符演示",
    json: {
      "name": {
        'first|1-100': 50,
        'middle|123.1-10': 1,
        last: '@LAST',
        full: '@first @middle @last'
      }
    }
  }
]
