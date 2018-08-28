let str = 'http://m.58.com/sh/zufang/l59/s3013/b9/';

let re1 = /(\/s\d+)/;

let re2 = /(l\d+)/;

console.log(re1.test(str));
console.log(RegExp.lastMatch);