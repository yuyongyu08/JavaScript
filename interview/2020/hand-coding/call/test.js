let myCall = require('./myCall')

Function.prototype.myCall = myCall

function sum(...args) {
    let total = args.reduce((pv, cv) => pv + cv, 0)
    return total 
}

let result = sum.myCall({}, 1, 2, 3, 4, 5)

console.log(result);