const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    pic1: String,
    pic2: String,
    pic3: String,
    description: String,
    brand: String,
    collections: String,
    catagory: String,
    rating: Number
});

module.exports = mongoose.model('products', productSchema);