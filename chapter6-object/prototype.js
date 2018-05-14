let Foo = function () {};

console.log('一、函数本身');
console.log('函数有2个属性：');
console.log('1.原型指针 Foo.__proto__:', Foo.__proto__);
console.log('Foo.__proto__ === Function.prototype:', Foo.__proto__ === Function.prototype);

console.log();
console.log('2.原型对象 Foo.prototype：', Foo.prototype);

console.log('函数原型对象包含两个属性：');
console.log('(1)原型指针 ：Foo.prototype.__proto__:', Foo.prototype.__proto__);
console.log('此属性指向Object的原型对象，Foo.prototype.__proto__ === Object.prototype:',Foo.prototype.__proto__ === Object.prototype);

console.log('(2)构造器 ：Foo.prototype.constructor:', Foo.prototype.constructor);
console.log('此属性指向函数本身，Foo.prototype.constructor === Foo:', Foo.prototype.constructor === Foo);
console.log();


console.log('二、函数构造的新实例');
let foo = new Foo();
console.log('函数构造的新实例有2个属性');
console.log('1.原型指针 foo.__proto__:', foo.__proto__);
console.log('此属性指向该函数的prototype，foo.__proto__ === Foo.prototype:', foo.__proto__ === Foo.prototype);

console.log('2.构造器 foo.constructor:',foo.constructor);
console.log('(1)此属性指向构造函数本身，foo.constructor === Foo:', foo.constructor === Foo);
console.log('(2)此属性与函数本身原型对象的构造器相等，foo.constructor === Foo.prototype.constructor:', foo.constructor === Foo.prototype.constructor);



