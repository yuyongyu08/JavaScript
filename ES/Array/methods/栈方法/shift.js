/**
 * 删除首个元素
 * 返回：数组长度
 * 改变原数组
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr.shift()); // 1
console.log(arr); //[ 2, 3, 4, 5 ]

Array.prototype.myShift = function(){
    this.splice(0, 1);
    return this.length;
}

console.log(arr.myShift());
console.log(arr);