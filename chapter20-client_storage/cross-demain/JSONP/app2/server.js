var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/ip', function (req, res) {
    var _callback = req.query.cb;
    // 这个responseData是后台要传回给前台的数据
    var responseData = { ip: '192.168.25.17'};
    if (_callback){
        // 这两步设置发送也是Node.js发送JSONP必备
        // res.type('text/javascript');
        res.send(_callback + '(' + JSON.stringify(responseData) + ')');
    }
    else{
        res.json(responseData);
    }
});


var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
