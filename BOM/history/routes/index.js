var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/testState', function(req, res, next) {
  res.render('pushState');
});

router.get('/testHash', function(req, res, next) {
    res.render('hash');
  });


module.exports = router;
