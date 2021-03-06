async function t1() {
    console.log(1) //2.直接打印
    console.log(2) //3.直接打印

    new Promise(function (resolve) {
        console.log('promise3') //4.同步代码，直接打印
        resolve();
    }).then(function () { //5.放入微任务队列，队列的第1个任务
        console.log('promise4') //19.执行微任务队列队首任务（即之前放入的第1个任务）
    })

    await new Promise(function (resolve) { // 6.直接执行
        console.log('b') //7.同步代码
        resolve();
    }).then(function () { //8.放入微任务队列，队列的第2个任务
        console.log('t1p') //20.执行微任务队列队首任务（即之前放入的第2个任务）
    })

    //9.await之后的代码执行权被剥夺，去执行其他同步代码
    //23.交回执行权，开始执行下面的代码
    console.log(3) //24.直接打印
    console.log(4) //25.直接打印
    new Promise(function (resolve) {
        console.log('promise5') //26.同步代码
        resolve();
    }).then(function () { //27.放入微任务队列，队列（第二轮）的第1个任务
        console.log('promise6') //31.执行微任务队列（第二轮），取栈顶任务
    })
}

//0.放入宏任务队列
setTimeout(function () {
    console.log('setTimeout') //32.执行宏任务队列，取栈顶任务
}, 0)

async function t2() {
    console.log(5) //13.直接打印
    console.log(6) //14.直接打印

    await Promise.resolve().then(() => console.log('t2p')) //15.放入微任务队列，队列的第4个任务  //22.执行微任务队列队首任务（即之前放入的第4个任务）

    //16.await之后的代码执行权被剥夺，去执行其他同步代码
    //28.交回执行权，开始执行下面的代码
    console.log(7) //29.直接打印
    console.log(8) //30.直接打印
}

t1() //1.直接执行

new Promise(function (resolve) {
    console.log('promise1') //10.同步代码
    resolve();
}).then(function () { //11.放入微任务队列，队列的第3个任务
    console.log('promise2') //21.执行微任务队列队首任务（即之前放入的第3个任务）
})

t2() //12.直接执行

console.log('end'); //17.直接打印

//18.执行栈为空，开始轮询微任务队列



/**
 * 1
 * 2
 * promise3
 * b
 * promise1
 * 5
 * 6
 * end
 * promise4
 * t1p
 * promise2
 * t2p
 * 3
 * 4
 * promise5
 * 7
 * 8
 * promise6
 * setTimeout
 */