const User = require('../model/userModel')
const Unique_code = require('../model/unique_code')
const { validationResult } = require('express-validator');
exports.addUser = async (req, res, next) => {
    try {
        console.log(validationResult(req.body).isEmpty())
        if (validationResult(req.body).isEmpty()) {
            console.log(req.body)
            const unique = await Unique_code.findOne({ where: { voucher: req.body.unique_code } })
            console.log(unique)
            // console.log(unique.used, "check")
            if (!!Boolean(unique.used)) {

                User.create({
                    Name: req.body.Name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    unique_code: req.body.unique_code
                }).then(async (result) => {
                    console.log("hello")
                    console.log(result, "result")
                    await unique.update({ used: 'true' })
                    res.status(200).send('done')
                }).catch(err => { res.status(401).send(err) })

            }
            else {
                res.status(401).send(new Error('Check unique code'))
            }

        }
        else {
            res.status(401).send(new Error(validationResult(req)))
        }

    } catch (err) {
        res.status(400).send(err);
    }

}