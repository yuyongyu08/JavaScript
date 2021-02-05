function myReduce(callback, initialValue){
    initialValue = initialValue || 0
    this.forEach(element => {
        initialValue = callback(initialValue, element)
    });

    return initialValue
}

Array.prototype.reduce = myReduce;

let arr = [1, 2,3,4,5]

console.log(arr.reduce((pre, cur)=> pre+cur, 10)); 
console.log(arr.reduce((pre, cur)=> pre+cur));