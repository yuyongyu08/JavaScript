function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}

let p1 = new Person('张三', '20', '主席');
p1.sayName();

let p2 = new Person('李四', '21', '团长');
p2.sayName();



console.log(p1.constructor); // [Function: Person]
console.log(p1.constructor === Person); // true
console.log(p1 instanceof Person); //true

console.log(p2.constructor); // [Function: Person]
console.log(p2.constructor === Person); // true
console.log(p2 instanceof Person); //true

/*
* 【弊端】：每个方法都要在每个实例中创建一边
* */