class Node {
    constructor(key, left, right) {
        this.key = key //先序
        this.left = left //中序
        this.right = right //后序
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        function inserNode(key, node) {
            if (!node) {
                node = new Node(key, null, null)
            } else {
                if (key < node.key) {
                    node.left = inserNode(key, node.left)
                } else if (key > node.key) {
                    node.right = inserNode(key, node.right)
                }
            }

            return node
        }

        this.root = inserNode(key, this.root)
    }

    //先序
    preOrderTerverse(cb) {
        function preOrderTerverseNode(node, callback) {
            if (node) {
                callback(node)
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
                callback(node)
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
                callback(node)
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

    search(key) {
        const searchNode = node => {
            if (node.key === key) {
                return node
            } else {
                return searchNode(key < node.key ? node.left : node.right)
            }
        }

        return key != 0 && !key ? null : searchNode(this.root)
    }
}

module.exports = BinarySearchTree