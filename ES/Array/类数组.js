/**
 * 类数组：有length属性的对象
 * 转数组方法
 */

function fn() {
    // const arr = [...arguments] 
    // const arr = Array.from(arguments) 
    const arr = Array.prototype.slice.call(arguments) 

    arr.forEach(element => {
        console.log(element);
    });
}

fn(1,2,3)