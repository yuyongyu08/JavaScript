//['A', 'A', 'A', 'C', 'B', 'B', 'A', 'C', 'B'] => ['A', 'A', 'A', 'A', 'B', 'B', 'C', 'C']

function formatArr(arr) {
    let obj = {};
    arr.forEach(item => {
        if(obj[item]){
            obj[item].push(item)
        }else{
            obj[item] =[item]
        }
    })
    
    return Object.values(obj).reduce((a,b) => a.concat(b), [])
}

function formatArr1(arr) {
    function getSubArr(type){
        return arr.filter(item => item === type)
    }

    return getSubArr('B').concat(getSubArr('A'), getSubArr('C'))
}

// console.log(formatArr(['A', 'A', 'A', 'C', 'B', 'B', 'A', 'C', 'B']))
console.log(formatArr1(['A', 'A', 'A', 'C', 'B', 'B', 'A', 'C', 'B']))