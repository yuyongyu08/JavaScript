// MM、hh、mm、ss都是从0开始记数
let d = new Date(2020, 8, 16, 12);
let end_time = parseInt(Date.parse(d) / 1000); //终止时间


function getCountdown() {
    var curr_time = parseInt(Date.parse(new Date()) / 1000);
    var diff_time = parseInt(end_time - curr_time);// 倒计时时间差

    if (diff_time <= 0) {
        return ''
    } else {
        var h = Math.floor(diff_time / 3600);
        var m = Math.floor((diff_time / 60 % 60));
        var s = Math.floor((diff_time % 60));
        
        let fmt = (i) =>{
            return i = i < 10 ? `0${i}` : i
        }

        return `${fmt(h)}:${fmt(m)}:${fmt(s)}`
    }
}


module.exports = getCountdown

