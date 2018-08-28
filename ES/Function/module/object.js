/**
 * Created by yuyongyu on 2017/12/27.
 */
var myModule = {
    var1: 1,
    var2: 1,
    fn1: function () {
        console.log(this.var1)
    },
    fn2: function () {
        console.log(this.var2)
    }
};

console.log(myModule);

myModule.var1 = 2;

myModule.fn1();