
function isType(target, type){
  return typeof target === String.prototype.toLowerCase.call(type)
}

//要求
let a = '111';
console.log(isType(a, 'string') ); //true
console.log(isType(a, 'number')); //false

console.log(isType(a, 'String'));

console.log(isType(null, 'Object'));