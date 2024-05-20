const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log('Connecting problem')
        console.log(err)
    });

// Definding a Schema:

const movieApp = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Making a Model:

const Movie = mongoose.model('Movie', movieApp);
// 1. Makes us a class 'Movie'
// !!! This Movie class becomes a 'movies' collection in 'movieApp' DB
// 2. We usually call a class same as String in the model
// 3. 'Movie' - needs to be a singular String, starting with an uppercase. Mongoose will 'transform' it! It will create a collection 'movies' (lowercase + 's')

// Making a new instance of Movie collection:
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// You can now load it from a node
// node ==> .load mongooseconnect.js
// amadeus ==> will dispaly a new created instance of Movie collection
// amadeus.save()

const KittensSchema = new mongoose.Schema({
    name: String,
    age: Number,
    childFriendly: Boolean
});

const Kitten = new mongoose.model('Kitten', KittensSchema);

const betty = new Kitten({ name: 'Betty', age: 5, childFriendly: true });
