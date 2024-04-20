const express = require('express');
const app = express();

const path = require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4();

//======================================

app.listen(3000, (req, res) => {
    console.log('Listen On Port 3000');
});

app.get('/', (req, res) => {
    res.send('This is main page')
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=======================================

//Fake database:

allComments = [
    {
        comment: "I am the greatest programmerrrrr!",
        username: "Hackerrr",
        id: uuidv4(),
    },
    {
        comment: "There is snow outside today, wahoo!",
        username: "Snowman",
        id: uuidv4(),
    },
    {
        comment: "I like sk8ing",
        username: "Sk8ter Boy",
        id: uuidv4(),
    },
    {
        comment: "I like Pizzzzas",
        username: "PizzaHut",
        id: uuidv4(),
    },
];

// ========================================================

// 1st step of routing.txt:
app.get('/comments/mainpage', (req, res) => {
    console.log(allComments);
    res.render('mainpage.ejs');
});

// 2nd step of routing.txt:
app.get('/comments/form', (req, res) => {
    res.render('newcomment.ejs');
});

// 3rd step of routing.txt:
app.post('/comments/form', (req, res) => {
    allComments.id = uuidv4();
    const { comment, username, id } = req.body
    allComments.push({ comment, username, id });
    res.redirect('/comments/mainpage');
});

