
try {
    var ____json4fe = {'catentry':[{'dispid':1,'name':'房产信息','listname':'house'},{'dispid':37031,'name':'出租','listname':'chuzu'}],'locallist':[{'dispid':'1','name':'北京','listname':'bj'},{'dispid':1,'name':'北京','listname':'bj'}],'start':'0.74714300 1555581317','modules':'list','ssp_abtest':'legoC_fc','slotIds':'5,16,1000008,1000009,1000010,1000011,1000012,1000013,1000169','req_version':'1.0.0'};
    console.log(____json4fe.modules);
    ____json4fe.version = 'fangchan_list_pc_0004';
    ____json4fe.smsc = "0ab2e8dd936f99800ca3584af79e54f62e0583c5448261c316875c8f5e7df77bc3ea86dcd78ee48d7ba3fc4f83f4660549ab66e14b75d9037142543b53f4147c13bf0e4d4cab8679b4eb830ef408d5a5cd9be7889be9a89add15031d2371b07f7e89b708b31687a9f36ed68814d344f7";
    ____json4fe.modules = 'listpage';
    ____json4fe.isPersonal = "0";
    ____json4fe.sid = "114865185203893154409228654";
    ____json4fe.sessionid = '';
    ____json4fe.pageIndex = 1;
    ____json4fe.newSearch = "1";
    ____json4fe.searchUrl = "https://bj.58.com/chuzu/?newSearch=1&key=";
    ____json4fe.newImVersion = true;

    // console.log(____json4fe);

} catch (e) {
}

var isObject = function isObject(o) {
    return Object.prototype.toString.call(o) == '[object Object]';
};

var isDate = function isDate(o) {
    return Object.prototype.toString.call(o) == '[object Date]';
};

var isArray = function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
};

function deepClone(p) {
    var c = void 0;
    switch (true) {
        case isDate(p):
            c = new Date();
            c.setTime(p.getTime());
            break;
        case isArray(p):
            c = [];
            for (var i = 0, len = p.length; i < len; i++) {
                c[i] = deepClone(p[i]);
            };
            break;
        case isObject(p):
            c = {};
            for (var _i in p) {
                if (p.hasOwnProperty(_i)) {
                    c[_i] = deepClone(p[_i]);
                };
            };
            break;
        default:
            c = p;
    };
    return c;
};

let a = deepClone(____json4fe);

console.log(a);