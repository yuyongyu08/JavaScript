const tree = {
    type: 'html',
    children: [{
        type: 'div',
        children: [{
            type: 'p'
        }, {
            type: 'toString',
        }],
    }],
};

// 节点一定有 type，且 type 是任意字符串
// 不一定有 children
// children是节点数组

//const countTree = (tree) => {html: 1, div: 1, p: 1, span: 1}

const countTree = (tree) => {
    let result = {};
    
    function travelChildren(node, result){
         if(result.hasOwnProperty(node.type) && result[node.type]){
            result[node.type] = result[node.type] + 1;
        }else{
            result[node.type] = 1
        }

        node.children && (node.children.forEach(item => {
            travelChildren(item, result)
        }));
    }
    
    travelChildren(tree, result)
    
    return result;
}

console.log(countTree(tree));
















