let myArray = ['yuyongyu', 'yongyu', 'yuyy', 'yyy', 'y'];

/**
 * 1.for...
 * 缺点：繁琐
 */
for (let i = 0, length = myArray.length; i < length; i++) {
    console.log('for...', myArray[i]);
}


/**
 * 2.for...in.. 【不推荐！】
 * 缺点：遍历数字键名，会遍历手动添加的其他键，甚至包括原型链上的键
 */
for (let i in myArray){
    console.log('for...in:', myArray[i]);
}


/**
 * 3.for...of...  【推荐】
 *
 */
for (let i of myArray) {
    console.log('for...of:', i);
}


/*
* 4.Object.entries()、Object.keys()、Object.values()
*/

//遍历索引
Object.keys(myArray).forEach(function (value, index, array) {
    console.log('Object.keys:', myArray[value]);
});

//遍历元素
Object.values(myArray).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[索引, 元素]
Object.entries(myArray).forEach(function (value, index, array) {
    console.log('Object.entries:', value[1]);
});


/**
 * 5.forEach
 * 缺点：不可以与break、continue和return配合使用
 */
myArray.forEach(function (value, index, array) {
    console.log('forEach:', value);
});

/*
* 方法6：其他遍历方法
*/
myArray.every((value, index, array) => {
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
















