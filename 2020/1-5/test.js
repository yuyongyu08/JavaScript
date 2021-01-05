// 如下，实现 `calc` 方法，可以将输入的数拆解为【尽可能多的乘数】，所有数相乘等于输入数。
/**
 * @param {number} n 乘积
 * @return {Array} 拆解后的乘数
 */
function calc(n) {
  let result = []
  if (n < 3) return [n];

  for (let index = 2; index < n; index++) {

    let rest = n % index;
    result.push(index)

    if (rest > n) { //todo 判断依据？
      result.push(...calc(rest))
    }else{
      result.push(rest)
      break
    }

  }

  return result
}


console.log(calc(2));

// [2]
console.log(calc(8));

// [2, 2, 2]
console.log(calc(24));

// [2, 2, 2, 3]
console.log(calc(30));

// [2, 3, 5]