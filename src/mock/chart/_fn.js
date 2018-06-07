export const returnMaker = (data = []) => {
  return {
    code: 0,
    msg: '请求成功',
    data
  }
}

export const r = (add = 0) => {
  return Math.round(Math.random() * 100) + add
}

export const rn = (add = 0) => {
  return Math.random() > 0.5 ? Math.round(Math.random() * 100) + add : -(Math.round(Math.random() * 100) + add)
}

export const addData = (arr, x = 'x', y = 'y') => {
  let last = 0
  const data = arr.map(x => ({
    x: x,
    y: 0
  })).map(e => {
    e.y = last + r()
    last = e.y
    return e
  })
  last = 0
  return returnMaker(data)
}

export const baseData = (arr) => {
  return returnMaker(arr.map(x => ({x, y: r()})))
}
