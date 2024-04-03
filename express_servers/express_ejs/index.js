const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // __dirname + /views (we are putting togethew index.js file's directory with /views), so we can tun it from othe working directories

app.get('/', (req, res) => {
    res.render('home.ejs');        // by defauls it will 'look' in views/home.ejs (in views directory)
})

app.listen(3000, (req, res) => {
    console.log('Starting to listen on port 3000');
})

// express_ejs / views // run node index.js (works)
// express_servers / express_ejs / views // run node express_ejs/index.js (will run index.js, but ejs will not work, as it will set path to views in the currecnt directory you are running command from): (express_servers/views) - will try to look for views in directory you are running node index.js from  
