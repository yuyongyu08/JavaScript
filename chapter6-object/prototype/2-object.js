/*
*
* 二、实例对象
* foo:
*       (1)__proto__ === Foo.prototype （父类的原型对象）
*       (2)constructor === Foo （构造函数本身）
* */
let Foo = function () {
    this.name = 'foo'
};
let foo = new Foo();


console.log('2.1 原型指针 foo.__proto__:');
console.log(foo.__proto__);

console.log('foo.__proto__ === Foo.prototype:');
console.log(foo.__proto__ === Foo.prototype);

console.log('2.2 构造器 foo.constructor:');
console.log(foo.constructor);

console.log('foo.constructor === Foo:');
console.log(foo.constructor === Foo);

console.log('foo.constructor === Foo.prototype.constructor:');
console.log(foo.constructor === Foo.prototype.constructor);

/*
*
* foo.constructor === Foo.prototype.constructor
*
* */

console.log('foo.constructor === Foo.prototype.constructor:');
console.log(foo.constructor === Foo.prototype.constructor);


/*
* 方法有prototype属性，对象没有
* */

function a() {}

console.log(a.prototype);

let b = {};

// console.log(b.prototype); //报错



console.log(a.constructor);





