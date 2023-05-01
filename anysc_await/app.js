// ========= THE CALL STACK ====================//

// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c);
// };

// isRightTriangle(3, 4, 5);

//===================  SINGLE THREADED & WEB APIs =================//

//Single threaded workaround (callbacks, setTimeout);

// console.log('Sending a request to the server');
// setTimeout(() => {
//     console.log('Here is your data from mthe server');
// }, 3000);
// console.log('I am the last commant in the list');

//====================== THE CALLBACK HELL =========================//

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(() => {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

// // Or we can NEST everytnig:

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);

// You can also do a generic fucntion, so you don't need to hard-code color and delay seconds everytime,
// for example:

// const randomColorDelay = (color, delay) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//     }, delay);
//     doNext();
// };

// randomColorDelay('red', 3000);

// Or we can also pass another fucntion as an argument and the run this callback function, for example:

// const randomColorDelay = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext();
//     }, delay);
// };

// // randomColorDelay('red', 3000, () => {
// //     console.log('This is out doNext function');
// // });

// // And the our nexting will looks following:

// randomColorDelay('red', 3000, () => {
//     randomColorDelay('orange', 3000, () => {
//         randomColorDelay('yellow', 3000, () => {
//             randomColorDelay('blue', 3000, () => {

//             });
//         });
//     });
// });

// // Why to we need callbacks and nested functions like this?
// // As this is increabibly common patter, for example:

// movieSearchAPI('amadeus', () => {    // 1. our movieSearchAPI() function searches a movie from movie-API data base
//     saveToMyDB(movie, () => {        // 2. after movie is found we run saveToMyDB() function to save some 'movie' to my data base
//         () => {
//             // and if everything wen of, withour any errors do this:
//         }                        // 3.
//     }, () => {
//         // or, if something went wrong, and there is some errors - do this
//     })
// });

//===========================  ENTER PROMISES  ==================================//





