const path = require('path');

const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();

const validator = require('../Validation/validator')


router.post('/add-user', validator.validateData, userController.addUser)

module.exports = router