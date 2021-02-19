async function async1() {
    console.log('async1 start') //2.直接打印

    await async2() //3.直接执行async2

    //10.交出执行权，去执行其他同步代码
    //13.交回执行权，将下面代码放入微任务队列，第3个微任务
    console.log('async1 end') //17.执行微任务队列第3个微任务
}

async function async2() {
    console.log('async2 start') //4.直接打印

    await new Promise((resovle) => { //5.直接执行
        console.log('Promise start') //6.直接打印
        resovle() //7.直接执行
    }).then(() => { //8.将回调放入微任务队列，第1个微任务
        console.log('Promise end') //15.执行微任务队列第1个微任务
    })

    //9.交出执行权，去执行其他同步代码
    //12.交回执行权，将下面代码放入微任务队列，第2个微任务
    console.log('async2 end') //16.执行微任务队列第2个微任务
}


async1() //1.直接执行

console.log('end'); //11.直接打印

//14.执行栈为空，去遍历微任务队列

/**
 * async1 start
 * async2 start
 * Promise start
 * end
 * Promise end
 * async2 end
 * async1 end
 * 
*/

