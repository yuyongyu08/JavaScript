async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}

async function async2() {
    console.log('async2 start')
    await async3()
    console.log('async2 end')
}

async function async3() {
    console.log('async3')
}

async1()

/**
 * async1 start
 * async2 start
 * async3
 * async2 end
 * async1 end
*/

/**
 * 先输出“async2 end”，后输出“async1 end”的原因：
 * 先执行async2，执行过程中遇到Promise.then（“async2 end”所在位置），将“async2 end”所在的回调放到微任务队列中；
 * async2结束后又遇到Promise.then（“async1 end”所在位置），将“async1 end”所在的回调放到微任务队列中；
 * 然后按先进先出的顺序执行微任务队列
*/

//async1等价于：
async function async1() {
    console.log('async1 start')
    Promise.resolve(async2()).then(() => {
        console.log('async1 end')
    }) 
}

//async2等价于：
async function async2() {
    console.log('async2 start')
    Promise.resolve(async3()).then(() => {
        console.log('async2 end')
    }) 
}

