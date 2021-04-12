const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const sequelize = require('./db/sql')

const userRoute = require('./routes/userRoute')
app.use(express.json());
app.use('/user', userRoute)
// const Unique_code = require('./model/unique_code')
// const fs = require('fs');
// const parse = require('csv-parse');
// fs.readFile('../250_unique_codes.csv', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
//     parse(data, { columns: false, trim: true }, (err, dataa) => {
//         console.log(dataa)
//         dataa.forEach(ele => Unique_code.create({ voucher: ele[0] })
//             .then(() => {
//                 console.log('done')
//             })
//             .catch((error) => {
//                 console.log(error)
//             }));
//     })
// })
// db.execute('INSERT into unique_code(unique_code) VALUES(?)')

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(port, () => console.log(`Server is in session now on ${port}`));
}).catch(err => console.log(err))
