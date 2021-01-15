/**
 * some(callback(value, item, array), thisArg)
 * 只要有一个满足就停止遍历并返回true；不改变原数组
*/
let arr = [1, 2, 3, 4, 5];
let obj = {
  judge: (target, limit) => target > limit,
}

console.log(arr.some((value, index, array) => value > 3)); // true
console.log(arr.some(function (value, index, array) {
  return this.judge(value, 3)
}, obj))

Array.prototype.mySome = function(callback, context){
  for (let index = 0; index < this.length; index++) {
    if(callback.call(context, this[index], index, this)) return true;
  }
  return false;
}

console.log(arr.mySome((value, index, array) => value > 5));
console.log(arr.mySome(function (value, index, array) {
  return this.judge(value, 3)
}, obj))
