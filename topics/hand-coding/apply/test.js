let myApply = require('./myApply')

Function.prototype.myApply = myApply

function sum(...args) {
    let total = args.reduce((pv, cv) => pv + cv, 0)
    return total 
}

let result = sum.myApply({}, [1, 2, 3, 4, 5])

console.log(result);
