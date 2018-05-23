//arguments.length:实参个数，而不是形参个数

function sum(num1, num2){
    console.log('typeof arguments:', typeof arguments); //类数组对象
    for (let prop in arguments){
        console.log(arguments[prop]);
    }
    console.log('arguments.length:', arguments.length);


    return num1 + num2
}

sum(10, 20, 30);


