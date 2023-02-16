//** Creating arrays**/
let arr = new Array();

//or, more common way:

const arrTwo = []; // <=== an empty array
const days = ['Monday', 'Tuesday', 'Wednesday'];
const numbers = [11, 5, 4, 13, 22, 7];
const mixedArr = [true, NaN, 3, 'Hello', false, 4.33331, '0'];

days.length // <== output '3'

typeof days // <== output 'object'! (don't try to check if something is an array with typeof!)

//** Accessing and modifying arrays**//

days[1] // <=== output 'Tuesday' (index 1 of the array days)
days[1][2] // <=== output 'e' (index 2 of the Tuesday)

days[2] = Thursday; // <=== will change value of array on index 2 (Wednesday) to Thursday

days[3] // undefined
days[3] = Friday; // will add value Friday on position of index 3 of the array, which was empty (undefined) before

//** Basic array methods**/

let movieLine = ['andrew', 'john', 'bill'];

// push <=== adds an element to the END of the array
movieLine.push('oliver'); // <=== ['andrew', 'john', 'bill', 'oliver'];

// pop <=== removes an element for the END of the array, RETURNS this one element to us and updates the array

movieLine.pop(); // <=== remove and returns to us 'oliver', updates an array ['andrew', 'john', 'bill'];
let person = movieLine.pop() // <==== person = 'oliver';


// shift <=== removes from the START of the array and RETURNES removed value and updates an array
movieLine.shift(); // <=== return 'andrew', updates ana array ['john', 'bill'];

// unshift <==== adds to the START
movieLine.unshift('Jura'); // <=== ['Jura', 'john', 'bill'];