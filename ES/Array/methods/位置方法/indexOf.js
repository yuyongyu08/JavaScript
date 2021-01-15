/**
 * indexOf(searchElement, fromIndex)
 * 元素第一个索引；不改变原数组
 * 
*/
let arr = [1, 5, 2, 3, 4, 5];

console.log(arr.indexOf(5)); // 1
console.log(arr.indexOf(6)); // -1
console.log(arr.indexOf(5, 3)); // 5


Array.prototype.myIndexOf = function(searchElement, fromIndex){
  for (let index = fromIndex || 0; index < this.length; index++) {
    if(searchElement === this[index]) return index
  }
  return -1
}

console.log(arr.myIndexOf(5)); // 1
console.log(arr.myIndexOf(6)); // 1
console.log(arr.myIndexOf(5, 3)); // 5


// searchElement适用于简单类型，不适用引用类型
arr = [{c: 1}, {c: 2}]; // 对象数组
console.log(arr.indexOf({c: 1})); // -1