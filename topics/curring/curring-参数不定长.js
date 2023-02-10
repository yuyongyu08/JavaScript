function curry(fn){
  let allArgs = [];

  function next(){
    allArgs = allArgs.concat(...arguments)
    return next
  }

  next.toString = next.valueOf = function(){
    return fn(allArgs)
  }

  return next
}

function add(){
  let result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i]
  }

  return result
}

let curryingAdd = curry(add);

console.log(curryingAdd(1));
console.log(curryingAdd(1)(2));
console.log(curryingAdd(1)(2)(3));

