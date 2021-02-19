console.log('======== main task start ========');
new Promise(resolve => {
    console.log('create micro task 1');
    resolve();
}).then(() => {
    console.log('micro task 1 callback');
    setTimeout(() => {
        console.log('macro task 3 callback');
    }, 0);
})

console.log('create macro task 2');
setTimeout(() => {
    console.log('macro task 2 callback');
    new Promise(resolve => {
        console.log('create micro task 3');
        resolve();
    }).then(() => {
        console.log('micro task 3 callback');
    })
    console.log('create macro task 4');
    setTimeout(() => {
        console.log('macro task 4 callback');
    }, 0);
}, 0);

new Promise(resolve => {
    console.log('create micro task 2');
    resolve();
}).then(() => {
    console.log('micro task 2 callback');
})

console.log('======== main task end ========');

/**
 * ======== main task start ========
 * create micro task 1
 * create macro task 2
 * create micro task 2
 * ======== main task end ========
 * micro task 1 callback
 * micro task 2 callback
 * macro task 2 callback
 * create micro task 3
 * create macro task 4
 * micro task 3 callback
 * macro task 3 callback
 * macro task 4 callback
 */