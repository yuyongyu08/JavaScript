setTimeout(function () {
    console.log('setTimeout 500')
}, 500)

// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }

//await关键字后面函数的返回值是一个Promise对象,如果不是Promise则会隐式的转换为Promise, async1 等价于 
async function async1() {
    console.log('async1 start');
    Promise.resolve(async2()).then(() => {
        console.log('async1 end');
    })
}


// async function async2() {
//     console.log('async2 start')

//     await setTimeout(() => console.log('async2 end') ,0)
// }

//等价于
async function async2() {
    console.log('async2 start')
    Promise.resolve(setTimeout(() => console.log('async2 setTimeout') ,0)).then(() => {
        console.log('async2 end')
    })
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout 0')
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1')
    resolve();
    console.log('promise1 after resolve')
}).then(function () {
    console.log('promise2')
})

console.log('script end')