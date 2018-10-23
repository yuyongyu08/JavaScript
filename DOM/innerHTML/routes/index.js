var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/iframe-1', function(req, res, next) {
    res.render('iframe-1');
});

router.get('/iframe-2', function(req, res, next) {
    res.render('iframe-2');
});

router.get('/iframe-3', function(req, res, next) {
    res.render('iframe-3');
});

module.exports = router;
