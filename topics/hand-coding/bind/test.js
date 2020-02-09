let myBind = require('./myBind')

Function.prototype.myBind = myBind

function sum(...args) {
    return args.reduce((pv, cv) => pv + cv, 0)
}

let result = sum.myBind(null, 1, 2, 3, 4, 5)

console.log(result(10));
