let myArray = ['yuyongyu', 'yongyu', 'yuyy', 'yyy', 'y'];

/**
 * 方法1：for
 * 遍历索引
 */
for (let i = 0, length = myArray.length; i < length; i++) {
    console.log(myArray[i]);
}


/**
 * 方法2：for...in..
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
 * 方法4：Object.keys()、Object.values()、Object.entries()
 */

//遍历索引
Object.keys(myArray).forEach(function (value, index, array) {
    console.log(myArray[value]);
});

//遍历元素
Object.values(myArray).forEach(function (value, index, array) {
    console.log(value);
});

//遍历[索引, 元素]
Object.entries(myArray).forEach(function (value, index, array) {
    console.log(value[1]);
});


/**
 * 方法5：forEach
 */
myArray.forEach(function (value, index, array) {
    console.log(value);
});