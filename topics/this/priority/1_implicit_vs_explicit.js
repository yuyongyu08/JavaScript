function sayName() {
    console.log(this.name);
}

var Tom = {
    name: 'Tom',
    sayName: sayName
};

var Jery = {
    name: 'Jery',
    sayName: sayName
};

//隐式
Tom.sayName();
Jery.sayName();

//显式
Tom.sayName.call(Jery);
Jery.sayName.call(Tom);

//优先级：显式 > 隐式