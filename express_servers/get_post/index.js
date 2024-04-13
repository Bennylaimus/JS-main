const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
    console.log('Listen on port 3000');
});

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
    console.log(req.body); // returns Object { meat: 'veggei tacoss', quantity: '5' }
    const { meat, quantity } = req.body // using Object Destructing here
    res.send(`Here is your ${quantity} ${meat} tacos`)
});

// Creating a very simple REST principle Routing, using a code above:

// REST Routs we will be using:
// Index  /comments          GET - Display all comments
// New    /comments          GET - Form to create new comment
// Create /comments          POST - Creates new comment on server
// Show   /comments/:id      GET - Details for one specific comment
// Edit   /comments/:id/edit GET - Form to edit specific comment
// Update /comments/:id -    PATCH - Updates  specific comment on server
// Delete /comments/:id -    DELETE - Deletes specific item on server

// =====================================================================

// Starting with a 1st Route /comments (imitating a data base with list of comments)

const comments = [
    {
        username: 'Toddy',
        comment: 'Lol, so funny!',
    },
    {
        username: 'Sk8terBoi',
        comment: 'I love to skate!',
    },
    {
        username: 'Skylare',
        comment: 'Look, what I did yesterday!',
    },
    {
        username: 'Andzei',
        comment: 'Holalal, I am Mr. Andzei!',
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
});

// Creating a 2nd Route - where we can create and post a new comment

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');   // comment is GET'ed on the same comments/new route, but want to create a separate Route for it, so it is POST'ed somewhere!
});

// Creating 3rd Route for POST'ing a new comment (according REST template above)

app.post('/comments', (req, res) => {
    const { username, comment } = req.body // Destructuring 2 items from Object (username & comment)
    comments.push({ username, comment }); // Adding a new comment with  user name to comments just with .push
    res.redirect('/comments');
});

// After a new comment is created, we need to redirect user to the /comment page, where all the comments (including a new, created comment) are shown, using Express res.redirect() method for it! (doing this in above code)





