const fs = require('fs');
const path = require('path');


module.exports = {
    fileStream: fileName => {
        return fs.createWriteStream(path.resolve(__dirname, `./uploaded/${fileName}`))
    },
    decodeContent: content => {
        let lines = content.split('\n');
        const findFlagNo = (arr, flag) => arr.findIndex(o => o.includes(flag));
        // 查找 ----- Content-Disposition Content-Type 位置并且删除
        const startNo = findFlagNo(lines, '------');
        lines.splice(startNo, 1);
        const ContentDispositionNo = findFlagNo(lines, 'Content-Disposition');
        lines.splice(ContentDispositionNo, 1);
        const ContentTypeNo = findFlagNo(lines, 'Content-Type');
        lines.splice(ContentTypeNo, 1);
        // 最后的 ----- 要在数组末往前找
        const endNo = lines.length - findFlagNo(lines.reverse(), '------') - 1;
        // 先反转回来
        lines.reverse().splice(endNo, 1);
        return Buffer.from(lines.join('\n'));
    }
}