let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let intersect, union, dif;

//交
intersect = arr1.filter(item => arr2.includes(item));
console.log(intersect);

//并
union = [...new Set([...arr1, ...arr2])];
// union = [...new Set(arr1.concat(arr2))];
// union = Array.from(new Set(arr1.concat(arr2)));

console.log(union);

//补
dif = [...arr1.filter(item => !arr2.includes(item)), ...arr2.filter(item => !arr1.includes(item))];
console.log(dif);