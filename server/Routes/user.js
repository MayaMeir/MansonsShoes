require('../data/database');

const express = require('express');
const userModel = require('../Models/product');
const router = express.Router();



router.get('/all', (req, res) => {
    userModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:id', (req, res) => {
    
    userModel.find({$and: [{email: req.body.email}, {password: req.body.password}]}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })
 

});


router.post('/signup', (req, res) => {
    // TODO : VALIDATION
    const product = new userModel(req.body);
    product.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    userModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    userModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;