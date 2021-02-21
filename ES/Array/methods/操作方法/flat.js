/**
 * 将多维数组拍平（多维数组转成一维数组）
 * 参数：递归深度
 * 返回：拍扁新数组
 * 不改变数组
 */

let arr = [1, [2, 3], [4, [5, [6, 7]]]];

//默认只递归1层
// console.log(arr.flat()); 

//无限递归
// console.log(arr.flat(Infinity)); 



Array.prototype.myFlat = function myFlat(deep = 1){
    if(deep > 0){
        return this.reduce((a, b) => {
            return a.concat(Array.isArray(b) ? b.myFlat(deep -1) : b)
        }, [])
    }else{
        return this.slice()
    }
}

console.log(arr.myFlat()); 
console.log(arr.myFlat(Infinity)); 

