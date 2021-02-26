// function add(...args) {
//   let init = args.reduce((pre, cur) => pre + cur)

//   function sum(...sumArgs) {
//     init = sumArgs.reduce((pre, cur) => pre + cur, init)
//     return sum
//   }

//   sum.toString = () => init

//   return sum
// }

// console.log('执行一次：', add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log('执行二次：', add(1)(2))
// console.log('执行三次：', add(1, 2)(3)(4))
// console.log('执行四次：', add(1)(2)(3)(4)(5));


var curry = fn =>
  judge = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (arg) => judge(...args, arg)

// function curry(fn) {
//   let calledCount = 1;
//   return function (...args) {
//     calledCount++
//     if (calledCount % 2 == 0) {

//     } else {

//     }
//   }
// }


let add = curry((a, b) => a + b)

console.log('执行一次：', add(1))
console.log('执行二次：', add(1)(2))
console.log('执行三次：', add(1)(2)(3)(4))
console.log('执行四次：', add(1)(2)(3)(4)(5));