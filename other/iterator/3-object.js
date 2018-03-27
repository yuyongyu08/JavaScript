Object.prototype.objCustom = function() {};

let obj = {
    firstName: 'yu',
    lastName: 'yongyu',
    age: 18,
    work:{
        title: 'programmer',
        date: ['一', '二', '三', '四', '五']
    },
    house: null,
    car: undefined
};



/*
* 方法1：for...in...   遍历**可枚举的**属性
* 遍历对象的key
**/
console.log('*********for...in...*********');
for (var item in obj) {
    if(!obj.hasOwnProperty(item) || typeof obj[item] === 'function') continue; //跳过继承属性和方法
    console.log(item, ': ', obj[item]);
}

/*
* Object.keys(obj) 遍历可枚举的自有属性
**/
console.log('*********obj.keys()*********');
console.log(Object.keys(obj)); //[ 'firstName', 'lastName', 'age', 'work', 'house', 'car' ]
for (var i = 0, keys = Object.keys(obj), len = keys.length; i < len; i++) {
    console.log(keys[i], ': ', obj[keys[i]]);
}

/*
* Object.getOwnPropertyNames(obj)  遍历所有可枚举属性，不仅仅是自有属性
**/
console.log('*********obj.keys()*********');
console.log(Object.getOwnPropertyNames(obj)); //[ 'firstName', 'lastName', 'age', 'work', 'house', 'car' ]
for (var i = 0, keys = Object.getOwnPropertyNames(obj), len = keys.length; i < len; i++) {
    console.log(keys[i], ': ', obj[keys[i]]);
}
