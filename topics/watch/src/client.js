var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://localhost:3001/', 'my-protocol');

client.onerror = function () {
    console.log('Connection Error');
};

client.onopen = function () {
    console.log('WebSocket Client Connected');

    if (client.readyState === client.OPEN) {
        var number = Math.round(Math.random() * 0xFFFFFF);
        client.send(number.toString());
    }
};

client.onclose = function () {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function (e) {
    console.log("Received message");

    if (typeof e.data === 'string' && e.data) {
        console.log("Received: '" + e.data + "'");
        window.location.reload(true)
        // loadScript(`static/index.js?${new Date().getTime()}`)
    } else {
        console.log("closed");

        client.close()
    }
};

// function loadScript(src) {
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.src = src;
//     head.appendChild(script);
// }