var express = require('express');
var router = express.Router();
var fs=require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('getUser',function (rep,res) {
  fs.readFile('data/data.txt',function (err,data) {
    if (err!=null){
      res.send(err.message);
    }else {
      res.send(data.toString());
    }
  })
})
module.exports = router;
