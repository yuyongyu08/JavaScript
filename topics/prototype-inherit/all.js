

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
