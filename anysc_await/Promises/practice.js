// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// };

// CREATING OUR OWN PROMISES //

// FIRST 'PART' OF PROMISES
//1 step - kew word new Promise
//2 step - new Promise expects us to pass in 2 callback functions as a parametrs
// First function (usually called 'resolved') will handle only 'good' outcomes ('resolved', 'fulfilled')
// Second function (usually called 'rejected') will handle only 'bad' outcomes ('rejected')
//3 step - we write logic - when, at what conditions resolved will work, and when reject will work
// We can even call this functions by their own simply write resolve() inside a Promise
//4 step - in the 'resolve' and 'reject' functions we can pass their own parameters like this: resolve('Good output');
// or rejected('Bad output')

// SECOND 'PART' OF PROMISES:
//1 step - we can create our own function, which will accept for example one parametr (url) and this function will return our Promise
// const fakeReguestData = (ulr) => {
//     return new Promise ...
//}
//2 step - all 'positive', resolved values will be captured in .then(() => {})
//2.1 step - (see FIRST 'PART' step 4): .then(data) => {console.log(data)} - data will store 'Goog output' value!
//3 step - all 'negative', rejected values will be captured in .catch(() => {});
//2.2 step - (see FIRST 'PART' step 4): .catch(error) => {console.log(error)} - data will store 'Goog output' value!
//4 step .then and .catch methods are called on the functions:
// fakeReguestData('www.google.com').then((data) => {console.log(data)})
// fakeReguestData('www.google.com').catch((error) => {console.log(error)})

//Smoothier syntax using return:

//fakeReguestData('www.google.com/page1')
//  .then(() => return fakeReguestData('www.google.com/page2'))
//  .then(() => return fakeReguestData('www.google.com/page3'))
//  .then(() => return fakeReguestData('www.google.com/page4'))
//  .catch((error) => console.log(error))          // only one .catch can be used in this case in the end