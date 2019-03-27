/**
 * Created by yuyongyu on 2018/1/10.
 */

import {firstName, lastName, greet} from './named_export';

greet(lastName + ' ' + firstName);



//具名导出，在导入时必须知道具体变量名或函数名！！！
// import namedExport from './named_export';
//
// console.log(namedExport);
// namedExport.greet(namedExport.lastName + ' ' + namedExport.firstName);


//解决方法1：整体加载
import * as namedExport from './named_export';

namedExport.greet(namedExport.lastName + ' ' + namedExport.firstName);



//解决方法2：匿名导出（export default）
import defaultExport from './default_export';

defaultExport.greet(defaultExport.lastName + ' ' + defaultExport.firstName);