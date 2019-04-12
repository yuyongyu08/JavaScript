//优先级：new > 显式 > 隐式 > 默认

//释疑
function Person(name) {
    this.name = name;
    this.sayName = sayName.bind(this);

    function sayName() {
        console.log(`My name is ${this.name}`);
    }
}

let Tom = new Person('Tom'); //new

Tom.sayName();

let Jerry = {
    name: 'Jerry'
};

Tom.sayName.call(Jerry); //显式