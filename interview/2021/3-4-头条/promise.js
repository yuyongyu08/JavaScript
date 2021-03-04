// new Promise(3).then(val => console.log(val), err => console.log(err)).catch(err => console.log(err))

const allResovles = [
    new Promise((resovle, reject) => {
        setTimeout(resovle('5s 成功'), 5000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('3s 成功'), 3000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('1s 成功'), 1000)
    }),
    new Promise((resovle, reject) => {
        setTimeout(resovle('7s 成功'), 7000)
    }),
]

// const promises = [
//     new Promise((resovle, reject) => {
//         setTimeout(reject('5s 失败'), 5000)
//     }),
//     new Promise((resovle, reject) => {
//         setTimeout(reject('3s 失败'), 3000)
//     }),
//     new Promise((resovle, reject) => {
//         setTimeout(resovle('1s 成功'), 1000)
//     }),
//     new Promise((resovle, reject) => {
//         setTimeout(resovle('7s 成功'), 7000)
//     }),
// ]


Promise.all(allResovles).then(value => console.log(value), err => console.log(err))
// Promise.allSettled(promises).then(value => console.log(value), err => console.log(err))
// Promise.race(promises).then(value => console.log(value), err => console.log(err))
// Promise.any(promises).then(value => console.log(value), err => console.log(err))