const express = require('express');
const app = express();

const path = require('path');

const { v4: uuidv4 } = require('uuid');
uuidv4();

const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('views', path.join(__dirname, '/views'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//======================================

app.listen(3000, (req, res) => {
    console.log('Listen On Port 3000');
});

app.use(function (req, res) {
    console.log('Any request');
    next();
});

app.get('/', (req, res) => {
    res.send('This is main page')
});

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

// '6a690a3d-03d2-4a08-8a64-967d3834beaa'

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
    res.redirect('/comments/mainpage');
});

// 4th step of routing.txt
app.get('/comments/:id', (req, res) => {
    const uniqueId = req.params.id;
    const uniqueComment = allComments.find(singleComment => singleComment.id === uniqueId);
    res.render('yourcomment.ejs', { uniqueId, uniqueComment });
});

// 4th step - 2nd part ==> transfering (GETing) Edit page:
app.get('/comments/:id/edit', (req, res) => {
    const uniqueId = req.params.id;
    const uniqueComment = allComments.find(singleComment => singleComment.id === uniqueId);
    res.render('editcomment.ejs', { uniqueId, uniqueComment });
});

app.patch('comments/:id/edit', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Patch OK');
    res.end();
    // const uniqueId = req.params.id;
    // const editedComment = req.body.comment;
    // const uniqueComment = allComments.find(singleComment => singleComment.id === uniqueId);
    // uniqueComment.comment = editedComment
    // res.redirect('/comments/mainpage');
});

// {
//     comment: "I like Pizzzzas",
//     username: "PizzaHut",
//     id: uuidv4(),
// },

// d672ba86-7fe2-45eb-989b-7716aa828645
// d672ba86-7fe2-45eb-989b-7716aa828645

