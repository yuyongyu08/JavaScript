/**
 * 返回：数组长度
 * 改变原数组
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr.pop()); // 5
console.log(arr); // [ 1, 2, 3, 4 ]

Array.prototype.myPop = function(){
    this.splice(this.length - 1);
    return this.length;
}

console.log(arr.myPop())
console.log(arr)