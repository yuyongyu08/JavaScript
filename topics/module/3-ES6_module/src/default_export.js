/**
 * Created by yuyongyu on 2018/1/10.
 */
const firstName = 'yongyu';
const job = 'programmer';
const lastName = 'Yu';

const greet = function (name) {
    console.log('Hi, ' + name + '! You are Testing default export')
};

export default {
    firstName,
    lastName,
    job,
    greet
}