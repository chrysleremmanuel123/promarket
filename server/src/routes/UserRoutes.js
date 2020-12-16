const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { signup } = require('../controller/UserController');


router.post('/signup', signup);

router.get('/', (req, res) => {
    User.find((err, docs) => {
        res.send(docs)
    })
})

module.exports = router;