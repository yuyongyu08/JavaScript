/*
*
* instanceof: 对象是否为某个构造函数的实例
*
* 原理：检测右侧构造函数prototype属性是否在左侧实例的原型链上
*
* */


let d = new Date();
console.log(Object.getPrototypeOf(d) === Date.prototype);
console.log(Object.getPrototypeOf(Date) === Function.prototype); // true 为什么???

console.log(Object.getPrototypeOf(Function) === Object.prototype); //false
console.log(Object.getPrototypeOf(Function) === Function.prototype); //true Function的原型是自身的原型对象！！！

console.log(Object.__proto__);
console.log(Object.getPrototypeOf(Object));
console.log(Object.__proto__ === Object.getPrototypeOf(Object)); //true

console.log(Object.prototype);
console.log(Object.prototype.__proto__); //null  万物皆空

//检测原型链

console.log(d instanceof Date);
console.log(d instanceof Function); //false 为什么???
console.log(d instanceof Object);

console.log(d.__proto__);
console.log(d.__proto__.__proto__);
console.log(d.__proto__.__proto__.__proto__);