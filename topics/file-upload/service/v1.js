const utils = require('../utils')
const { fileStream, decodeContent } = require('../utils')

module.exports = function (req, res) {
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
}