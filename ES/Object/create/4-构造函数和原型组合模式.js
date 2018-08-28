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

/*
* 构造函数里放 属性
* 原型里放 方法
*
* */