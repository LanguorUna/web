var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

// CRUD
router.get('/:id', userController.readUser);
router.post('/', userController.readUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;