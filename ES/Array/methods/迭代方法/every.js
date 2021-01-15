/**
 * every(callback(value, item, array), thisArg)
 * 所有元素都满足才返回true，否则返回false；不改变原数组
*/
let arr = [1, 2, 3, 4, 5];
let obj = {
  judge: (target, limit) => target > limit,
}

console.log(arr.every(item => item > 0));
console.log(arr.every(function (value, index, array) {
    this.judge(value, 2)
}, obj));

Array.prototype.myEvery = function(callback, context){
  for (let index = 0; index < this.length; index++) {
    if(!callback.call(context, this[index], index, this)) return false;
  }
  return true;
}

console.log(arr.every(item => item > 0));
console.log(arr.every(function (value, index, array) {
    this.judge(value, 2)
}, obj));