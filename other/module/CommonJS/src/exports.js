/**
 * Created by yuyongyu on 2018/1/10.
 */
const firstName = 'yongyu';
const lastName = 'Yu';
const job = 'programmer';
function greet (name) {
    console.log('Hi, ' + name + '! You are Testing CommonJS')
};

//module.exports属性，表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取module.exports变量。
// module.exports.firstName = firstName;
// module.exports.lastName = lastName;
// module.exports.job = job;
// module.exports.greet = greet;

module.exports = {
    firstName: firstName,
    lastName: lastName,
    job: job,
    greet: greet
};


//也可以直接将需要导出的变量直接放到exports中，不推荐！！！
// exports.firstName = firstName;
// exports.lastName = lastName;
// exports.job = job;
// exports.greet = greet;