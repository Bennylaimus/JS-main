const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.log('Connecting problem')
        console.log(err)
    });

const personsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

personsSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
});

personsSchema.pre('save', async function () {
    this.firstName = 'Dodo'
    this.lastName = 'Daboi'
    console.log('Pre save console message')
});

personsSchema.post('save', async function () {
    console.log('Post saved console message')
});

const Person = mongoose.model('Person', personsSchema);

