function counter(num) {
    console.log(`It\'s ${num} times`);

    this.count++;
    // counter.count++; //反证
}

counter.count = 0;

for (var i = 1; i <= 5; i++ ){
    counter(i)
}

console.log('counter.count:', counter.count);

//问题：执行count++后，仍然是0，那对哪个count做了操作？
// console.log('count:', count);
// console.log(global.count);