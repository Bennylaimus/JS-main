const express = require('express');
const app = express();

const path = require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4();

const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));

//=======================================

//Fake database:

let allComments = [
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

'6a690a3d-03d2-4a08-8a64-967d3834beaa'

// ========================================================

// 1st step of routing.txt:
app.get('/comments/mainpage', (req, res) => {
    res.render('mainpage.ejs', { allComments });
});

// 2nd step of routing.txt:
app.get('/comments/form', (req, res) => {
    res.render('newcomment.ejs');
});

// 3rd step of routing.txt:
app.post('/comments/mainpage', (req, res) => {
    const { comment, username } = req.body
    id = uuidv4();
    allComments.push({ comment, username, id });
    console.log(req.body.comment);
    res.redirect('/comments/mainpage');
});

app.get('/comments/:id', (req, res) => { // Edit ==> /comments/:
    const uniqueId = req.params.id;
    // console.log(uniqueId);
    const uniqueComment = allComments.find(singleComment => singleComment.id === uniqueId);
    res.render('editcomment.ejs', { uniqueId, uniqueComment });
});

app.patch('comments/:id', (req, res) => {
    const uniqueId = req.params.id;
    console.log(uniqueId);
    const newComment = req.body.comment;
    const uniqueComment = allComments.find(singleComment => singleComment.id = uniqueId);
    uniqueComment.comment = newComment
    res.redirect('/comments/mainpage');
});

