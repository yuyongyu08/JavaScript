const http = require('http');
const url = require("url");
const fs = require('fs');
const path = require('path');

const upload1 = require('./service/v1')
const upload2 = require('./service/v2')

const port = 8080;
http.createServer((req, res) => {
    const reqUrl = url.parse(req.url)
    const pathname = reqUrl.pathname;

    if (pathname === '/v1/upload') {
        upload1(req, res)
    } else if (pathname === '/v2/upload') {
        upload2(req, res)
    } else {
        res.writeHead(200, { 'content-type': 'text/html' })
        let filepath = path.resolve(__dirname, './index.html')
        console.log(filepath);
        res.end(fs.readFileSync(filepath));
    }

}).listen(port)

console.log(`server started! visit http://localhost:${port}/`);