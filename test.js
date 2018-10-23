let debt =  [
    {
        text: '叔',
        value: 1.0
    },
    {
        text: '哥',
        value: 12.1
    },
    {
        text: '凤姐',
        value: 3.0
    },
    {
        text: '张起',
        value: 1.0
    }
]


let total =
console.log(debt.reduce(function (init, cur) {
    return  Number(init) + Number(cur.value)
}, 0));
