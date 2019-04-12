function sayName() {
    console.log(`I\'m ${this.name}`);
}

var Tom = {
    name: 'Tom',
    sayName: sayName
};

var Jerry = {
    name: 'Jerry',
    sayName: sayName
};

//隐式
Tom.sayName();
Jerry.sayName();

//显式
Tom.sayName.call(Jerry);
Jerry.sayName.call(Tom);

//优先级：显式 > 隐式