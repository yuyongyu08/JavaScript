let express = require('express');
let router = express.Router();
let userService = require('../service/UserService')

router.get('/add', function (req, res, next) {
    let {username, password} = req.query
    userService.addUser(username, password)
    res.send('add user!');
});

router.get('/delete', function (req, res, next) {
    let userId = req.query.userId
    userService.deleteUser(userId)
    res.send('deleted user!');
});

router.get('/all', function (req, res, next) {
    userService.getAllUsers()
    res.send('get all users');
});

module.exports = router;
