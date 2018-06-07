//caller：方法的调用者，和arguments.callee（指向函数本身）没有关系

function greet(message) {
    console.log('greet.caller:', greet.caller);
    console.log(message);
}

function sayHello() {
    greet('Hello!');
}

console.log(greet.caller); //null 未被调用
console.log('****************************************');


greet('你好');
console.log('****************************************');


sayHello();