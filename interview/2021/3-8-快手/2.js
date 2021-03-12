async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
}).then(function () {
    console.log('promise3');
})


new Promise(function (resolve) {
    console.log('promise4');
    resolve();
}).then(function () {
    console.log('promise5');
});

console.log('script end');

/**
 * 答案：
 * script start
async1 start
async2
promise1
promise4
script end
promise2
promise3
promise5
async1 end
setTimeout
*/

//疑问：promise3和promise5的顺序