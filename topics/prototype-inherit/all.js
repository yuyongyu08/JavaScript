

function Person(name) {
    this.name = name;
}

let person = new Person('yuyongyu');

//第一步验证
console.log(person.name); // yuyongyu
console.log(person.__proto__ === Person.prototype); // true


//第二步验证
console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.prototype.constructor === Person); // true
console.log(Person.prototype.__proto__ === Object.prototype);// true


//第三步验证
console.log(Function.__proto__ === Function.prototype); // true
console.log(Function.prototype.constructor === Function);// true
console.log(Function.prototype.__proto__ === Object.prototype);// true


//第四步验证
console.log(Object.__proto__ === Function.prototype); // true
console.log(Object.prototype.constructor === Object); // true
console.log(Object.prototype.__proto__ === null); // true


//推论：
/**
 * 1、对象都有原型，比如person、Person、Function、Object等都有【原型指针】，且都不为空
 * */

/**
 * 2、实例的【原型指针】指向父级的【原型对象】，【原型对象】本身就是个对象，用来承载自身的实例属性和实例方法（注意和静态方法的区别）
 * 例如：Person.__proto__指向Function.prototype，Function.prototype只用来存放Function的一些实例方法和属性，Function.prototype.call()、Function.prototype.apply()
 *
 * 静态方法（无需实例化可以直接调用）：Array.isArray()
 * 实例方法（只能通过实例调用）：Array.prototype.push()，let arr = new Array(); arr.push();
 *
 * new出一个实例会做3件事：
 * （1）声明一个变量arr
 * （2）将实例的this指向此变量
 * （3）将实例的【原型指针】指向Array的原型对象
 */

/**
 * 3、Function的原型是自己，所有方法的原型都指向Function的【原型对象】，也就是说Function创造了所有方法，而Function也是方法，这也就不难理解【Function的原型是自己】
 * */
