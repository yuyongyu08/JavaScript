//原始
let labelList = [
    {
        "id": 683022,
        "title": "中介勿扰",
        "select": true
    },
    {
        "id": 683023,
        "title": "一家人",
        "select": false
    },
    {
        "id": 683024,
        "title": "禁止养宠物",
        "select": true
    }
];

console.log(labelList.filter(item => item.select).map(item => item.id).join(','));

// //深拷贝出新的标签列表，仅对此列表进行操作！
// let newLabelList = JSON.parse(JSON.stringify(labelList));
//
//
// //是否改变的判断逻辑
// let changed = newLabelList.some(function (item, index) {
//     return item.select != labelList[index].select
// });
//
// console.log(changed);