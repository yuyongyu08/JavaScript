let MyQueue = require('./MyQueue');

let queue = new MyQueue();

queue.enqueue('a')
queue.print()

queue.enqueue('b')
queue.print()

queue.enqueue('c') //FIFO
queue.print()

queue.dequeue()
queue.print()

queue.clear()
console.log(queue.size)