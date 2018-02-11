'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yuyongyu on 2018/1/10.
 */

//写法1
// export const firstName = 'yongyu';
// export const lastName = 'Yu';
// export const job = 'programmer';
//
// export function greet (name) {
//     console.log('Hi, ' + name + '! You are Testing named export')
// };


//写法2(推荐，导出的变量一目了然)
var firstName = 'yongyu';
var lastName = 'Yu';
var job = 'programmer';
var greet = function greet(name) {
    console.log('Hi, ' + name + '! You are Testing named export');
};

exports.firstName = firstName;
exports.lastName = lastName;
exports.greet = greet;