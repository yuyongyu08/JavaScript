/**
 * 从自身copy一部分再插入自身
 * @param target 从此位置之后开始插入位置，后面元素顺移
 * @param start 开始截取位置(包含)
 * @param end 截取到的位置(不包含)
 * 不改变原数组
 */

let array = [1, 2, 3, 4, 5];


console.log(array.copyWithin(2, 4)); //[ 1, 2, 5, 4, 5 ]

console.log(array); //[ 1, 2, 5, 4, 5 ]



let array1 = [1, 2, 3, 4, 5];


console.log(array1.copyWithin(2, 3, 4)); //[ 1, 2, 4, 4, 5 ]

console.log(array1); //[ 1, 2, 4, 4, 5 ]