const asyncTasks = [
    (done) => setTimeout(() => { done(1) }, 1000),
    (done) => setTimeout(() => { done(2) }, 3000),
    (done) => setTimeout(() => { done(3) }, 2000)
];

function run(arr, cb) {
    arr = arr.map(item => new Promise((resovle) => item(resovle)));
    Promise.all(arr).then(res => cb(res));
}

function run1(arr, cb) {
    let result = [], count = 0;
    arr.forEach((item, index) => {
        item((args) => {
            count++;
            result[index] = args;
            if (count == arr.length) {
                cb && cb(result)
            }
        })
    });
}


const callback = res => console.log(res)
run(asyncTasks, callback) // 3秒后输出 [1,2,3]
run1(asyncTasks, callback) // 3s => [1,2,3]
