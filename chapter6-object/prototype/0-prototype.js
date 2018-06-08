/*
* prototype:原型对象，每一个函数都有，只有函数有
*
* */

let o = {};
console.log(o.prototype); //undefined 对象没有原型对象
console.log(Object.getPrototypeOf(o)); //{}

function f() {}
console.log(f.prototype); //f {}
console.log(Object.getPrototypeOf(f)); //[Function]
console.log(f.constructor); //[Function: Function]  对象是通过构造函数产生，肯定有构造器


/*
*
* 万物皆对象，每个对象都有原型（原型指针）
*
* */


/*
* 为什么对象没有原型对象（prototype），而方法有？
*
* 方法是用来创建对象的，如果想实现原型继承，方法中必须要有原型对象（prototype）
*
* */