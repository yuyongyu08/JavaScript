/**
 * 始终返回数组；不改变原数组
*/
let arr = [1, 2, 3, 4, 5];

let obj = {
  judge(value, limit) {
    return value > limit
  }
}

console.log(arr.filter(item => item > 3)); //[ 4, 5 ]
console.log(arr.filter(function (item) { 
  return this.judge(item, 3) 
}, obj)); //[ 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]  不改变原数组


Array.prototype.myFilter = function(callback, context){
  let temp = []
  for (let index = 0; index < this.length; index++) {
    if(callback.call(context, this[index], index, this)) temp.push(this[index])
  }
  return temp;
}
arr = [1, 2, 3, 4, 5];

console.log(arr.myFilter(item => item > 3)); //[ 4, 5 ]
console.log(arr.myFilter(function (item) { 
  return this.judge(item, 3) 
}, obj)); //[ 4, 5 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]  不改变原数组