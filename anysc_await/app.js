// ========= THE CALL STACK ====================//

// const multiply = (x, y) => x * y;

// const square = (x) => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//     return square(a) + square(b) === square(c);
// };

// isRightTriangle(3, 4, 5);

// ==========Single Threaded & Web APIs=========//

//Single threaded workaround (callbacks, setTimeout);

console.log('Sending a request to the server');
setTimeout(() => {
    console.log('Here is your data from mthe server');
}, 3000);
console.log('I am the last commant in the list');





