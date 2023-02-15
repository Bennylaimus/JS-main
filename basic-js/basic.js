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
    console.log("You won gold medal!");
} else if (rating === 2) {
    console.log('You won silver medal!')
} else if (rating === 1) {
    console.log('You won bronze!')
} else {
    console.log('Sorry, you lose!')
}

//** if statement shortened version!**//

let accessAllowed = (age >= 18) ? true : false;
// - if (age >= 18) is true? ==> run true;
// - else (:) ==> run false;

//**Nested conditions **//
let password = prompt('Enter a password');

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid password!')
    }
    else {
        console.log('Password cannot contain spaces!')
    }
} else {
    console.log('Password must be 6+ characters long!')
}

//** Truthy % Falsy**/

// - All JS values have an inherent trytheness or falsyness about then!
// Falsy values: (false) (0) ('' / empry string) (null) (undefined) (NaN)
// Trythy - everything else is truthy!

if (userInput) { // <== if userInput value is booleand true - run this code, if it is boolean false - run another code
    console.log('Truthy!')
} else {
    console.log('Falsy!')
}

//** Logical operator AND (&&)**//

// - Both side need to be true, for the entire thing to be to true!

// (1 <= 4 && 'a' === 'a') <== true
// (9 > 10 && 9 >= 9) <== false
// ('abc'.length === 3 && 1 + 1 === 4) < == false

let usersInput = prompt('Enter your password here');

if (usersInput.length >= 6 && usersInput.indexOf(' ') === -1) {
    console.log('Valid password!')
} else {
    console.log('Password is invalid!')
}

let mysteryString = 'Please7';

if (mysteryString[0] === 'P' && mysteryString.length >= 5 && mysteryString.indexOf('7') !== -1) {
    console.log('Mystery String is revealed!');
}

//** Logical operator OR (||)**/

// - If one side is true, the entire thing is true
// (1 !== 1 || 10 === 10) <== true
// (10/2 === 5 || null) <== true
// (0 || undefined) <== false

let age = 10;

if (age >= 0 && age <= 5 || age >= 65) {
    console.log('You get in for free!')
} else if (age >= 6 && age <= 10 || age === 'veteran') {
    console.log('You het in for a fee $10')
} else {
    console.log('You get in for a fee $20')
}

//** Logical operator NOT (!) **/

// - !expression return true if expression is false
// (!null) - true (НЕ null)
// (!(0 === 0)) - false
// (!(3 <= 4)) - false

if (!(age >= 0 && age <= 5 || age >= 65)) {
    console.log('You are not a baby of a senior!')
} // <=== the (age >= 0 && age <= 5 || age >= 65) part runs first and an output will the TRUE
// <=== then ! will turn it around and get it FALSE, so (NOT THIS (age >= 0 && age <= 5 || age >= 65))

//** Switch statement**//

const day = 5;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
    case 7:
        console.log('Weekend!');
        break;
    default:
        console.log('The wrong number!');
}













