// Basically a separate file just to run and check our database in 'parallel' of main project

const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose.connect('mongodb://127.0.0.1:27017/FarmProducts')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('Problem with MongoDB Connection!')
        console.log(err)
    });

// const grapes = new Product({
//     name: 'Grapes',
//     price: 1.99,
//     category: 'fruit'
// });

// grapes.save()
//     .then(grapes => {
//         console.log(grapes)
//     })
//     .catch(error => {
//         console.log(error)
//     });

const seedsProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
];

// Now we inserting a whole array with insert many!
// INPORTANT! ALL array items should pass a validation!
// If not nothing will be inserted! (check some methods / middleware) to change this!
Product.insertMany(seedsProducts)
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    });


