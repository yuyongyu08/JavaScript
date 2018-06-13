//arguments.callee：指向函数本身。用处，递归时解藕函数名

function factorial(n) {
    if (n <= 1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(3));//6

var f1 = factorial;
factorial = function () {
    return 1
};

console.log(f1(3));//3  原因：factorial被重新赋值后，f1仍然调用factorial被重新赋值后




function newFactorial(n) {
    if (n <= 1){
        return 1
    }else{
        return n * arguments.callee(n-1)
    }
}

console.log(newFactorial(3));//6

var f2 = newFactorial;

newFactorial = function () {
    return 1
};

console.log(f2(3)); //6 原因：newFactorial被重新赋值后，f2中arguments.callee指向的是f2自身