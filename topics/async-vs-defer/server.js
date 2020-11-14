const http = require('http');
const url = require("url");
const fs = require('fs');
const path = require('path');


function staticFile(request, response) {
    console.log(request.url);

    let filePath = '.' + request.url;
    if (filePath == './') {
        filePath = './html/index.html'
    } else if (filePath == './normal') {
        filePath = './html/normal.html'
    } else if (filePath == './async') {
        filePath = './html/async.html'
    }else if (filePath == './defer') {
        filePath = './html/defer.html'
    } else if (filePath == './async-and-defer') {
        filePath = './html/async-and-defer.html'
    }

    filePath = path.resolve(__dirname, filePath)

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.mjs':
            contentType = 'text/javascript';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }

    fs.readFile(filePath, function (error, content) {
        if (error) {
            if (error.code == 'ENOENT') {
                response.writeHead(404);
                response.end('Sorry, not such file! 404!');
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}

const port = 8080;
http.createServer((req, res) => {
    staticFile(req, res)
}).listen(port)

console.log(`server started! visit http://localhost:${port}/`);