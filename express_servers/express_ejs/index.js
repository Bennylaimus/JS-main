const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // __dirname + /views (we are putting togethew index.js file's directory with /views), so we can run it from other working directories

app.get('/', (req, res) => {
    res.render('home.ejs');        // by defauls it will 'look' in views/home.ejs (in views directory)
})

app.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { rand: number });
})

app.get('/random2', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1
    res.render('random2.ejs', { num: number });
})

app.get('/r/:subreddit', (req, res) => {
    const subtheme = req.params.subreddit
    res.render('subtheme', { subtheme });
})

app.listen(3000, (req, res) => {
    console.log('Starting to listen on port 3000');
})

// express_ejs / views // run node index.js (works)
// express_servers / express_ejs / views // run node express_ejs/index.js (will run index.js, but ejs will not work, as it will set path to views in the currecnt directory you are running command from): (express_servers/views) - will try to look for views in directory you are running node index.js from  
