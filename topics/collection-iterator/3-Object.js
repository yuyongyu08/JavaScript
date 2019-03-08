Object.prototype.myObjectCustom = function() {};

let myObject = {
    firstName: 'yu',
    lastName: 'yongyu',
    age: 18
};

/**
 * 方法1：for...in...
 * 遍历key，自有属性+【原型属性】
 */
for (let item in myObject) {
  console.log(item);
}


//报错：【TypeError: myObject is not iterable】
// for (let item of myObject) {
//     console.log(item);
// }


/**
 * 方法2：Object.keys()、Object.values()、Object.entries()
 * 自有属性
 */

//遍历key
Object.keys(myObject).forEach(function (value, index, array) {
    console.log(myObject[value]);
});

//遍历value
Object.values(myObject).forEach(function (value, index, array) {
    console.log(value);
});

//遍历[key, value]
Object.entries(myObject).forEach(function (value, index, array) {
    console.log(value[1]);
});



/*
* Object.getOwnPropertyNames()  遍历所有可枚举属性，不仅仅是自有属性
**/

/**
 * 方法3：Object.getOwnPropertyNames()
 */
Object.getOwnPropertyNames(myObject).forEach(function (value, index, array) {
    console.log(myObject[value]);
});

