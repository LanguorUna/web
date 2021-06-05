var express = require('express');
var mainController = require('../controllers/mainController');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', mainController.login);

module.exports = router;