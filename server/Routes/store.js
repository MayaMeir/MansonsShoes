require('../data/database');

const express = require('express');
const productModel = require('../Models/product');
const router = express.Router();



router.get('/all', (req, res) => {
    productModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:catagory', (req, res) => {
    productModel.find({ catagory: req.params.catagory }, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:collection', (req, res) => {
    productModel.find({ collection: req.params.collection }, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.post('/addNew', (req, res) => {
    // TODO : VALIDATION
    const product = new productModel(req.body);
    product.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    productModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    productModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;