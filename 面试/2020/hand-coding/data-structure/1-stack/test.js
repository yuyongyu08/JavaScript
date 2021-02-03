let MyStack = require('./MyStack')

let stack = new MyStack()

stack.push('a')
stack.print()

stack.push('b')
stack.print()

stack.push('c')
stack.print()
console.log(stack.size)


stack.pop() //LIFO
stack.print()

stack.clear()
console.log(stack.size)