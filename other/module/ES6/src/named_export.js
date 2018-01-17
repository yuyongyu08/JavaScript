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
const firstName = 'yongyu';
const lastName = 'Yu';
const job = 'programmer';
const greet = function (name) {
    console.log('Hi, ' + name + '! You are Testing named export')
};

export {
    firstName,
    lastName,
    greet
}