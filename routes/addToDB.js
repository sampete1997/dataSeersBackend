
const express = require('express')
const app = express()
const db = require('../models');
const { Validation } = require('../validation')


app.get('/showdb', (req, res) => {

    db.userData.findAll()
        .then((userdata) => {
            return res.status(200).json(userdata)
        })
        .catch((err) => {

            console.log('error', err)
            return res.status(400).json({

                'message': err
            })

        })
})


app.post('/login', (req, res) => {

    const { error } = Validation.loginValidation(req.body)

    if (error) {

        console.log('error', error);
        return res.status(400).json({
            "message": error
        })
    }

    else {

        db.userData.findAll({
            where: {
                email: req.body.email,
                mobileNo: req.body.mobileNo
            }
        })
            .then((response) => {

                return res.status(200).json(response)

            })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({

                    "message": err
                })
            })

    }
})

app.post('/addUser', async (req, res) => {


    const { error } = Validation.registerValidation(req.body)

    if (error) {

        console.log('error', error);
        return res.status(400).json({
            "message": error
        })
    }

    else {


        db.userData.create(req.body)
            .then((submitData) => {


                return res.status(200).json(submitData);
            })
            .catch(err => {
                console.log(err)
                return res.status(400).json({
                    "message":err
                })
            })

    }

})



app.put('/allow', (req, res) => {

    const { error } = Validation.flagValidation({

        flag: req.body.flag,

    })

    if (error) {

        console.log('error', error);
        return res.status(400).json({
            "message": error
        })
    }

    else {

        db.userData.update({

            flag: req.body.flag
        },
            {
                where: {

                    mobileNo: req.body.mobileNo
                }

            })
            .then((data) => res.status(200).json(data))
            .catch((err) => {

                console.log(err);

                return res.status(400).json({

                    "message": err
                })
            })
    }
})



app.put('/edit', (req, res) => {

    const { error } = Validation.editValidation(req.body)

    if (error) {

        console.log('error', error);
        return res.status(400).json({
            "message": error
        })
    }

    else {

        db.userData.update(req.body,
            {
                where: {

                    mobileNo: req.body.mobileNum
                }

            }).then((data) => {
                return res.status(200).json(data)
            })
            .catch((err) => {

                console.log(err)
                return res.status(400).json({
                    "message": err
                })
            })

    }
})



app.post("/delete", (req, res) => {

    const { error } = Validation.deleteValidation(req.body)

    if (error) {

        console.log('error', error);
        return res.status(400).json({
            "message": error
        })
    }

    else {

        db.userData.destroy({

            where: {

                mobileNo: req.body.mobileNo,
                email: req.body.email
            }

        }).then((data) => {
            return res.status(200).json(data)
        })
            .catch((err) => {
                console.log(err)
                return res.status(400).json({
                    "message": err
                })
            })

    }
});


module.exports = app