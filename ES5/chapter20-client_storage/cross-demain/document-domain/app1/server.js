var express = require('express');
var app = express();


app.get('/a', function (req, res) {
    res.sendFile(__dirname + '/a.html');
});

app.get('/b', function (req, res) {
    res.sendFile(__dirname + '/b.html');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
