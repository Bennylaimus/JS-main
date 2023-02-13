// 1) Math.abs() ||| The Math.abs() method returns the absolute value of a number.
let number = 7.26
console.log(Math.abs(number)); // 7.26

number = -34.5;
console.log(Math.abs(number)); // 34.5

number = null
console.log(Math.abs(null)); // 0 (because of null - exeption)

number = 'hello'
console.log(Math.abs(number)); // NaN (because value is not a number)

number = (2 - 3);
console.log(number); // -1
console.log(Math.abs(number)) // 1

// ===================================================================

// 2) Math.ceil() ||| rounds a number rounded UP to the nearest integer. 

let numberTwo = 3.33
console.log(Math.ceil(numberTwo)); // 4

numberTwo = -23.7
console.log(Math.ceil(numberTwo)); // -23

numberTwo = 'hello'
console.log(Math.ceil(numberTwo)); // NaN , because numberTwo is not a number

numberTwo = null
console.log(Math.ceil(numberTwo)); // 0

numberTwo = -5.9
console.log(Math.ceil(numberTwo)); // 5

// ======================================================================

// 3) Math.floor() ||| rounds a number DOWN to the nearest integer.

let numberThree = 5.6
console.log(Math.floor(numberThree)); // 5

numberThree = 5.1
console.log(Math.floor(numberThree)); // 5

numberThree = -23.4
console.log(Math.floor(numberThree)); // -24

numberThree = -1.1
console.log(Math.floor(numberThree)); // -2

// ======================================================================

// 4) Math.max() ||| returns the number with the highest value.

console.log(Math.max(5, 10)); // 10

console.log(Math.max(-45.3, -46.1)); // -45.3

console.log(Math.max(0, -0.0001)); // 0 

console.log(Math.max(null, -25.1));// 0 (null sravnivajut s 0???)

// ======================================================================

// 5) Math.min() ||| returns the number with the lowest value.

console.log(Math.min(5, 10)); // 5

console.log(Math.min(-45.3, -46.1)); // -46.1

console.log(Math.min(0, -0.0001)); // 0 (?)

console.log(Math.min(null, -25.1)); // 0 (null sravnivajut s 0???)

// =====================================================================

// 6) Math.pow() ||| returns the value of x to the power of y (x v stepeni y).

console.log(Math.pow(2, 4)); // 2 v stepeni 4 (2*2*2*2) - 16

console.log(Math.pow(1, 3)); // 1

console.log(Math.pow(-1, 4)); // 1

console.log(Math.pow(2, 3.4)); // 10.243862872

// ======================================================================

// 7) Math.random() ||| A randon number between 0 and 1

console.log(Math.random()) // 0.008616644012898966

console.log(Math.random() * 10) // a random whole number between 0 - 10

console.log(Math.floor(Math.random() * 100)) // random whole number between 0 - 100

console.log(Math.floor(Math.random() * 10 + 1)) // random whole number between 1 - 10

console.log(Math.floor(Math.random() * 100 + 1)) // random whole number between 1 - 100

// ==========================================================================

// 8) Math.round() ||| rounds a number to the nearest integer 2.49 will be rounded down (2), and 2.5 will be rounded up (3).

console.log(Math.round(-33.8)); // -34

console.log(Math.round(-2.5)); // -3

console.log(Math.round(3.4)); // 3

console.log(Math.round(0.002)); // 0

// =============================================================================

// 9) Math.sign() ||| etuns whether a number is negative, positive or zero.
// If the number is positive, this method returns 1.
// If the number is negative, it returns -1.
// If the number is zero, it returns 0.

console.log(Math.sign(-33.55)) // -1 (number is negative)

console.log(Math.sign(56.77)) // 1 (number is positive)

console.log(Math.sign(0)) // 0 number is 0

// ===============================================================================

// 10) Math.sqrt() ||| returns the square root of a number. (vozvrashajet kvadratnij korent iz chisla)

console.log(Math.sqrt(4)) // 2

console.log(Math.sqrt(16)) // 4

console.log(Math.sqrt(25)) // 5

console.log(Math.sqrt(81)) // 9

// =================================================================================

// 11) Math.trunc() ||| returns the integer part of a number. ||| removes the decimals (does NOT round the number). (ne OKRUGLJAJET, a prosto ubirajet chisla posle zapjatoj)

console.log(Math.trunc(-8.99)); // -8

console.log(Math.trunc(5.9999)) // 5

console.log(Math.trunc(3.1)) // 3

console.log(Math.trunc(0.000001)) // 0

console.log(Math.trunc(-0.001911)) // -0

// ===================================================================================














