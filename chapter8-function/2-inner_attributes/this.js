
message = 'global';

function sum(num1, num2){
    console.log('this.message:', this.message); //this为执行环境
    return num1 + num2
}

sum(10, 20, 30);


