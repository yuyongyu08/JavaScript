//合并数组[4,1,3,9,6,2]和[8,5,3,2,1,4,7]，然后去重，取出所有偶数并从大到小输出
let arr1 = [4,1,3,9,6,2]
let arr2 = [8,5,3,2,1,4,7];

//数组去重
//方法1：Set
// let arr = Array.from(new Set([...arr1, ...arr2]));

//方法2：filter
// let arr = arr1.concat(arr2).filter((item, index, array) => array.indexOf(item) === index)

//方法3：reduce
let arr = arr1.concat(arr2).reduce((pre, cur) => {
  if(!pre.includes(cur)) pre.push(cur)
  return pre
}, [])
console.log(arr);


//取偶 && 排序
arr = arr.filter(item => item % 2 === 0).sort((a, b) => a < b)


console.log(arr);
