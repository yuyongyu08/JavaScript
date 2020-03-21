Function.prototype.myBind = function(context){
    let _this = this;

    return function(...args){
        return _this.apply(context, args)
    }
}

function sum(x, y, z){
    return x + y + z
}

let newSum = sum.myBind(null)

console.log(newSum(1, 2, 3));
