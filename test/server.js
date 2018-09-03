var express = require('express');
var app = express();


app.get('/test.html', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});
app.get('/test.css', function (req, res) {
    res.sendFile(__dirname + '/test.css');
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
