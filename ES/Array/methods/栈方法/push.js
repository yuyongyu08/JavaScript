/**
 * 入参：要追加的数组元素
 * 返回：数组长度
 * 改变原数组
 */
let arr = [1, 2, 3, 4, 5];

console.log(arr.push(5.5)); // 6 返回数组长度
console.log(arr); // [ 1, 2, 3, 4, 5, 5.5 ]

let a = [1,2];

console.log(a.push());
console.log(a);

Array.prototype.myPush = function(item){
    this[this.length] = item;
    return this.length
}

console.log(arr.myPush(7)); // 6 返回数组长度
console.log(arr);