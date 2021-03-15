const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    mainPicSrc: String,
    description: String,
    brand: String,
    collections: String,
    catagory: String,
    rating: Number
});

module.exports = mongoose.model('products', productSchema);