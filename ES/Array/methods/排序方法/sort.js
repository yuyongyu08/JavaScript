/**
 * 对数组的元素进行排序
 * 参数：compareFn(a, b)，不传此参数，则默认按unicode排序
 * 返回：排序后的数组
 * 改变原数组
 */
let arr = [10, 5, 333, 54, 5];

Array.prototype.mySort = function(compareFn){
    for (let index = 0; index < this.length; index++) {
        if(compareFn(this[index], this[index+1])) [this[index]] = this[index+1]
    }

    return this
}

console.log(arr.sort((a, b) => a > b));
console.log(arr);