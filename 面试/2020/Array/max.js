
Array.prototype.max = function () {
  return this.reduce((pre, cur) => {
    if (pre > cur) return pre
    return cur
  })
}

Array.prototype.min = function () {
  return this.reduce((pre, cur) => {
    if (pre < cur) return pre
    return cur
  })
}

let arr = [1, 2, 3, 4, 5]

console.log(arr.max());
console.log(arr.min());