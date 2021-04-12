const { body } = require("express-validator");

exports.validateData = [
    body('emailId', 'emailId should be valid and is required').isEmail().exists(),
    body('Name', 'Name is required').exists(),
    body('phone', 'phone should be valid and is required').isLength({ min: 10 }).exists(),
    body('address', 'address is required').exists(),
    body('unique_code', 'unique_code is required').exists()
];
