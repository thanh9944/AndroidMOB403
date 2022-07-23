var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/getUser', function (rep, res) {
    fs.readFile('data/data.txt', function (err, data) {
        if (err != null) {
            res.send(err.message);
        } else {
            res.send(data.toString());
        }
    })
})

router.post('/createUser', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var data = {
        email: undefined,
        password: undefined
    }
    data.email = email
    data.password = password
    res.send(data)
})

module.exports = router;
