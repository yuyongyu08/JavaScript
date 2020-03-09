//FIFO
class MyQueue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() { 
        //方法1
        // return this.items.splice(0, 1); 

        //方法2
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    get size() {
        return this.items.length;
    }

    clear() {
        return this.items = [];
    }

    print() {
        console.log(this.items.toString());
    }
}

module.exports = MyQueue