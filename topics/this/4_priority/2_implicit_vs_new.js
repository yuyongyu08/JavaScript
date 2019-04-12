function sayName(name) {
    this.name = name;
    console.log(`I\'m ${this.name}`);
}

let Tom = {
    sayName: sayName
};


//隐式
Tom.sayName('Tom');
console.log(Tom.name);

//new
let jerry = new Tom.sayName('Jerry');
console.log(jerry.name);

//优先级：new > 隐式
