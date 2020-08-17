#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
const { exec } = require('child_process');
const watcher = require('./build')
const http = require('http');

var server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

const port = 3001
server.listen(port, function () {
    console.log((new Date()) + ` Server is listening on port ${port}`);
});

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function (request) {
    var connection = request.accept('my-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);


            //推送更新
            watcher.start(function(){
                try {
                    console.log('execute: npm run build');
                    exec('npm run build');
                    console.log('send msg');
                    connection.sendUTF('builded');
                } catch (error) {
                    console.log(error);
                }
            })


        } else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

