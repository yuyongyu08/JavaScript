/**
 * Created by yuyongyu on 2017/12/19.
 */
 var scope = 'global';

 function checkScope() {
     var scope = 'local';

     function f() {
         return scope
     }

     return f();
 }

 console.log(checkScope());


 function checkScope2() {
     var scope = 'local';

     function f() {
         return scope;
     }

     return f;
 }

 console.log(checkScope2()());


 /*
 *  1.什么是闭包？
 *  A closure is the combination of a function and the lexical environment within which that function was declared.（from:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures）
 *
 *  2.什么是作用域链？
 *  3.作用域链和闭包的关系？
 *  4.闭包有什么作用？
 * */


 var uniqueInteger = function () {
     var counter = 0;
     return function () { return counter++; }
 }();

 console.log(uniqueInteger()); //0
 console.log(uniqueInteger()); //1

//1、将嵌套函数赋值给uniqueInteger
//2、嵌套函数可以访问外部函数定义的counter变量
//3、当外部函数返回后，其他代码都无法访问counter变量，只有内部函数才可以访问到它



var uniqueInteger2 = function () {
    var counter = 0;
    function countting() { return counter++; }

    return countting;
}();

console.log(uniqueInteger2());
console.log(uniqueInteger2());