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
        //方式1：Node.js将文件内容视为一个整体，为其分配缓存区并且一次性将文件内容读取到缓存区中。当读写大文件的时候，有可能造成缓存区“爆仓”。
        // fs.writeFileSync(newFilePath, fs.readFileSync(originFilePath))

        //方式2：node.js会将文件分成一块一块逐步操作，在读写文件过程中允许执行其他操作。node.js执行以下过程：1将需要写入的数据写入到一个内存缓存区；2待缓存区写满后再将缓存区中的内容写入到文件中；3重复执行步骤1和步骤2，知道数据全部写入文件为止。
        // fs.read(fs.openSync(originFilePath), Buffer.from([]), (err, bytes, buffer) => {
        //     fs.writeSync(fs.openSync(newFilePath), buffer)
        // })

        //方式3：读写过程更加可控。可以对读写文件的过程中进行监听，并定义相关的方法pause和resume暂停或恢复文件的读取操作，可以监听写入时缓存区数据是否已满或者是否已全部输出。
        fs.createReadStream(originFilePath).pipe(fs.createWriteStream(newFilePath))

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('上传完成');
    });
}