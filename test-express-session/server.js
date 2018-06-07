var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')
var RedisStore = require('connect-redis')(session)

var app = express()

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({
        'host'     : '127.0.0.1',
        'port'     : '6379',
        'pass'     : '',
        "db"       : 1,
        'logErrors': true,
    }),
    secret: 'HFJ7S95KCYSKR75JFHSTRI48SLZNCM27'
}))

app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {}
    }

    // get the url pathname
    var pathname = parseurl(req).pathname

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

    next()
})

app.get('/foo', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/foo'] + ' times')
})

app.get('/bar', function (req, res, next) {
    res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

var port = 8080;
let server = app.listen(port, function () {
    console.log('Starting server at port : ', port)
});
