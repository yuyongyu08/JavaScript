// define(['foo', './bar'], function (foo, bar) {
//     foo();
//     document.getElementById('btn').onclick = function () {
//         bar.log();
//     }
// });

//弊端：既会预加载，又会预执行

//解决办法：AMD保留了commonjs中的require、exports、module这三个功能， 可以实现预加载，但不预执行，达到懒加载的目的
// define(function () {
//     require(['foo'], function (foo) {
//         foo();
//     });
//
//     document.getElementById('btn').onclick = function () {
//         require(['./bar'], function (bar) {
//             bar.log();
//         })
//     }
// });

//弊端：1、每次调用依赖的模块都需要实时下载代码 2、各种逻辑还要写在回调中


//解决办法：貌似并没有解决....
define(function (require, exports, module) {
    return {
        foo: function () {
            var foo = require('foo');
            foo();
        },
        bar: function () {
            document.getElementById('btn').onclick = function () {
                var bar = require('./bar');
                bar.log();
            }
        }
    }
});