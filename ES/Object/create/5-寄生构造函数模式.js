function Person(name, age, job) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;

    obj.sayName = function () {
        console.log(this.name);
    };

    return obj;
}

let p1 = new Person('张三', '20', '主席'); // TODO 与【工厂模式】的区别：使用new
p1.sayName();

let p2 = new Person('李四', '21', '团长');
p2.sayName();

/*
* 【弊端】：返回的实例和构造函数没有关系
* */

console.log(p1.constructor); // [Function: Object]
console.log(p1.constructor === Object); // true
console.log(p1 instanceof Person); //false


console.log(p2.constructor); // [Function: Object]
console.log(p2.constructor === Object); // true
console.log(p2 instanceof Person); //false
