module.exports = function (left, right) {
    let leftValue = Object.getPrototypeOf(left);
    let rightValue = right.prototype;

    while (true){
        if (leftValue === null) return false;
        if (leftValue === rightValue) return true;

        leftValue = Object.getPrototypeOf(leftValue);
    }

    // return Object.getPrototypeOf(left) === right.prototype
}