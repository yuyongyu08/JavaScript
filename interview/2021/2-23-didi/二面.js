let arr = [1, 2, 3, 4]

function shuffle(arr) {
    for (let index = arr.length - 1; index > 0; index--) {
        let random = Math.floor(Math.random() * index);
        [arr[random], arr[index]] = [arr[index], arr[random]]
    }

    return arr
}

// console.log(shuttle(arr))

const str = 'p12 a2b v8u 22c';

function sort(str) {
    return str.split(" ").sort((a, b) => {
        return Number(a.match(/\d+/g)[0]) > Number(b.match(/\d+/g)[0])
    }).join(" ");
}

console.log(sort(str))

