const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
// const upload = multer({dest: 'uploads/'})
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });

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

router.post('/createUser', upload.single('avatar'), function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const data = {
        email: undefined,
        password: undefined,
        avatar: undefined,
        urlAvatar: undefined
    };
    data.email = email
    data.password = password
    data.avatar = req.file.originalname
    data.urlAvatar = req.file.dependencies
    res.send(data)
})

module.exports = router;
