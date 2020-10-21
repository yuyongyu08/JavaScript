const utils = require('../utils');
const fs = require('fs');
const path = require('path');

const formidable = require('formidable');

const { fileStream, decodeContent } = require('../utils');
const { fstat } = require('fs');

module.exports = function (req, res) {
    // const arr = []
    // req.on('data', buffer => {
    //     // 将前端传来的数据进行存储进缓存区
    //     arr.push(buffer);
    // })

    // req.on('end', () => {
    //     const buffer = Buffer.concat(arr);
    //     const content = buffer.toString();
    //     const fileName = content.match(/(?<=filename=").*?(?=")/)[0];

    //     const result = decodeContent(content); //解析请求体中的文件数据

    //     fileStream(fileName).write(result);

    //     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    //     res.end('上传完成');
    // })

    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (err) {
            console.error(err.message);
            return;
        }

        let file = files.file
        const newFilePath = path.resolve(__dirname, `../uploaded/${file.name}`)
        const originFilePath = file.path

        //写文件
        //方式1：
        // fs.writeFileSync(newFilePath, fs.readFileSync(originFilePath))

        //方式2：
        // fs.read(fs.openSync(originFilePath), Buffer.from([]), (err, bytes, buffer) => {
        //     fs.writeSync(fs.openSync(newFilePath), buffer)
        // })

        //方式3：
        fs.createReadStream(originFilePath).pipe(fs.createWriteStream(newFilePath))

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('上传完成');
    });
}