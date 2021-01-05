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

    insert(key) {
        function inserNode(key, node) {
            if (!node) {
                node = new Node(null, key, null)
            } else if (!!node && key < node.key) {
                node.left = inserNode(key, node.left)
            } else {
                node.right = inserNode(key, node.right)
            }

            return node
        }

        this.root = inserNode(key, this.root)
    }

    //先序
    preOrderTerverse(cb) {
        function preOrderTerverseNode(node, callback) {
            if (node) {
                cb(node)
                preOrderTerverseNode(node.left, cb)
                preOrderTerverseNode(node.right, cb)
            }
        }

        preOrderTerverseNode(this.root, cb)
    }

    //中序
    inOrderTerverse(cb) {
        function inOrderTerverseNode(node, callback) {
            if (node) {
                inOrderTerverseNode(node.left, cb)
                cb(node)
                inOrderTerverseNode(node.right, cb)
            }
        }

        inOrderTerverseNode(this.root, cb)
    }

    //后序
    postOrderTerverse(cb) {
        function postOrderTerverseNode(node, callback) {
            if (node) {
                postOrderTerverseNode(node.left, cb)
                postOrderTerverseNode(node.right, cb)
                cb(node)
            }
        }

        postOrderTerverseNode(this.root, cb)
    }

    min() {
        const minNode = node => {
            return node ? (node.left ? minNode(node.left) : node.key) : null
        }

        return minNode(this.root)
    }

    max() {
        const maxNode = node => {
            return node ? (node.right ? maxNode(node.right) : node.key) : null
        }

        return maxNode(this.root)
    }

    search(key){
        const searchNode = node => {
            if(node.key === key){
                return node
            }else {
                return searchNode(key < node.key ? node.left : node.right)
            }
        }

        return key != 0 && !key ? null : searchNode(this.root)
    }
}

module.exports = BinarySearchTree