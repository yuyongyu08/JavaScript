//LIFO
class MyStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop(); 
    }

    isEmpty() {
        return this.items.length === 0;
    }

    get size() {
        return this.items.length
    }

    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items.toString());
    }
}

module.exports = MyStack;