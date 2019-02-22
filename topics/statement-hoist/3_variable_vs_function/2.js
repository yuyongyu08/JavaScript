foo();

function foo() {
    console.log(1);
}

function foo() {
    console.log(2);
}

/**
 * 后面的函数声明会覆盖前面的函数声明
 */

//解析后：