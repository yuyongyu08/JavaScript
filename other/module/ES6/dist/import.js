'use strict';

var _named_export = require('./named_export');

var namedExport = _interopRequireWildcard(_named_export);

var _default_export = require('./default_export');

var _default_export2 = _interopRequireDefault(_default_export);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _named_export.greet)(_named_export.lastName + ' ' + _named_export.firstName);

//具名导出，在导入时必须知道具体变量名或函数名！！！
// import namedExport from './named_export';
//
// console.log(namedExport);
// namedExport.greet(namedExport.lastName + ' ' + namedExport.firstName);


//解决方法1：整体加载
/**
 * Created by yuyongyu on 2018/1/10.
 */

console.log(namedExport);
namedExport.greet(namedExport.lastName + ' ' + namedExport.firstName);

//解决方法2：匿名导出（export default）


_default_export2.default.greet(_default_export2.default.lastName + ' ' + _default_export2.default.firstName);