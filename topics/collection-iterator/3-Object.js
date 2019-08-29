Object.prototype.myObjectCustom = function() {};

let myObject = {
    firstName: 'yu',
    lastName: 'yongyu',
    gender: 'male'
};

/**
 * 1.for...in... 【不推荐】
 * TODO 遍历key，自有属性+原型属性(toString)
 */
for (let item in myObject) {
  console.log('for...in:', myObject[item]);
}


//报错：【TypeError: myObject is not iterable】，原因：http://es6.ruanyifeng.com/#docs/iterator#for---of-%E5%BE%AA%E7%8E%AF
// for (let item of myObject) {
//     console.log(item);
// }


/**
 * 2.Object.keys()、Object.values()、Object.entries()
 * 自有属性
 */

//遍历索引
Object.keys(myObject).forEach(function (value, index, array) {
    console.log('Object.keys:', myObject[value]);
});

//遍历元素
Object.values(myObject).forEach(function (value, index, array) {
    console.log('Object.values:', value);
});

//遍历[索引, 元素]
Object.entries(myObject).forEach(function (value, index, array) {
    console.log('Object.entries:', value[1]);
});

/**
 * 3.Object.getOwnPropertyNames()，TODO 遍历所有可枚举属性，不仅仅是自有属性
 */
Object.getOwnPropertyNames(myObject).forEach(function (value, index, array) {
    console.log('Object.getOwnPropertyNames:', myObject[value]);
});

