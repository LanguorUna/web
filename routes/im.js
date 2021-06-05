var express = require('express');
var router = express.Router();
var imController = require('../controllers/imController');
var mainController = require('../controllers/mainController');

/* GET users listing. */
router.get('/', mainController.sessionCheck, imController.page);

module.exports = router;
