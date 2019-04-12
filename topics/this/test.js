function fn(a, b, ...c) {
    console.log('fn.length:', fn.length);
    console.log('arguments.length:', arguments.length);
    console.log(Array.prototype.slice.call(arguments, 1));
    console.log(arguments)
    console.log();
}

fn(1, 2, 3, 4)


//1.乐高扣费（详情页-GET）
____json4fe.legoURL = '';


//2.精选展示（列表页-POST）
____json4fe.jingxuan_show = {
    url: '',
    data: {}
};