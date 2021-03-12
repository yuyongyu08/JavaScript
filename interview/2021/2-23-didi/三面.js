//fn("1+2*3/4-5*6")

let obj = {
    plus: [
        1, 
        [
            {
                'multiply': [
                    2, 
                    {
                        
                    }
                ]
            }
        ]
    ]
}

let tree = {
    key: '+',
    left: 1,
    right: {
        key: '-',
        left: {
            key: '*',
            left: 2,
            right: {
                key: '/',
                left: 3,
                right: 5
            }
        },
        right: {
            key: '*',
            left: 5,
            right: 6
        }
    }
}

function fn(str){
    const tree = parseToTree(str)

    return travelTree(tree)
}

function parseToTree(str){
    let tree = {};
    const signs = ['+', '-', '*', '/'];

    signs.forEach(sign => {
        let arr = str.split(sign)
        
        if(Array.isArray(arr) && arr.length > 0){
            tree.key = sign;
            arr.forEach(item => {
                parseToTree(item)
            })
        }
        
    })

}

function travelTree(tree){

}



