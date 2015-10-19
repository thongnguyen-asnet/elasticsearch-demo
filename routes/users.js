var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

require('../db/schema/user')();


var UserModel = mongoose.model('place');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  var data = req.body;

  var user = new UserModel(data);

  console.log(data);

  user.save(function (err, user) {
    if (err) {
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
