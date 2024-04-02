const express = require('express');
const app = express();

// app.use((req, res) => {
//     res.send({ color: 'red', isAdmin: true });
// })

app.get('/', (req, res) => {
    res.send('Welcome to a home page! Yahooo! Yuppiii!')
})

app.get('/dogs', (req, res) => {
    res.send('Welcome to dogs section, woof!');
})

app.get('/cats', (req, res) => {
    res.send('Welcome to cats section, meow!');
});

app.get('/r/:subpath/:postID', (req, res) => { // subpath = 'chickens'
    const subtheme = req.params.subpath
    const postId = req.params.postID
    console.log(req.params);
    res.send(`<h1>Post with ${postId} to a ${subtheme} theme`);
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send('Hello');
})

app.listen(3000, () => {
    console.log('Listening on port: 3000');
})


