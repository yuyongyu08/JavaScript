
let o = [
    '<h2 class="jg-title">{{t_title}}<a href="//c.58cdn.com.cn/zt/house/zhanling/index.html" class="jg-hot-wrap">hot</a></h2>',
    '<ul class="jg-command-house-wrap">'
].join('');

console.log(o);

let adTip = '<span class="ad">广告</span>';
let a = 'sh1'

let o1 = [
    '<h2 class="jg-title">{{t_title}}',
    '<a href="//c.58cdn.com.cn/zt/house/zhanling/index.html" class="jg-hot-wrap">hot</a>',
    a == 'sh' ? adTip : '',
    '</h2>',
    '<ul class="jg-command-house-wrap">'
].join('');

console.log(o1, 'color:red');