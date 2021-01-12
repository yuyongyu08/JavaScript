let arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, array) {
  console.log(value);
});

var util = {
  print(...args) {
    console.log(...args);
  }
}

arr.forEach(function (value, index, array) {
  this.print(value, index, array)
}, util);

Array.prototype.myForEach = function (callback, context) {
  for (let index = 0; index < this.length; index++) {
    callback.call(context, this[index], index, this)
  }
}

arr = [1, 2, 3, 4, 5];
arr.myForEach(function (value, index, array) {
  console.log(value);
});

arr.myForEach(function (value, index, array) {
  this.print(value, index, array)
}, util);