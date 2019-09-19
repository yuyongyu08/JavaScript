var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/single-box.html');
});

app.get('/question', function (req, res) {
    res.sendFile(__dirname + '/现象及原因.html');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
