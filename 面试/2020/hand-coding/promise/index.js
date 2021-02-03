
let promise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('success!')
            }else{
                reject('fail!')
            }
        }, 1000)
    } catch (error) {
        reject(error)
    }
})

promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})