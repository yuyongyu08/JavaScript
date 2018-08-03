
//方式一：函数声明(会变量提升)
function sayHello() {
    console.log('hello');
}

//方式二：函数表达式
var sayHello1 = function () {
    console.log('hello');
};

//方式三：Function构造函数
var sayHello2 = new Function('console.log(\'hello\');');

console.log(typeof sayHello);
console.log(typeof sayHello1);
console.log(typeof sayHello2);


//函数就是对象
console.log(sayHello instanceof Object);
console.log(sayHello1 instanceof Object);
console.log(sayHello2 instanceof Object);