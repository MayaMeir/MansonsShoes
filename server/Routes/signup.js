require('../data/database');

const express = require('express');
const userModel = require('../Models/user');
const router = express.Router();


router.post('/', (req, res) => {
    const user = new userModel(req.body);
    user.save().then(() => res.send("success"));
});


module.exports = router;