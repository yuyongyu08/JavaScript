//this 
//定义：函数运行时生成的内部对象，此对象只能在函数内部使用
//难点：随着函数使用场景不同，this会发生变化

//情景一：普通函数调用：***this = 全局对象***
function myFunc1(){
    this.x = 'inner';
    console.log(this.x);
}

myFunc1(); //this = global，给全局增加了一个变量x，并输出全局变量x

x = 'global'; //重写全局变量
console.log(x);//输出被重写后的全局变量

myFunc1(); //函数内部重写全局变量x，并输出被重写后的全局变量x


//情景二：对象方法调用：***this = 对象本身***

let o = {};

function test() {
    console.log(this.y);
}

o.y = 'object variable';

o.f = test;

o.f(); //输出对象的属性y

y = 'global variable'; //增加全局属性y
o.f(); //输出的仍然是对象的属性y


//情景三：作为构造函数调用 ***this = 新new的对象***
function  Person(title) {
    this.title = title;
}

let boss = new  Person('老板');

console.log(boss.title);

title = '总裁';
let stuff =  new  Person('员工');
console.log(stuff.title);


//情景四：apply ***this = 第一个参数***

function sum() {
    return this.a + this.b
}

let point = {
    a: 10,
    b: 20
};

console.log(sum.apply(point)); //将调用对象指定为point


a = 20;
b = 30;

console.log(sum.apply()); //参数为空，默认调用全局对象



