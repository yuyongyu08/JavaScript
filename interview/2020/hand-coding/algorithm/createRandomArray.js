module.exports = function(length) {
    //TODO 更优雅的方式
    let arr = [];
    for (let i = 0; i < length; i ++){
        arr.push(Math.floor(Math.random() * 100))
    }

    return arr;
};