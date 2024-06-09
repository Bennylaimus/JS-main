const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

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

app.use(express.urlencoded({ extended: true })); // method for accesing req.body send using POST method in the submit form
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log('App listening on port 3000')
});

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const { category } = req.query
    if (category) {
        const product = await Product.find({ category })
        res.render('products/productslist.ejs', { product })
    } else {
        const product = await Product.find({})
        res.render('products/productslist.ejs', { product });
    }
});

app.get('/products/new', (req, res) => {
    res.render('products/new.ejs', { categories })
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.redirect(`products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id) // if you want to find by name for example - you can use findOne({...}) and set finding parameters
    res.render('products/productdetails.ejs', { product })
});

// GETing prepapulated form (form prepapulated with product info, using 'value')
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit.ejs', { product, categories });
});

//Now UPDATING getted, prepopulated form usinf PUT method
app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')
});



