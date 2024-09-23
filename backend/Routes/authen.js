const express = require("express");
const User = require("../schemas/user");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');



const jwt_secret = "#iamtheonlyone"


router.post('/createuser',
    //validation for multiple parameters requir array 
    [body('username', 'enter a proper name').notEmpty().isLength({ min: 4 }),
    body('email', 'enter a proper email').notEmpty().isEmail(),
    body('password', 'password must contain atleast 5 letters ').notEmpty().isLength({ min: 5 })],

    async (req, res) => {
let success = false 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }


        try {
            let user = User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ success, errors: "user with this email already exists..." });

            }
            const salt = await bcryptjs.genSalt(10);
            let secpass = await bcryptjs.hash(req.body.password, salt);

            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: secpass

            })

            // user.save();
            console.log(user)
            const data = {
                user: { id: user.id }
            }

            const authtoken = jwt.sign(data, jwt_secret)
            res.json({ authtoken })
            // res.send("this is ecommerse website.. and user were creating..");

        } catch (error) {
            res.status(500).send("some error occured")
        }
    })


module.exports = router;