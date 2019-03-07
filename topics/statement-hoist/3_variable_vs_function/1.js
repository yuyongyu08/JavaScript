
// foo();
//
// var foo = function () {
//     console.log('函数表达式');
// };
//
// function foo() {
//     console.log('函数声明');
// }


/**
 * 1、【函数声明】会先于【变量声明】提升
 * 2、【函数声明】会被提升到【变量声明】之前
 */


//解析后：
// function foo() {
//     console.log('函数声明');
// }
//
// var foo;
//
// foo();
//
// foo = function () {
//     console.log('函数表达式');
// };



//疑问

function foo() {
    console.log('函数声明');
}

var foo;

foo();

foo = function () {
    console.log('函数表达式');
};

foo();





