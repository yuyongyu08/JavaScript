// var a = 10;
// function a() { };
// console.log(a); //10

// (function () {
//     console.log(a); // undefined
//     a = 5;
//     console.log(window.a) // 10
//     var a = 20
// })()

// console.log(a) // 10


//同名变量和函数：都会提升，不会覆盖；提升顺序遵循位置 


// var a = 10;
// function a() { };
// console.log(a); //10

function a() {}
var a = 10;
console.log(a); //10