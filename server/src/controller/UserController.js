const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) return res.status(400).json({
                message: 'User already found'
            });


            const _user = new User(req.body)
            _user.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
            console.log(req.body);
            console.log(_user);
            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: error
                    });
                }
                if (data) {
                    return res.status(201).json({
                        message: `User created successfully`
                    })
                }
            })
        })
}

// exports.signin = (req, res) => {
//     User.findOne({ email: req.body.email })
//         .exec((error, user) => {
//             if (error) return res.status(400).json({ error });
//             if (user) {
//                 if (user.authenticate(req.body.password)) {
//                     const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//                     const {_id,firstName,lastName,email,role,fullName} = 
//                 }
//             }
//         })
// }