// define(function (require, exports, module) {
//     let foo = require('foo');
//     foo.foo();
//
//     document.getElementById('btn').onclick = function () {
//         var bar = require('./bar');
//         bar.log();
//     }
// });

//弊端：bar还是会预加载

// 解决办法：解决了预加载，但没有解决回调
// define(function (require, exports, module) {
//     let foo = require('foo');
//     foo.foo();
//
//     document.getElementById('btn').onclick = function () {
//         require.async('./bar', function (bar) {
//             bar.log();
//         });
//     }
// });