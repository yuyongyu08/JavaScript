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
console.log(arr.map(function (item, index, array) {
  return this.getArea(item.W, item.H)
}, obj));
console.log(arr);

Array.prototype.myMap = function (callback, context) {
  let temp = []
  for (let index = 0; index < this.length; index++) {
    temp.push(callback.call(context, this[index], index, this))
  }
  return temp
}

arr = [
  { W: 2, H: 10 },
  { W: 3, H: 20 },
  { W: 4, H: 30 },
];
console.log(arr.myMap(item => item.W * item.H));
console.log(arr.myMap(function (item, index, array) {
  return this.getArea(item.W, item.H)
}, obj));
console.log(arr);
