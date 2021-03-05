/**
 * 数组头部增加元素
 * 入参：要追加的数组元素
 * 返回：数组长度
 * 改变原数组
 */

let arr = [1, 2, 3, 4, 5];

console.log(arr.unshift(0)); // 6 返回数组长度
console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]

Array.prototype.myUnshift = function (item) {
    this.splice(0, 0, item);
    return this.length;
}

console.log(arr.myUnshift(-1));
console.log(arr);
