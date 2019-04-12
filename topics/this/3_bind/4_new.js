function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(`Hi, I am ${this.name}!`);
    }
}

//this显式指向Person的实例
let Tom = new Person('Tom');
Tom.sayName();

let Jerry = new Person('Jerry');
Jerry.sayName();

