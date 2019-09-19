var express = require('express');
var cookieParser = require('cookie-parser');

var app = express()

app.use(cookieParser())

app.use(function (req, res, next) {
   console.log(req.originalUrl, ' ', req.method);
   console.log('cookies', req.cookies);
    next();
});


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://app1.example.com:8000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "X-Custom-Header");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/single-box.html');
});

app.put('/cors', function (req, res) {
    res.cookie('name', 'yuyy123', {domain: 'fe.sso-dev-1.com'});
    // res.send('success!')
    res.redirect('/cors/2')
});

app.put('/cors/2', function (req, res) {
    res.send('success again!')
});

var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
