const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.log('Problem with MongoDB Connection!')
        console.log(err)
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('Test worked')
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
});

