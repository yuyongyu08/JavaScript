let arr = [];

// arr = arr.map(function (value, index) {
//     return value++;
// });

//为什么？？？


for (let i = 1; i <= 10; i++){
    arr.push(i)
}


function messArray(array) {
    array.forEach(function (value, index, arr) {
        let random = Math.floor(Math.random() * 10);
        console.log(random);

        let temp = arr[random];
        arr[random] = arr[index];
        arr[index] = temp;
    });

    return array
}


function messArray1(array) {

    if (!Array.prototype.shuffle) {
        Array.prototype.shuffle = function() {
            for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
            return this;
        };
    }
    return array.shuffle();
}



console.log(messArray1(arr));