let myArray = ['yuyongyu', 'yongyu', 'yuyy', 'yyy', 'y'];

/**
 * 方法1：for
 * 遍历索引
 */
for (let i = 0, length = myArray.length; i < length; i++) {
    console.log(myArray[i]);
}


/**
 * 方法2：for...in.. 【不推荐！！！myArray.a = 123，会把a也遍历出来】
 * 遍历索引
 */
for (let i in myArray){
    console.log(myArray[i]);
}


/**
 * 方法3：for...of...
 * 遍历元素
 */
for (let i of myArray) {
    console.log(i);
}



/**
 * 方法4：forEach
 */
myArray.forEach(function (value, index, array) {
    console.log(value);
});


myArray.every((value, index, array) => {
    value += '~';
   console.log('myArray.every:', value);
   return true
});


myArray.some((value, index, array) => {
    console.log('myArray.some:', value);
    return false
});


myArray.filter((value, index, array) => {
    console.log('myArray.filter:', value);
    return false
});


myArray.map((value, index, array) => {
    console.log('myArray.map:', value);
});
















