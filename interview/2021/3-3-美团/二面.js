Promise.myAllSettled = function (params) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(params)){
             reject('入参必须是数组')
        }

        let result = new Array(params.length).fill(false);

        for (let index = 0; index < params.length; index++) {
            Promise.resolve(params[index]).then(value => {
                result[index] = value;
                if (!result.includes(false))  resolve(result);
            }, reason => {
                result[index] = reason;
                if (!result.includes(false))  resolve(result);
            })
        }
    })
}


Promise.myAllSettled([
    Promise.resolve('1-成功'),
    Promise.reject('2-失败'),
    Promise.resolve('3-成功')
]).then(result => console.log(result), err => console.error(err))
