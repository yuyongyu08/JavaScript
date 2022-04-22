const asyncTasks = [
    (done) => setTimeout(() => { done(1) }, 1000),
    (done) => setTimeout(() => { done(2) }, 3000),
    (done) => setTimeout(() => { done(3) }, 2000)
];

function run(arr, cb) {
    //todo
   
}

const callback = res => console.table(res)
run(asyncTasks, callback) // 3秒后输出 [1,2,3]

console.log(Promise.all(asyncTasks));