// var name = 'win';
let Tom = {
    name: 'Tom',
    sayName: function () {
        console.log(`Hi, I am ${this.name}!`);
    },
    sayName_Arrow: () => {
        console.log(`Hi, I am ${this.name}!`);
    }
};

Tom.sayName();
Tom.sayName_Arrow();

function sayAge() {
    console.log(`I am ${this.age} years old!`);
}
let Jerry = {
    name: 'Jerry',
    age: 18,
    sayName: Tom.sayName_Arrow,
    sayAge: sayAge,
};

//this隐式指向Jery
Jerry.sayName();
Jerry.sayAge();


//引入箭头函数有两个方面的作用：(1)更简短的函数 (2)不绑定this
//箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
//参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions