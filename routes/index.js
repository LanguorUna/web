var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.sessionCheck, indexController.page);

// Обработчик POST запроса на localhost:3000/api
router.post('/api', function(req, res, next) {
  var message = `Ваша оценка - ${req.body.ocenka}, потому что - ${req.body.why || "Не указано"}`
  res.send(message)
});

module.exports = router;
