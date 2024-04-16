const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

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
        id: uuidv4(),
        username: 'Toddy',
        comment: 'Lol, so funny!',
    },
    {
        id: uuidv4(),
        username: 'Sk8terBoi',
        comment: 'I love to skate!',
    },
    {
        id: uuidv4(),
        username: 'Skylare',
        comment: 'Look, what I did yesterday!',
    },
    {
        id: uuidv4(),
        username: 'Andzei',
        comment: 'Holalal, I am Mr. Andzei!',
    },
];

// Index  /comments          GET - Display all comments
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
});


// Creating a 2nd Route - where we can create and post a new comment

// New    /comments          GET - Form to create new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');   // comment is GET'ed on the same comments/new route, but want to create a separate Route for it, so it is POST'ed somewhere!
});

// Creating 3rd Route for POST'ing a new comment (according REST template above)

// Create /comments          POST - Creates new comment on server
app.post('/comments', (req, res) => {
    const { username, comment } = req.body // Destructuring 2 items from Object (username & comment)
    id = uuidv4(); // or {username, comment, id: uudiv4()}
    comments.push({ username, comment, id }); // Adding a new comment with  user name to comments just with .push
    res.redirect('/comments');
});

// After a new comment is created, we need to redirect user to the /comment page, where all the comments (including a new, created comment) are shown, using Express res.redirect() method for it! (doing this in above code)

// Creating a 4th Route, which leads to specific post - id, and will allow us to see a specific user's post ID.

// Show   /comments/:id      GET - Details for one specific comment
app.get('/comments/:id', (req, res) => {
    const { id } = req.params; // Using Object destructing here
    const commentId = comments.find(c => c.id === id);
    // console.log(commentId) // в commentId храниться весь объект c (commentId = c)
    res.render('comments/singlecomment.ejs', { commentId });
});

// Creatinf a 5th Route, - updating an existing, specific comment with PATCH

// Update /comments/:id -    PATCH - Updates  specific comment on server
app.patch('/comments/:id', (req, res) => {
    // console.log(req.body);
    const newComment = req.body.comment // updatedComment is name='updatedComment'

    // console.log(req.params);
    const { id } = req.params; // 1) we need to takes that specific id

    const commentId = comments.find(c => c.id === id); // 2) we need to fing a specific comment, that id is reffering to

    commentId.comment = newComment
    res.redirect('/comments');
    // console.log(commentId.comment);
    // 3) then we need to update this comment (commentId.comment) with something we send in a request body (req.body)
});

// Creating 6th Route 'Edit' (creating a form to submit an edit information GET a form)

//Edit   /comments/:id/edit GET - Form to edit specific comment

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params; // or req.params.id
    const commentId = comments.find(c => c.id === id);
    res.render('comments/edit.ejs', { commentId });
});






