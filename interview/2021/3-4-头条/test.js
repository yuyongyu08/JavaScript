async function fn(){
    await new Promise((resolve) => {
        console.log('1');
        resolve();
    }).then(()=>{
        console.log('2');
    })

    console.log('3');
}

// new Promise((r) => {
//     console.log('5');
//     r()
// }).then(()=>{
//     console.log('6');
// })

console.log('0');
fn()
console.log('4');

//我：  5 0 1 4 2 6 3
//node：5 0 1 4 6 2 3

//6和2的执行顺序？