/**
 * 按照指定深度递归拍平数组
 * @param depth 递归深度
 * 不改变原数组
 */

let arr = [1, [2, 3], [4, [5, [6, 7]]]];

//默认只递归1层
console.log(arr.flat()); 
console.log(arr);

//无限递归
console.log(arr.flat(Infinity)); 



Array.prototype.myFlat = function myFlat(deep = 1){
    if(deep > 0){
        return this.reduce((a, b) => {
            return a.concat(Array.isArray(b) ? b.myFlat(deep -1) : b)
        }, [])
    }else{
        return this
    }
}

console.log(arr.myFlat()); 
console.log(arr.myFlat(Infinity)); 

