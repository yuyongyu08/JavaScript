foo();

var foo = function () {
    console.log('函数表达式');
};


//解析后：
//
// var foo;
//
// foo();
//
// foo = function () {
//     console.log('函数表达式');
//
// }