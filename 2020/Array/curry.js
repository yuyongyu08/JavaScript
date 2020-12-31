function add(...args) {
  let init = Object.values(args).reduce((pre, cur) => pre + cur)
  
  function sum(...args) {
    init = Object.values(args).reduce((pre, cur) => pre + cur, init)

    return sum
  }

  sum.toString = () => init

  return sum
}





console.log('执行一次：', add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) === 55)
console.log('执行二次：', add(1)(2))
console.log('执行三次：', add(1, 2)(3)(4) === 10)
console.log('执行四次：', add(1)(2)(3)(4)(5) === 15);
