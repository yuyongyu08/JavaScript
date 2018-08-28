var i = 5;

// while (i--){
//     setTimeout(function () {
//         console.log(i);
//     }, 0)
// }

//输出是什么？如何降序输出


//改进方案1
// while (i--){
//     setTimeout(function (t) {
//         console.log(t);
//     }, 0, i)
// }



while (i--){
    let t = i;
    setTimeout(function (t) {
        console.log(t);
    }, 0)
}
