const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listen on port 3000');
});

app.use(express.urlencoded({ extended: true }))

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
});

app.post('/tacos', (req, res) => {
    console.log(req.body); // returns Object { meat: 'veggei tacoss', quantity: '5' }
    const { meat, quantity } = req.body // using Object Destructing here
    res.send(`Here is your ${quantity} ${meat} tacos`)
});

