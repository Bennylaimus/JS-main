// 1) String.length - lenght of the string - from 1(!) to ....
let test = 'Hello world!';
console.log(test.length); // ||| 12 (including space)

// =========================================================================================

// 2) String.CharAt(); ||| returns the character at a specified index (position) in a string.
//The index of the first character is 0, the second 1, ...

let text = 'Hello people!';
let letter = text.charAt(0)
console.log(letter); /// H (string sharacter at position 0 (index 0));

let lastLetter = text.charAt(text.length - 1);
console.log(lastLetter);/// ! (text length is 13 - from 1 to 13) last character is at index 12, because 0 to 12.

// ==========================================================================================

// 3) String.charCodeAt() - eturns the Unicode of the character at a specified position (index) in a string.
let testTwo = 'Hey there';
console.log(testTwo.charCodeAt(2)); // 121 - Unicode of y (which is String character on index number (2)) is 121
console.log(testTwo.charCodeAt()); // 72 - because default valud is index 0 and H Unicode is 72

// ==========================================================================================

// 4) String.codePointAt() - looks like the same as charCodeAy(), but only codePointAt() return the full value of a Unicode value greather 0xFFFF (65535). 

let testThree = 'Bonjour'
console.log(testThree.codePointAt(3)) // 106 - Unicide of index 3 (j) is 105

// ==========================================================================================

// 5) String.concat ||| The concat() method joins two or MORE! strings.
// Does not change the existing strings!
// Returns a new string!

let test1 = 'Hello';
let test2 = 'Peolpe!';
console.log(test1.concat(test2)); // 'HelloPeople!'

console.log(test1.concat(" ", test2)); // 'Hello People!'

// ===========================================================================================

// 6) String.endsWith() ||| method returns true if a string ends with a specified string, Otherwise it returns false.
// The endsWith() method is case sensitive.

let test3 = 'Hello, world!';
console.log(test3.endsWith('world!')) // true

console.log(test3.endsWith('World!')) // false - case sensetive! w !== W

console.log(test3.endsWith('world')) // false - no !

// ==========================================================================================

// 7) String.startsWith() - acts same as endsWith(), but from the start of the String

console.log(test3.startsWith('Hel')) // true

console.log(test3.startsWith('hel')) // false - case sensetive!

console.log(test3.startsWith('Heello')) // false - grammar mistake!

// ============================================================================================

// 8) String.fromCharCode() ||| Converts Unicode values to characters.
// Is a static method of the String object!
// The syntax is always String.fromCharCode()!
// You cannot use myString.fromCharCode()!

console.log(String.fromCharCode(65)); // A - return a String from Unicode number 65 - which is A

console.log(String.fromCharCode(65, 66, 67)) // ABC - can be several Unicodes!

// ============================================================================================

// 9) String.includes() ||| method returns true if a string contains a specified string. Otherwise it returns false. The includes() method is case sensitive.

let testFour = 'Hello everyone, I am 12 yead old boy';

console.log(testFour.includes('every')); // true

console.log(testFour.includes('hello')); // false - includes() is case sentative!

console.log(testFour.includes('Hello', 11)); // false - first check is true, but second check is false - so return false!

// ==============================================================================================

// 10) String.indexOf(); ||| The indexOf() method returns the position of the first occurrence of a value in a string.
//The indexOf() method returns -1 if the value is not found.
//The indexOf() method is case sensitive.

let testFive = 'Hello, people, my nome is Andrew!';

console.log(testFive.indexOf('p')) // 7 - p is on index 7

console.log(testFive.indexOf('b')) // -1 - didn't find such string in entire string, so return -1

console.log(testFive.indexOf('a')) // -1 - indexOf() is case sensetive, so a !== A - return -1

console.log(testFive.indexOf('e', 5)) // 8 - looking for "e" stering, but starting from position 5, not earlier!

// =================================================================================================

// 11) String.lastIndexOf() ||| - same as indexOf(), but searching for the LAST occurance of the String!
//The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
//The lastIndexOf() method searches the string from the end to the beginning.
//The lastIndexOf() method returns the index from the beginning (position 0).
//The lastIndexOf() method returns -1 if the value is not found.
//The lastIndexOf() method is case sensitive.

console.log(testFive.lastIndexOf('Andrew')); // 26  - String Andrew start at position 26

console.log(testFive.lastIndexOf('b')); // -1 - didn't find such String in entire String

console.log(testFive.lastIndexOf('o', 7)) // 4 last apperance of "o" in the entire String.
// Important! Counts first 7 strings from the begging "Hello, p" and searching for the last occurance of o WITHIN this 7 characters! 

// ================================================================================================

// 12) String.localeCompare() ||| The localeCompare() method compares two strings in the current locale.
//The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
//The current locale is based on the language settings of the browser.

let testSix = "ab";
let testSeven = "mn";

console.log(testSix.localeCompare(testSeven)); // -1 - as ab goes before mn

testSix = "yx";

console.log(testSix.localeCompare(testSeven)); // 1 - as yx goes afret mn

// ==================================================================================================

// 13) String.match() ||| The match() method matches a string against a regular expression **
//The match() method returns an array with the matches.
//The match() method returns null if no match is found.

let testEight = 'Hello againg, people!';

console.log(testEight.match('tist')) // null - as no match found!

console.log(testEight.match('again')) // [again] - return array!

console.log(testEight.match('ello', 'tist')) // ['ello']

// =================================================================================================

// 14) String.repeat() ||| The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.

let testNine = 'Hello, worldy!';

console.log(testNine.repeat(2)); // 'Hello worldy!Hello worldy!' (2) - repeat String 2 times!

console.log(testNine.charAt(2).repeat(4)); // 1) .charAt(2) - return 'l', 2) .repeat(4) - repeat returned char 'l' four times.

// =================================================================================================

// 15) String.replace() ||| The replace() method searches a string for a value or a regular expression.
//The replace() method returns a new string with the value(s) replaced.
//The replace() method does not change the original string.

let testTen = 'Hello, my people!';

console.log(testTen.replace('people', 'guys!')); // replace searches for 'people', finds it and replace with 'guys!'

console.log(testTen);

console.log(testTen.replace('people', 12345)); // 'Hello, my 12345'; - type of all sentance is String! 

// ===================================================================================================

// 16) String.search() ||| The search() method matches a string against a regular expression **
//The search() method returns the index (position) of the first match.
//The search() method returns -1 if no match is found.
//The search() method is case sensitive.

let testEleven = 'Mr. Blue have a red car, and a red cat';

console.log(testEleven.search('red')) // 16 - returns FIRST! index (position) of searched word 'red'

console.log(testEleven.search('orange')) // -1 - as no 'orange' was found!

console.log(testEleven.search('blue')) // -1 because of case sensetive! 'blue' !== 'Blue'

// =================================================================================================

// 17) IMPORTANT! String.slice() ||| he slice() method extracts a part of a string.
//The slice() method returns the extracted part in a new string.
//The slice() method does not change the original string.
//The start and end parameters specifies the part of the string to extract.
//The first position is 0, the second is 1, ...
//A negative number selects from the end of the string.

let testTwelve = 'Important string method here!';

console.log(testTwelve.slice(10)) //  'string method here!' Sliced my String to a new one STARTING from position 10 and till the end

console.log(testTwelve.slice(2, 5)) // 'por' - started to slice at position (index) 2 ('p') - finished to slice at position (index) 5 ('r')

console.log(testTwelve.slice(-1)) // 'e' - starder to slice from the end, from the position -1('e')

console.log(testTwelve.slice(2, -2)) // 'portant string method her'  - starts slicing at position (index) 2, and finished slicing at position -2 (from the end of a String)

// =======================================================================================================

// 18) VERY IMPORTANT. String.split() ||| The split() method splits a string into an array of substrings.
//The split() method returns the new array.
//The split() method does not change the original string.
//If (" ") is used as separator, the string is split between words.

let testThirteen = 'This is a new string';

console.log(testThirteen.split("")) // array os strings ['T', 'h', 'i', 's', ..... etc]

let myNewArray = testThirteen.split("");
let newVar = myNewArray[2];
console.log(newVar) // i 

console.log(testThirteen.split(" ")) // returns array of words separated by space! ['This', 'is', 'a', 'new', 'string']

console.log(testThirteen.split(" ", 2)) // return only 2 first strings (separated by space) as new array ['This', 'is'];

console.log(testThirteen.split("", 2)) // return only 2 first characters as new array (as no space (" "), ("")) ['T', 'h']

// ==========================================================================================================

// 19) String.starsWith() ||| Same as endsWith() - method - returns true of false!
//The startsWith() method returns true if a string starts with a specified string.
//Otherwise it returns false.
//The startsWith() method is case sensitive.

let testSeventeen = 'Hello, wolde man!';

console.log(testSeventeen.startsWith('ello')) // false - as starts with 'Hello'

console.log(testSeventeen.startsWith('hello')) // false - as case sensetive, 'hello' !== 'Hello'

console.log(testSeventeen.startsWith('wol', 7)) // true - 'wol' string matched and starts at position 7 (index)

// ==============================================================================================================

// 20 String.substr() ||| The substr() method extracts a part of a string.
//The substr() method begins at a specified position, and returns a specified number of characters.
//The substr() method does not change the original string.
//To extract characters from the end of the string, use a negative start position.

let myTest = "Hello, world!";

console.log(myTest.substr(1, 4)) // ello

// This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

// 21) String.substring() ||| The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
//The substring() method extracts characters from start to end (exclusive).
//The substring() method does not change the original string.
//If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
//Start or end values less than 0, are treated as 0.

let myTestTwo = "Hello, world!"

console.log(myTestTwo.substring(1, 2)) // e (exclusive END - position(index 2!))

console.log(myTestTwo.substring(-1, 3)) // Hel (-1 becomes 0 and starts at 0 and end at 3 (exclusive 3))

console.log(myTestTwo.substring(4, 1)) // ell (can't start ar 4 and ends with 1, so 4-1 is swapped to 1-4!)

// ==============================================================================================================

// 21) String.toLocaleLowerCase() ||| The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
//The locale is based on the language settings of the browser.
//The toLocaleLowerCase() method does not change the original string.
//The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

// ===============================================================================================================

// 22) String.toLocaleUpperCase() ||| The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.
//The locale is based on the language settings of the browser.
//The toLocaleUpperCase() method does not change the original string.
//The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

// ===============================================================================================================

// 23) String.toLowerCase() ||| The toLowerCase() method converts a string to lowercase letters.
//The toLowerCase() method does not change the original string.

let myTestThree = "Hello, Every One!";

console.log(myTestThree.toLowerCase()); // "hello, every one" - all switched to lower case

// ================================================================================================================

// 24) String.toUpperCase() ||| The toUpperCase() method converts a string to uppercase letters.
//The toUpperCase() method does not change the original string.

let myTestFour = "hello, people of calabria";

console.log(myTestFour.toUpperCase()); // "HELLO, PEOPLE OF CALABRIA"  - all switch to Upper case

// =================================================================================================================

// 25) String.trim() ||| The trim() method removes whitespace from both sides of a string.
//The trim() method does not change the original string.

let myTestFive = "  Hello, bratha     ";

console.log(myTestFive.trim()) // "Hello, bratha" - spaces from the beginning and from the end of the string are removed. SPACE in the middle of the String is not removed!

// =================================================================================================================

// 26) String.valueOf() ||| The valueOf() method returns the primitive value of a string.
//The valueOf() method does not change the original string.
//The valueOf() method can be used to convert a string object into a string.

//The valueOf() method is the default method for JavaScript strings.
//It is used internally by JavaScript.
//Normally, you will not use it in your code.

// ==================================================================================================================

// 27) String.toString() ||| The toString() method returns a string as a string.
//The toString() method does not change the original string.
//The toString() method can be used to convert a string object into a string.

//Every JavaScript object has a toString() method.
//The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
//Normally, you will not use it in your own code.

// ==================================================================================================================

// ******* costructor ********** prototype ************

// ==================================================================================================================







