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
 * 遍历的是下标
 * 缺点：TODO 遍历数字键名，会遍历手动添加的其他键，甚至包括原型链上的键
 */
myArray.name = 'new'
for (let i in myArray){
    console.log('for...in:', i);
}


/**
 * 3.for...of...  【推荐】
 * 遍历的是元素
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

/*
* 5.keys()，values()，entries() 详见：http://es6.ruanyifeng.com/#docs/iterator#%E8%AE%A1%E7%AE%97%E7%94%9F%E6%88%90%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84
* 返回的都是【Iterator对象】
*/

for (let item of myArray.keys()){
    console.log('Array.keys:', myArray[item]);
}

for (let item of myArray.values()){
    console.log('Array.values:', item);
}

for (let item of myArray.entries()){
    console.log('Array.entries:', item[1]);
}

/**
 * 6.forEach
 * 缺点：不可以与break、continue和return配合使用
 */
myArray.forEach(function (value, index, array) {
    console.log('forEach:', value);
});

/*
* 7：其他遍历方法
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
















