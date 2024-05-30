const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('Test worked')
});

app.listen(3000, () => {
    console.log('App listening on port 3000')
});

