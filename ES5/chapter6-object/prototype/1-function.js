
let Foo = function () {
    this.name = 'foo'
};

/*
* 一、函数本身
* Foo:
*      （1）__proto__  === Function.prototype (父类的原型对象)
*       (2)prototype
*          <1>__proto__  === Object.prototype (Object的原型对象)
*          <2>constructor === Foo (构造函数本身)
* */

console.log('1.1 Foo.__proto__:');
console.log(Foo.__proto__);

/*
* __proto__在ES5时没有被标准化，不建议使用，推荐使用Object.getPrototypeOf()。ES6已将其标准化。
* */
console.log('Foo.__proto__ === Object.getPrototypeOf(Foo):');
console.log(Foo.__proto__ === Object.getPrototypeOf(Foo));


console.log('Foo.__proto__ === Function.prototype:');
console.log(Foo.__proto__ === Function.prototype);

console.log('1.2 Foo.prototype:');
console.log(Foo.prototype);

console.log('1.2.1 Foo.prototype.__proto__:');
console.log(Foo.prototype.__proto__);

console.log('Foo.prototype.__proto__ === Object.prototype:');
console.log(Foo.prototype.__proto__ === Object.prototype);

console.log('1.2.2 Foo.prototype.constructor:');
console.log(Foo.prototype.constructor);

console.log('Foo.prototype.constructor === Foo:');
console.log(Foo.prototype.constructor === Foo);

