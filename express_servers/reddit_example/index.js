const express = require('express');
const app = express();
const path = require('path');
const allData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'assets')));

// app.use(express.static('assets'));


app.get('/r/:subreddit', (req, res) => {
    const subtheme = req.params.subreddit
    const data = allData[subtheme];
    if (data) {
        res.render('home.ejs', { ...data }); // now he have in {} { name, subscriber, description ..} and ALL of the object 'Chickens', so in ejs we can use just one specific variable, like 'name'
    } else {
        res.render('nodata.ejs', { subtheme });
    }

    console.log(data);
});











app.listen(3000, () => {
    console.log('Listening on port 3000');
});

