

function Person(name) {
    this.name = name;
}

let person = new Person('yuyongyu');

//第一步验证
console.log(person.__proto__ === Person.prototype); // true


//第二步验证
console.log(Person.__proto__ === Function.prototype); // true



//第三步验证
console.log(Function.__proto__ === Function.prototype); // true


//第四步验证
console.log(Function.prototype.__proto__ === Object.prototype); // true


console.log(Object.__proto__.constructor === Function);
console.log(Function.prototype.__proto__.constructor === Object);



//__proto__最初是一个非标准属性，ES6已将其标准化，可以用标准方法Object.getPrototypeOf()替代，本文处于举例的直观性考虑，在ES6环境仍采用此属性。



