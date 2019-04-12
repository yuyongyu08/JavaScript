function bar() {
    console.log('bar:', this.a);
}

function foo() {
    var a = 1;

    this.bar()
}

foo();

//非严格模式运行

//如果this执行函数作用域：foo的作用域中包含bar，可以直接通过this.bar调bar，bar也可以通过this.a调用其作用域中的a