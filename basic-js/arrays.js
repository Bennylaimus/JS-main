// //** Creating arrays**/
// let arr = new Array();

// //or, more common way:

// const arrAnother = []; // <=== an empty array
// const days = ['Monday', 'Tuesday', 'Wednesday'];
// const numbers = [11, 5, 4, 13, 22, 7];
// const mixedArr = [true, NaN, 3, 'Hello', false, 4.33331, '0'];

// days.length // <== output '3'

// typeof days // <== output 'object'! (don't try to check if something is an array with typeof!)

// //** Accessing and modifying arrays**//

// days[1] // <=== output 'Tuesday' (index 1 of the array days)
// days[1][2] // <=== output 'e' (index 2 of the Tuesday)

// days[2] = Thursday; // <=== will change value of array on index 2 (Wednesday) to Thursday

// days[3] // undefined
// days[3] = Friday; // will add value Friday on position of index 3 of the array, which was empty (undefined) before

// //** Basic array methods**/

// let movieLine = ['andrew', 'john', 'bill'];

// // push() <=== adds an element to the END of the array
// movieLine.push('oliver'); // <=== ['andrew', 'john', 'bill', 'oliver'];

// // pop() <=== removes an element for the END of the array, RETURNS this one element to us and updates the array

// movieLine.pop(); // <=== remove and returns to us 'oliver', updates an array ['andrew', 'john', 'bill'];
// let person = movieLine.pop() // <==== person = 'oliver';


// // shift() <=== removes from the START of the array and RETURNES removed value and updates an array
// movieLine.shift(); // <=== return 'andrew', updates ana array ['john', 'bill'];

// // unshift() <==== adds to the START
// movieLine.unshift('Jura'); // <=== ['Jura', 'john', 'bill'];

// //concat()  <=== merge two arrays into new third array
// let arrOne = ['a', 'b', 'c'];
// let arrTwo = ['d', 'e', 'f'];
// let arrThree = arrOne.concat(arrTwo); // output arrThree = ['a', 'b', 'c', 'd', 'e', 'f'];

// //includes() <=== searches for a value (a boolean method, it return true or false)
// arrThree.includes('a'); // <=== returns true
// arrThree.includes('A'); // <=== returns false

// // indexOf() <=== returns the first index at which a given element can be found in the array, of -1 if it is not present
// const beasts = ['dog', 'cat', 'bird'];
// beasts.indexOf('cat'); // <=== returns (1) (index of 1)
// beasts.indexOf('Monkey'); // <=== returns (-1) (value not found)

// //reverse() <=== reverses an array in place. It is destructive method! It changes the original array!
// const count = ['one', 'two', 'three'];
// count.reverse(); // output ['three', 'two', 'one'];
// // count variable is now changed and is ['three', 'two', 'one'];

// //slice() <=== getting a portion a slice of an array
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// let colorful = rainbow.slice(); // returns the same array, a COPY of an array raibow
// rainbow.slice(3) // returns ['green', 'blue', 'indogo', 'violet'];
// rainbow.slice(2, 4) // ['yellow', 'green']; (starts from index 2 and stops BEFORE, not including index 4!)


// //splice() <=== changes the contents of an array by removing of REPLACING existing elements and/or adding new elements in place.
// rainbow.splice(5, 1); // returns ['indigo'];
// // 5 - start at index 5
// // 1 - how any values to delete starting from index 5 (delete only 1 value, which is 'indigo');
// rainbow.splice(1, 0, 'brown'); // returns [array and 'red', 'brown', 'orange'];
// // 1 - starting at index 1
// // 0 - delete nothing, 0
// // add 'brown' at index 1

// //sort() <=== convert all to the strings and them compare their UTF-16 code units values. More usefull with functions.

// //** Array equality!!!**//
// ['hi', 'bye'] === ['hi', 'bye'] // returns false!
// [1] === [1] // returns false!
//     [1] == [1] // returns false!

// // JS is NOT comparing a content inside and arrays!
// // It comparing a REFERENCES IN MEMORY!

// //** Accesing, changing nested arrays!**/

// airplaneSeats[3][1] = 'Hugo';








