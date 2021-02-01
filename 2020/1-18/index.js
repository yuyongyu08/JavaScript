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
    let result = new Array(arr.length).fill(false);
    arr.forEach((item, index) => {
        item((args) => {
            result[index] = args;
            if (!result.includes(false)) {
                cb && cb(result)
            }
        })
    });
}


const callback = res => console.table(res)
run(asyncTasks, callback) // 3秒后输出 [1,2,3]
run1(asyncTasks, callback) // 3s => [1,2,3]
