var express = require('express');
var userController = require('../controllers/userController');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('register', {});
});

router.post('/', userController.createUser);

module.exports = router;