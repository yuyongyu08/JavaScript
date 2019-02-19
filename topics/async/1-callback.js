let arr = [1,2,3,4,5,6,7,8,9,10]

arr.sort(() => Math.random() > 0.5);

console.log(arr);

arr.sort(() => Math.random() > 0.5).sort(() => Math.random() > 0.5).sort(() => Math.random() > 0.5).sort(() => Math.random() > 0.5).sort(() => Math.random() > 0.5);

console.log(arr);