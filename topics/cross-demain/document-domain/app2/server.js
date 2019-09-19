var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/single-box.html');
});

app.get('/b', function (req, res) {
    res.sendFile(__dirname + '/b.html');
});

app.get('/c', function (req, res) {
    res.sendFile(__dirname + '/c.html');
});

app.get('/data', function (req, res) {
    res.json({
        name: 'app2',
        msg: 'this data from ' + req.hostname
    });
});

var server = app.listen(9000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
