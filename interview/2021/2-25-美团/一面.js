/**
 * 输入：'RGB(0, 10, 255)'
 * 输出：'#000AFF'
 * 提示：十进制转16进制用toString(16)
 * */ 

function formatColor(color) {


}



Array.prototype.flat = function (depth = 1) {
   if (depth > 0) {
      return this.reduce((a, b) => a.concat(Array.isArray(b) ? b.flat(depth - 1) : b), [])
   } else {
      return this
   }
} 
// 实现一个 flat 方法，可以根据传入的层级展开对应深度的数组嵌套：
var arr1 = [1, 2, [3, 4], [5, 6]];
console.log(arr1.flat());// [1, 2, 3, 4, 5, 6]    

var arr2 = [1, 2, [3, 4, [5, 6]], [7, 8]];
console.log(arr2.flat(1));// [1, 2, 3, 4, [5, 6], 7, 8]

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


