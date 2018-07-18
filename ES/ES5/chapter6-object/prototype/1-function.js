
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

/*
* __proto__在ES5时没有被标准化，推荐使用Object.getPrototypeOf()。ES6已将其标准化。
* */

console.log(Foo.__proto__ === Object.getPrototypeOf(Foo)); //true

console.log(Foo.__proto__ === Function.prototype); //true

console.log(Foo.prototype); // Foo {}


console.log(Foo.prototype.__proto__ === Object.prototype); //true
console.log(Foo.prototype.constructor === Foo); //true

