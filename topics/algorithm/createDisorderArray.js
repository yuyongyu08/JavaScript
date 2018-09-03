let createDisorderArray = function(length) {
    return new Array(length).map(((value, index) => value = index+11));
};

export default createDisorderArray;