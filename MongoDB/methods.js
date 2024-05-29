const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MethodTest')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log('Connecting problem')
        console.log(err)
    });

const dogsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Negative number!']
    },
    childFriendly: {
        type: Boolean,
        default: true
    }
})

// instance methods:

dogsSchema.methods.greet = function () {
    console.log('Woof, woof, woof!')
    console.log(`Said ${this.name}`)
};

dogsSchema.methods.toggleToFriendly = function () {
    this.childFriendly = !this.childFriendly
    return this.save() // (.save 'thenable', so we can return this 'Promise' and await it)
}

// instance methods:

// static methods:
dogsSchema.statics.updateAge = function () {
    return Dog.updateMany({}, { age: 3, childFriendly: true }) //can use .this.updateMany
};
// Dog.updateMany will work only on 'Dog' collection / class
// .this.updateMany will apply to any collection / class it is used: 'Dog', 'Cat', 'Birds' etc.


const Dog = mongoose.model('Dog', dogsSchema);

const findDoggy = async function () {
    const foundDoggy = await Dog.findOne({ name: 'Pokky' }) // foundDoggy is 'Archi' Object{}, which also will contain greet() according Schema
    foundDoggy.greet()
    console.log(foundDoggy)
    await foundDoggy.toggleToFriendly()
    console.log(foundDoggy)
};

findDoggy();

Dog.updateAge().then(response => console.log(response));

// Dog.insertMany([
//     { name: 'Bekky', age: 3 },
//     { name: 'Archi', age: 4 },
//     { name: 'Petty', age: 5, childFriendly: false },
//     { name: 'Pokky', age: 6, childFriendly: false },
//     { name: 'Eliza', age: 7 }
// ])
//     .then(data => {
//         console.log('Data Added')
//         console.log(data)
//     })



