let arr = [77, 66, 55, 44, 33, 22, 11];

function selectSort(array = [], asc = true) {
  let newArray = [];

  while (array.length > 0) {
    let tempIndex = 0;
    let temp = array[tempIndex];

    array.forEach(function (value, index) {
      if(asc){
        temp <= value ? [temp, tempIndex] = [value, index] : ''
      }else{
        temp >= value ? [temp, tempIndex] = [value, index] : ''
      }
    });

    newArray.unshift(temp);
    array.splice(tempIndex, 1)
  }

  return newArray;
}

console.log(selectSort([...arr]));
console.log(selectSort([...arr], false));