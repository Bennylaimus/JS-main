const express = require('express');
const app = express();
const path = require('path');
const allData = require('./data.json');
console.log(allData);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.get('/reddit', (req, res) => {
    res.render('home.ejs');
});











app.listen(3000, () => {
    console.log('Listening on port 3000');
});

