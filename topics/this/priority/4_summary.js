//优先级：new > 显式 > 隐式 > 默认

function Person(name) {
    this.name = name;
    this.sayName = sayName.bind(this);

    function sayName() {
        console.log(`My name is ${this.name}`);
    }
}

let Tom = new Person('Tom'); //new

Tom.sayName();

let Jery = {
    name: 'Jery'
};

Tom.sayName.bind(Jery)(); //显式