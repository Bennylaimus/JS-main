const mongoose = require('mongoose'); // need to 'require' mongoose here as we will build a mongoose model in this file.

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        reqiured: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; // exporting a model to use it somewhere else




