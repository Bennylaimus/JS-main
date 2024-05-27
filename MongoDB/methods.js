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

dogsSchema.methods.greet = function () {
    console.log('Woof, woof, woof!')
    console.log(`Said ${this.name}`)
};

dogsSchema.methods.toggleToFriendly = function () {
    this.childFriendly = !this.childFriendly
    return this.save() // (.save 'thenable', so we can return this 'Promise' and await it)
}

const Dog = mongoose.model('Dog', dogsSchema);

const findDoggy = async function () {
    const foundDoggy = await Dog.findOne({ name: 'Pokky' }) // foundDoggy is 'Archi' Object{}, which also will contain greet() according Schema
    foundDoggy.greet()
    console.log(foundDoggy)
    await foundDoggy.toggleToFriendly()
    console.log(foundDoggy)
};

findDoggy();

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



