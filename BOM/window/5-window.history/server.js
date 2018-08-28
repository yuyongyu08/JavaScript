let path = require('path');
let express = require('express');
let app = express();

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/5-window.history.html');
});

let server = app.listen(8000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('server started at http://%s:%s', host, port);
});