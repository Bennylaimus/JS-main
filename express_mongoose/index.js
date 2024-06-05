const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const Product = require('./models/products'); // requiring a 'Product' model, that we created and exported in models/product file.



mongoose.connect('mongodb://127.0.0.1:27017/FarmProducts')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('Problem with MongoDB Connection!')
        console.log(err)
    });



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })) // method for accesing req.body send using POST method in the submit form

app.listen(3000, () => {
    console.log('App listening on port 3000')
});

app.get('/products', async (req, res) => {
    const productsList = await Product.find({})
    res.render('products/productslist.ejs', { productsList });
});

app.get('/products/new', (req, res) => {
    res.render('products/new.ejs')
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const foundProduct = await Product.findById(id) // if you want to find by name for example - you can use findOne({...}) and set finding parameters
    console.log(foundProduct);
    res.render('products/productdetails.ejs', { foundProduct })
});


