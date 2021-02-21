/*
* reduce(callback(pre, cur, currentIndex, array), initialValue)
*
* 对数组进行归并；
* 不改变原数组
**/

let arr = [
  {
    text: '招商',
    value: 1
  },
  {
    text: '民生',
    value: 2
  },
  {
    text: '建行',
    value: 3
  },
];

console.log(arr.reduce(function (pre, cur, index, array) {
  return (pre.value ? pre.value : pre) + cur.value
})); // 15
console.log(arr.reduce((pre, cur, index, array) => pre + cur.value, 10)); // 15
console.log(arr); // [ 1, 2, 3, 4, 5 ]

//有初试值，则pre为初始值；否则pre为第一个元素，index始终代表当前下标
Array.prototype.myReduce = function (callback, initialValue) {
  let result 
  if(initialValue){
    result = initialValue
  }else{
    result = this.shift()
  }
  this.forEach((item, index, array) => {
    result = callback(result, item, index, array)
  });
  return result;
}

console.log(arr.reduce(function (pre, cur, index, array) {
  return (pre.value ? pre.value : pre) + cur.value
})); // 15
console.log(arr.reduce((pre, cur, index, array) => pre + cur.value, 10)); // 15
console.log(arr); // [ 1, 2, 3, 4, 5 ]


