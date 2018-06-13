/**
 * Created by yuyongyu on 2017/12/27.
 */
var myModule = (function () {
    var var1 = 1;
    var var2 = 2;

    function fn1() {
        console.log(var1)
    }

    function fn2() {
        console.log(var2)
    }

    function fn3() {
        var1 = 3;
    }

    return {
        fn1: fn1,
        fn2: fn2,
        fn3: fn3
    }
})();

console.log(myModule);

myModule.var1 = 2;

console.log(myModule);


myModule.fn1();

myModule.fn3();

myModule.fn1();