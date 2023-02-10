function curry(fn){
  let allArgs = [];

  return function next(...args){
    allArgs = allArgs.concat(...args)

    if(fn.length === allArgs.length){
      const result = fn(...allArgs);
      allArgs = []; // 结果计算完后要清空参数容器，避免柯里化后的函数再次调用后受影响
      return result
    }else{
      return next
    }
  }
}


function add(a, b, c){
  return a+ b+c
}
console.log(add(1,2,3))

let curryingAdd = curry(add);
console.log(curryingAdd(1,2,3));
console.log(curryingAdd(1)(2,3));
console.log(curryingAdd(1)(2)(3));
