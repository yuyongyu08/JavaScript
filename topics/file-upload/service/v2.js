const url = require("url");

const { fileStream } = require('../utils');

module.exports = function (req, res) {
    const reqUrl = url.parse(req.url)

    const fileName = reqUrl.query.split('=')[1];
    req.pipe(fileStream(fileName)); //直接读取req的数据到文件


    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('上传完成');
    })

}