class Node {
    constructor(left, key, right) {
        this.left = left
        this.key = key
        this.right = right
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    inserNode(key, node) {
        if (!node) {
            node = new Node(null, key, null)
        } else if (!!node && key < node.key) {
            node.left = this.inserNode(key, node.left)
        } else {
            node.right = this.inserNode(key, node.right)
        }

        return node
    }

    insert(key) {
        this.root = this.inserNode(key, this.root)
    }

    print() {
        console.log(this.root.toString());
    }
}

module.exports = BinarySearchTree