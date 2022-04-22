function sum(...args) {
    let allArgs = [];
    const add = (...args1) => {
        allArgs = allArgs.concat(args).concat(args1);
      return add;
    };
    
    add.valueOf = add.toString = () => {
       return allArgs.reduce((pre, cur) => pre + cur, 0);
    }
    return add;
  };
 
console.log(+sum(1)(2)(3)(4));


function multi(args) {
    var result = [];
    var add = (...args1) => {
      result = result.concat(args).concat(args1);
      return add;
    };
    
    add.valueOf = add.toString = () => {
       return result.reduce((pre, cur) => pre * cur);
    }
    return add;
}

console.log(+multi(1)(2)(3));

