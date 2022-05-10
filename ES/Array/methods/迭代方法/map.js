/**
 * map(callback(value, item, array), thisArg)
 * 加工数组元素；不改变原数组
*/

let arr = [
  { W: 2, H: 10 },
  { W: 3, H: 20 },
  { W: 4, H: 30 },
];

let obj = {
  getArea(w, h) {
    return w * h
  }
}

console.log(arr.map(item => item.W * item.H));
let newArr = arr.map(item => this.getArea(item.W, item.H), obj); //第二个参数是this
console.log(newArr);

Array.prototype.myMap = function (callback, context) {
  let temp = []
  for (let index = 0; index < this.length; index++) {
    temp.push(callback.call(context, this[index], index, this))
  }
  return temp
}

console.log(arr.myMap(item => item.W * item.H));
console.log(arr.myMap(function (item, index, array) {
  return this.getArea(item.W, item.H)
}, obj));
console.log(arr);
