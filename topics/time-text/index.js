function getTimeText(time) {
    let now = new Date().valueOf();
    let difference = now - time;console.log(difference);
    let text = '';

    switch (true){
        case difference > 24 * 60 * 60 * 1000: //大于24小时，显示：yyyy-mm-dd
            let date = new Date(time);
            let Y = date.getFullYear();
            let M = (date.getMonth() + 1).toString().padStart(2, "0");
            let D = date.getDay().toString().padStart(2, "0");
            text = `${Y}-${M}-${D}`;
            break;
        case difference  > 60 * 60 * 1000: //1小时-24小时内，显示：XX小时前
            text = `${Math.floor(difference / (60 * 60 * 1000))}小时前`;
            break;
        default: //1小时内，显示：XX分钟前
            text = `${Math.floor(difference / (60 * 1000))}分钟前`;
            break
    }
    return text
}

let date = new Date('2019-8-9 10:25:11');

console.log(getTimeText(1554910738*1000));
console.log(getTimeText(date.valueOf()));
