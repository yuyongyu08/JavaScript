let cookieStr = '_ga=GA1.2.1517698722.1541992836; sf_remember=64c911652930a816b8d31c119a6867a8; _gid=GA1.2.736686587.1564994047; PHPSESSID=web1~v9vkc66bq8vau3orlavnhn5gvf; Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1564994721,1564994911,1565081848,1565082233; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1565231019';


function parseCookie(x = '') {
    return x.split(';').map(i => i.trim().split('=')).reduce((obj, [k, v]) => ({...obj, [k]: v}), {});
}

console.log(parseCookie(cookieStr));