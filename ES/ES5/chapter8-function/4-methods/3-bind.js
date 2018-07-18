color = 'red';

var picker = {
    color: 'green'
};

function getColor() {
    console.log('current color:', this.color);
}

//bind()返回了一个改变了上下文的函数副本
let getCurrentColor = getColor.bind(picker);


getColor();
getCurrentColor();


function sum(value1, value2) {
    return value1 + value2
}

function callSum(value1, value2) {
    return sum.bind(this, value1, value2) // 必须逐个传参，和apply()的唯一区别
}

console.log(callSum(10, 20)());