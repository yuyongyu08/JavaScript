
/*
* 【属性】放在构造函数中
* 【方法】放在原型中
* */

function Person(name, age, job, colors) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.colors = colors;
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

let p1 = new Person('Mike', 21, 'worker', ['red']);
p1.sayName();

let p2 = new Person('Tom', 22, 'waiter', ['green']);
p2.sayName();

p1.colors.push('pink');
console.log(p1.colors); // [ 'red', 'pink' ]
console.log(p2.colors); // [ 'green' ]


console.log(p1.constructor); // [Function: Object]
console.log(p1.constructor === Object); // true
console.log(p1 instanceof Person); //false


console.log(p2.constructor); // [Function: Object]
console.log(p2.constructor === Object); // true
console.log(p2 instanceof Person); //false

/*
* TODO 最常使用的一种模式！！！
* */