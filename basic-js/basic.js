// String index //

let animal = "zebra";
animal[3]; // ==> 'r'
animal[0]; // ==> 'z'

animal.length // ==> 5
animal.length - 1 // ==> highest index of a string

//String medhods//
let userName = 'Andrew';
userName.toUpperCase();
userName.toLowerCase();
userName.trim(); // ==> removes white spaces from the beggining or end of the string.
userName.indexOf('A'); // ==> 0
userName.indexOf('drew'); // ==> 2
userName.indexOf('m'); // ==> -1 (character not found)
userName.slice(3); // ==> 'rew' starts from index 3 and goes till the end of the string ('rew' is a new returned string)
userName.slice(1, 4); // ==> 'ndr' - will start from index 1 and will go BEFORE and indec 4 (from index 1 - 3, not including 4)
userName.slice(-3); // ==> 'rew' - working backwards from the end
userName.replace('A', 'B'); // ==> Bandrew; will ONLY replace first appearance
userName.repeat(2); // ==> 'AndrewAndrew'
userName.trim().toUpperCase();

//Template Literals//
let product = 'apple';
let quantity = 5;
let price = 2.00;

let total = `You bought ${quantity} ${product}. Total is ${quantity * price}`; // ==>
// ==> 'You bought 5 apple. Total is 10.00';

//**null**//
// - Intentional (преднамеренный) absence of ny value (we can set something to null, like let userName = null)
// - Must be assigned

//**undefined**/
// - Variables that do not have an assigned value are undefined, like let x; (x is variable, but it is undefined)

// ** Comparisons ** //
// (>), (<), (>=), (<=), (==), (!=), (===), (!==)

// == (equality)
// - check for equality of value, but NOT equality of type
// - It coerces both values to the same type and then compares them.
// - This can lead to some unexpected results (like when comapring two strings letters)

// === (strict equaluty)
// - check for equality of value and type
// - try to ALWAYS use === equality!

// =======================================

let userInput = prompt("please enter your name"); // Enter 35 // promprt returns string!!

parseInt(userInput) // will convert string to number

//=======================================

let rating = 3;

if (rating === 3) { // <=== true of false condition
    console.log("You win!");
}











