var express = require('express');
var app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/a', function (req, res) {
    res.sendFile(__dirname + '/a.html');
});

app.get('/data', function (req, res) {
    res.json({
        name: 'app1',
        msg: 'this data from ' + req.hostname
    });
});


var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
