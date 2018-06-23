/*
*
* 二、实例对象
*
* foo:
*     constructor === Foo （构造函数）
*     __proto__ === Foo.prototype （父类的原型对象）
* */

let Foo = function () {
    this.name = 'foo'
};
let foo = new Foo();

/*
* foo:
*     constructor === Foo （构造函数）
*     __proto__ === Foo.prototype （父类的原型对象）
* */
console.log(foo.constructor === Foo); //true
console.log(foo.__proto__ === Foo.prototype); //true


/*
* Foo.prototype:
*     constructor === Foo （构造函数）
*     __proto__ === Function.prototype （父类的原型对象）
* */
console.log(Foo.prototype.constructor === Foo); //true
console.log(Foo.prototype.__proto__ === Object.prototype); //true
console.log(Foo.__proto__ === Function.prototype); //true


/*
* Function.prototype:
*     constructor === Function （构造函数，特别注意！！！）
*     __proto__ === Object.prototype （父类的原型对象）
* */
console.log(Function.prototype.constructor === Function); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Function.__proto__ === Function.prototype); //true

/*
* Object.prototype:
*     constructor === Object （构造函数，特别注意！！！）
*     __proto__ === null （父类的原型对象）
* */

console.log(Object.prototype.constructor === Object); //true
console.log(Object.prototype.__proto__ === null); //true
console.log(Object.__proto__ === Function.prototype); //true


/*
*
* 函数的原型对象（prototype）的构造器（constructor）是函数自身，即 Foo.prototype.constructor === Foo
*
* */


