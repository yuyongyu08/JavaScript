let arr = [];

for (let index = 0; index < 20; index++) {
  arr[index] = index
}
console.log(arr);

//sort
function mess1(arr){
  arr.sort(() => Math.random() > 0.5)
  return arr
}

console.log(mess1(JSON.parse(JSON.stringify(arr))));

//洗牌算法：
function mess2(arr){
  for (let index = arr.length -1 ; index > 0; index--) {
    let random = Math.floor(Math.random() * index);
    [arr[index], arr[random]] = [arr[random], arr[index]]
  }
  return arr
}

console.log(mess2(JSON.parse(JSON.stringify(arr))));
