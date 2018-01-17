/**
 * Created by yuyongyu on 2018/1/17.
 */


/*
*1.join
@param {string} [separator]
@return {string}
* */
var a = [1, 2, 3];
console.log(a.join());//1,2,3
console.log(a.join(""));//123
console.log(a.join(" "));//1 2 3
console.log(a.join("-"));//1-2-3

var b = new Array(10);
console.log(b.join('-'));// ---------

console.log("1,2,3".split(','));[1,2,3] //join的逆操作


/*
 *2.reverse 改变原数组
 * */
var reverseArr = [1,2,3];
console.log(reverseArr.reverse()); //[ 3, 2, 1 ]
console.log(reverseArr);//[ 3, 2, 1 ]  改变原数组


/*
* 3.sort 改变原数组
* */


var sortArr = ['banana', 'apple', 'cherry'];

console.log(sortArr.sort()); //[ 'apple', 'banana', 'cherry' ] 不传参数默认按字母表顺序
console.log(sortArr); //[ 'apple', 'banana', 'cherry' ] 改变原数组


//传参：比较函数，规则：比较函数返回负数，第一个参数应该在前面；返回正数，第一个参数在后面；返回0，顺序无关紧要
var sortNumberArr = [11, 33, 4, 519];
console.log(sortNumberArr.sort()); //[ 11, 33, 4, 519 ]

console.log(sortNumberArr.sort(function (a, b) {
    return a - b;
}));// [ 4, 11, 33, 519 ]

console.log(sortNumberArr); //[ 4, 11, 33, 519 ]

console.log(sortNumberArr.sort(function (a, b) {
    return b - a;
}));// [ 519, 33, 11, 4 ]

console.log(sortNumberArr);// [ 519, 33, 11, 4 ]

//不区分字母大小写排序

var sortStringArr = ['ant', 'Bug', 'cat', 'Dog'];

sortStringArr.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else {
        return 0
    }
});

console.log(sortStringArr);//[ 'ant', 'Bug', 'cat', 'Dog' ]



/*
* 4.concat() 改变原数组
* */

var concatArr = [1, 2, 3];

console.log(concatArr.concat(4, 5)); // [ 1, 2, 3, 4, 5 ]
console.log(concatArr); // [ 1, 2, 3, 4, 5 ] 改变原数组

console.log(concatArr.concat([4, 5]));// [ 1, 2, 3, 4, 5 ]

console.log(concatArr.concat([4, 5], [6, 7])); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log(concatArr.concat(4, [5, 6, [7, 8]]));// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ] 注意：不会递归偏平化数组的数组，只拆分第一层


/**
 * 5.slice(start, end)  切片 不改变原数组
 * */

        /*index: 0  1  2  3  4  */
var sliceArr = [ 1, 2, 3, 4, 5 ];
       /*index: -5 -4 -3 -2 -1  */

console.log(sliceArr.slice(1, 3)); // [ 2, 3 ] 包含开始位置元素，但*不包含*结束位置元素

console.log(sliceArr); // 不改变原数组

console.log(sliceArr.slice(-1, 2)); // [] 原因：从5向后，从3向前，两者没有交集

console.log(sliceArr.slice(-4, 4)); //[ 2, 3, 4 ]





/**
 * 6.splice(start, end, insertData)  拼接  修改原数组
 * */


         /*index: 0  1  2  3  4  */
var spliceArr = [ 1, 2, 3, 4, 5 ];
        /*index: -5 -4 -3 -2 -1  */

console.log(spliceArr.splice(3)); // [ 4, 5 ] 只传第一个参数，起始位置（包含起始位置）之后的所有元素，用空元素拼接（即什么也不放）

console.log(spliceArr); //[ 1, 2, 3 ] 修改原数组

console.log(spliceArr.splice(1, 2)); // [ 2, 3 ] 第二个参数表示删除到此位置（包含此位置），用空元素拼接（即什么也不放）

console.log(spliceArr); // [ 1 ]

console.log(spliceArr.splice(0, 1, [1,2,3], 'a')); // [1]

console.log(spliceArr); // [ [ 1, 2, 3 ], 'a' ] 从第二个参数之后，表示要被拼接的元素，不递归


/*
* 7.push() 尾部追加 改变数组
* */

var pushArr = [];

console.log(pushArr.push(1)); // 1 返回数组长度

console.log(pushArr); //[ 1 ] 改变数组

console.log(pushArr.push(2, [3, 4, [5]])); // 3 可以传递多个参数

console.log(pushArr); // [ 1, 2, [ 3, 4, [ 5 ] ] ]



/*
* 8.pop()  尾部删除 改变数组
* */

var popArr = [1, 2, 3, 4, 5];

console.log(popArr.pop()); //5 返回被删除的元素

console.log(popArr); // 改变数组


/*
* 9.unshift() 头部插入  修改数组
* */

var unshiftArr = [2, 3, 4];

console.log(unshiftArr.unshift(1)); // 4 返回更新后的数组长度

console.log(unshiftArr); // [ 1, 2, 3, 4 ] 修改原数组

console.log(unshiftArr.unshift('a', ['b', 'c'])); // 6 可以一次性插入多个元素

console.log(unshiftArr); // [ 'a', [ 'b', 'c' ], 1, 2, 3, 4 ] 注意，参数是一次性插入，不是一次一个地插入


/*
* 10.shift
* */

var shiftArr = [1, 2, 3, 4];

console.log(shiftArr.shift()); //1 返回删除的元素

console.log(shiftArr); // [ 2, 3, 4 ] 修改原数组



/*
* 10.toString()/toLocaleString
* */

var toStringArr = [1, 'a' , ['b', 2]];

console.log(toStringArr.toString()); // 1,a,b,2 递归数组，转成字符串，用逗号拼接，与不传参数的join()类似


console.log(toStringArr.toLocaleString()); // 1,a,b,2












