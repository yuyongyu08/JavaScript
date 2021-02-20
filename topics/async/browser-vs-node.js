setTimeout(() => {
    console.log('setTimeout 1');

    new Promise((resovle) => {
        console.log('Promise 1 start');
        resovle();
    }).then(() => {
        console.log('Promise 1 end');
    })
}, 0)

setTimeout(() => {
    console.log('setTimeout 2');

    new Promise((resovle) => {
        console.log('Promise 2 start');
        resovle();
    }).then(() => {
        console.log('Promise 2 end');
    })
}, 0)

/**
 * 浏览器环境：宏任务完成后，紧接着检查微任务队列，微任务队列执行完后再进行下一个宏任务
 * setTimeout 1
 * Promise 1 start
 * Promise 1 end
 * setTimeout 2
 * Promise 2 start
 * Promise 2 end
 */

 /**
  * Node环境：每个阶段（可能包含多个宏任务）完成后，才检查微任务队列，微任务队列执行完后再进入下一阶段
  * setTimeout 1
  * Promise 1 start
  * setTimeout 2
  * Promise 2 start
  * Promise 1 end
  * Promise 2 end
  */