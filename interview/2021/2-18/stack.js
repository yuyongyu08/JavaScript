function validStack(inArr, outArr) {
    let stack = [];

    inArr.forEach(item => {
        stack.push(item);

        while (stack.length > 0 && stack[stack.length - 1] == outArr[0]) {
            stack.pop();
            outArr.shift();
        }
    })

    return outArr.length === 0
}

console.log(validStack([1, 2, 3, 4, 5], [1, 4, 3, 5, 2]))
console.log(validStack([1, 2, 3, 4, 5], [4, 1, 2, 5, 3]))