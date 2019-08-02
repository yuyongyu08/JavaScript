let arr = [1, 2, 3, 4, 5];

console.log(arr.find(function (value, index, array) {
    return value >= 2
})); // 2

console.log(arr.find(item => item >=2)); // 2


let person = {
    id: '1',
    name: 'yuyy'
};

let personList = [
    person,
    {
        id: '2',
        name: 'yyy'
    }
];

console.log(personList.find((v) => v.id==1 || v.id==2)); //{ id: '1', name: 'yuyy' }