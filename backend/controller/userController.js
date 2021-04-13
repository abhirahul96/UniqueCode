const sharp = require('sharp')

const User = require('../model/userModel')
const Unique_code = require('../model/unique_code')
const { validationResult } = require('express-validator');
const { options } = require('../model/userModel');
exports.addUser = async (req, res, next) => {
    try {
        // console.log(req.file)
        // console.log(validationResult(req.body).isEmpty())
        if (validationResult(req.body).isEmpty()) {
            // console.log(req.body)
            const unique = await Unique_code.findOne({ where: { voucher: req.body.unique_code } })
            console.log(unique)
            // console.log(unique.used, "check")
            if (unique == null || unique.used) {
                res.status(401).send('Check unique code')
            }
            else {
                const buffer = await sharp(req.file.buffer).png().resize(300, 300, { fit: sharp.fit.cover, withoutEnlargement: true }).toBuffer();
                User.create({
                    Name: req.body.Name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address,
                    unique_code: req.body.unique_code,
                    image: buffer
                }).then(async (result) => {
                    // console.log("hello")
                    // console.log(result, "result")
                    await unique.update({ used: 'true' })
                    res.status(200).send('Thank You')
                }).catch(err => { res.status(401).send(err) })
            }

        }
        else {
            res.status(401).send(new Error(validationResult(req)))
        }

    } catch (err) {
        res.status(400).send(err);
    }

}

// exports.addImage = async (req, res) => {
//     try {
//         const user = await User.findOne({ where: { id: req.body.id } });
//         console.log(user.image, req.file)
//         user.image = req.file.buffer
//         console.log(user)
//         await user.save();
//         res.send(user)
//     } catch (err) {
//         res.send(err)
//     }
// }

exports.getAvatar = async (req, res) => {
    try {

        const user = await User.findOne({ where: { id: req.params.id } })
        console.log(user)
        if (!user || !user.image) {
            throw new Error('user not found')
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.image)
    } catch (e) {
        res.status(400).send(e)
    }
}