const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log('Connecting problem')
        console.log(err)
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price should be a positive, man!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 3
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

const Product = mongoose.model('Product', productSchema);

const bikeWear = new Product({ name: 'Bike Gloves', price: 5.99, categories: ['Cycling'], size: 'XS' });

bikeWear.save()
    .then(data => {
        console.log('Added!')
        console.log(data)
    })
    .catch(error => {
        console.log('Did not work!')
        console.log(error)
    });

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('Added!')
//         console.log(data)
//     })
//     .catch(error => {
//         console.log('Did not work!')
//         console.log(error)
//     });
