'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yuyongyu on 2018/1/10.
 */
var firstName = 'yongyu';
var job = 'programmer';
var lastName = 'Yu';

var greet = function greet(name) {
    console.log('Hi, ' + name + '! You are Testing default export');
};

exports.default = {
    firstName: firstName,
    lastName: lastName,
    job: job,
    greet: greet
};