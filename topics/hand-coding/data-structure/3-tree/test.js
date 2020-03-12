let BinarySearchTree = require('./MyTree.js')

let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

// tree.preOrderTerverse(item => console.log(item))
// tree.inOrderTerverse(item => console.log(item))
tree.postOrderTerverse(item => console.log(item))