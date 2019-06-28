// define(function (require, exports, module) {
//     let foo = require('foo');
//     foo.foo();
//
//     document.getElementById('btn').onclick = function () {
//         var bar = require('./bar');
//         bar.log();
//     }
// });

//弊端：bar还是会预下载

//解决办法：解决了预下载，但没有解决回调
define(function (require, exports, module) {
    let foo = require('foo');
    foo.foo();

    document.getElementById('btn').onclick = function () {
        require.async('./bar', function (bar) {
            bar.log();
        });
    }
});