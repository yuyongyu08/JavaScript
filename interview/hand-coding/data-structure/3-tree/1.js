let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
}

// 按行输出二叉树

let queue = [tree]


function printTree() {
   if(queue.length ===0) return;
   let node = queue.shift();
   console.log(node.value);
   if(node.left) queue.push(node.left);
   if(node.right) queue.push(node.right);
   printTree()
}

printTree()

