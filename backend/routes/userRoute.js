const path = require('path');

const multer = require('multer')

const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();

const validator = require('../Validation/validator')

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload a image"))
        }
        cb(undefined, true)
    }
})


router.post('/add-user', validator.validateData, upload.single('avatar'), userController.addUser)
// router.post('/add-user/avatar', upload.single('avatar'), userController.addImage)
router.get('/check_avatar/:id', userController.getAvatar)

module.exports = router