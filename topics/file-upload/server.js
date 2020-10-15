const http = require('http');
const url = require("url");
const fs = require('fs');
const path = require('path');

const fileStream = fileName => fs.createWriteStream(path.resolve(`./topics/file-upload/uploaded/${fileName}`));
const decodeContent = content => {
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

http.createServer((req, res) => {
    const { method } = req;
    const reqUrl = url.parse(req.url)
    const pathname = reqUrl.pathname;

    if (pathname === '/upload' && method === 'POST') {
        const arr = []
        req.on('data', buffer => {
            // 将前端传来的数据进行存储进缓存区
            arr.push(buffer);
        })

        req.on('end', () => {
            const buffer = Buffer.concat(arr);
            const content = buffer.toString();
            const fileName = content.match(/(?<=filename=").*?(?=")/)[0];
           
            const result = decodeContent(content); //解析请求体中的文件数据
            
            fileStream(fileName).write(result);

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('上传完成');
        })

    } else if (pathname === '/upload-noencode' && method === 'POST') {
        const fileName = reqUrl.query.split('=')[1];
        req.pipe(fileStream(fileName)); //直接读取req的数据到文件


        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('上传完成');
        })

    } else {
        res.writeHead(200, { 'content-type': 'text/html' })
        let filepath = path.resolve('./topics/file-upload/index.html')
        console.log(filepath);
        res.end(fs.readFileSync(filepath));
    }

}).listen(8080)