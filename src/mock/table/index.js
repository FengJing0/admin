import Mock from 'mockjs'

Mock.mock('/api/table', {
  'data|3-6': [{
    'id|+1': 1,
    'name': '@CNAME',
    'creatDate': '@DATE',
    'address': '@CITY',
    'zip': '@ZIP'
  }]
})
