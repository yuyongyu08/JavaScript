//面试题1.：递归实现字符串逆转

let str = 'hello';

function reverseString(string) {
    return string.length > 0 ? arguments.callee(string.substring(1)) + string.charAt(0) : ''
}

console.log(reverseString(str));


//面试题2：递归实现阶乘

function factorial(n) {
    if(n <= 1 ){
        return 1
    }else if(n > 1){
        return n * arguments.callee(n-1)
    }
}

console.log(factorial(4));