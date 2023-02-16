// ************* ARRAY METHODS ******************************************************

//1) array.push() - Add a value to the end of the array (like push someone to the end of the line!)
let movieLine = ['tom', 'jerry', 'nancy', 'meggy'];
movieLine.push('colt');

// multiple values can be pushed! - movieLine.push('colt', 'bella', 'andrew')

console.log(movieLine); // ['tom', 'jerry', 'nancy', 'meggy', 'colt'];

//2) array.pop() - Removes the last value from the array (from the end!) (like pop the last baloon and it's expode!)
let movieLineTwo = ['jill', 'jimmy', 'lisa', 'bart'];
movieLineTwo.pop();

// can be captured in a variable!
// let person = movieLineTwo.pop() // person = 'bart'

console.log(movieLineTwo); // ['jill', 'jimmy', 'lisa']

//3) array.shift() - Removes the first valud from the array line, from the start! (shift like a car with a paw against first standing)

let movieLineThree = ['bart', 'betty', 'bella', 'baggy'];
movieLineThree.shift();

console.log(movieLineThree); // ['betty', 'bella', 'baggy']

//4) array.unshift() - Adds a first value to the beginning of an array line, from the start (opposite shift, which removes, unshift adds!)

let movieLineFour = ['bell', 'carl', 'colt'];
movieLineFour.unshift('andrew');

// multiple values can be unshifted - mivieLineFour.unchift('andrew', 'beggy');

console.log(movieLineFour) // ['andrew', 'bell', 'carl', 'colt']

//5) array.concat(array2) - concationate array1 and array2 and make a NEW third array!
let listOne = ['a', 'b', 'c'];
let listTwo = ['d', 'e', 'f'];

let listThree = listOne.concat(listTwo);
console.log(listThree) // ['a', 'b', 'c', 'd', 'e', 'f']; !!! Array1 is NOT updated!

//6) array.includes() - a boolean method - returns true or false
//From previous example Nr. 5:
console.log(listOne.includes('a')) // true
console.log(listOne.includes('A')) // false (case sensetive!)
console.log(listThree.includes('a', 'c', 'f')) // true

let listFour = ['tom', 'jerry'];
console.log(listFour.includes('om')); // false
console.log(listFour.includes('jerry')); // true

//7) array.indexOf() - works same as in Strings
let testArray = ['baiba', 'mudite', 'zane', 'kaspars'];
console.log(testArray.indexOf('mudite')); // 1
console.log(testArray.indexOf('daniels')); // -1 (there is no Daniels in this array);
console.log(testArray.indexOf('baiba')); // 0

//8) arrat.lastIndexOf - works same as lastIndexOf String
let testArrayTwo = ['baiba', 'paula', 'karlis', 'baiba'];
console.log(testArrayTwo.lastIndexOf('baiba')); // 3 - show the LAST accuranse (position) of the string in the array

//9) array.reverse() - reverse an array from right to left.
// CAREFUL - reverse method os a DESTRUCTIVE method! It changes an original array!
let countOne = ['one', 'two', 'three'];
console.log(countOne.reverse()) // ['three', 'two', 'one'];
console.log(countOne); // ['three', 'two', 'one']; - original array is now changed after reverse() is used on him.

//10) array.join() - returns an array as a string!
let fruitList = ['apple', 'banana', 'orange'];
console.log(fruitList.join()) // apple,banana,orange - a one string. The ',' separator is used by default, but it can be changed!
console.log(fruitList.join(' and ')); // apple and banana and orange
//! join()method does not change an origina array!

//11) array.slice() - makes a new portion (slice) of an existing array
let myColors = ['red', 'yellow', 'blue', 'purple', 'black', 'white', 'green'];
console.log(myColors.slice()); // ['red', 'yellow', 'blue', 'purple', 'black', 'white', 'green'] - make a NEW second array!
console.log(myColors.slice(3)); // starts at index 3 and goes up till the end of the array ['black', 'white', 'green'];
console.log(myColors.slice(2, 4)); // a start position and end position, but NOT including this position! ['blue', 'purple'] - so prints out an index 2 and 3!
console.log(myColors.slice(-2)); // will start from the end of an array and return 2 indexes starting the the end! ['white', 'green'];

//12) array.splice() - similar as slice, but does a little bit more and it is DESTRUCTIVE method, it changes an original array!
let months = ['Jan', 'March', 'April', 'May', 'June', 'July', 'August'];
console.log(months.splice(1, 0, 'Feb')); // ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August']
//Syndax:
// '1' - specifies a position from where to START! (start at index 1);
// '0' - specifies how many things we want to DELETE! (starts and includes a starting index '1' in this case) (we don't want to delete nothing, so DELETE = 0)
// 'Feb' - specifies what we want to insert

//RETURNS to us DELTED part of an array andter splice() is used and CHANGES an original array!
console.log(months.splice(1, 1)) // ['Feb'] in our case as Feb is now on index 1
console.log(months) // ['Jan', 'March', 'April', 'May', 'June', 'July', 'August']; - Feb is now DELETED!

// =====================================================================================================
// CAllBACK Arry methods

//13 array.forEach() - accepts a function as an argument, CALLS the function once per element (el) in the array.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const result = nums.forEach(num => {
    console.log(num * num)
})

//14 array.map() - similar as forEach, but .map CREATES a new array woth the REUSLTS of CALLING a callback on every element in the array.

const words = ['lol', 'rofl', 'kekw'];

const newWords = words.map(word => {
    return word.toUpperCase();
})

console.log(newWords);

//15 array.filter() - created a NEW ARRAY with all elements that passed the test implemented by the provided function. Callback needs to return TRUE of FALSE - if returns TRUE this element is added to the new array.

const anotherNumbers = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const filtredNumbers = anotherNumbers.filter(number => {
    if (number % 2 === 0 && number < 10) {
        return number
    }
})

console.log(filtredNumbers); // [2, 4, 6, 8] - creates a new array from the elements that passed test.

//16 array.every() - tests does ALL the element in the array pass the provided function (test). and return BOOLEAN - if ALL elements are true - test is passed.

const numbersThree = [1, 2, 3, 4, 5, 6, 7, 8];

const testPassed = numbersThree.every(number => {
    return number < 10
})

console.log(testPassed); // TRUE - all array elements passed the test and are less then 10.

//17 array.some() - similar to .every. but returns TRUE if any (or at least one) of the array elements passed he test function.

const testPassedTwo = numbersThree.some(number => {
    return number % 2 === 0
})

console.log(testPassedTwo); // TRUE - at least SOME of the array elements passed the test.

//18 array.reduce() - simply speaking - it takes an array and it reduces this array to ONE - SINGLE value on the end.

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

//1st callback: accumulator is 3, currentValue is 5, return is 8.
//2nd callback: accumulator is 8, currentValue is 7, return is 15.
//3rd callback: accumulator is 15, currentValue is 9, return is 24.
//4th callback: accumulator is 24, currentValue is 11, return is 35.

//! You can pass an initial value to the .reduce (a value with which you want to START

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue, 100 // Starts with 100, so the final result is 135.
});

// ==========================================================================================================
















