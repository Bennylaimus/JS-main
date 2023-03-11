// // String index //

// let animal = "zebra";
// animal[3]; // ==> 'r'
// animal[0]; // ==> 'z'

// animal.length // ==> 5
// animal.length - 1 // ==> highest index of a string

// //String medhods//
// let userName = 'Andrew';
// userName.toUpperCase();
// userName.toLowerCase();
// userName.trim(); // ==> removes white spaces from the beggining or end of the string.
// userName.indexOf('A'); // ==> 0
// userName.indexOf('drew'); // ==> 2
// userName.indexOf('m'); // ==> -1 (character not found)
// userName.slice(3); // ==> 'rew' starts from index 3 and goes till the end of the string ('rew' is a new returned string)
// userName.slice(1, 4); // ==> 'ndr' - will start from index 1 and will go BEFORE and indec 4 (from index 1 - 3, not including 4)
// userName.slice(-3); // ==> 'rew' - working backwards from the end
// userName.replace('A', 'B'); // ==> Bandrew; will ONLY replace first appearance
// userName.repeat(2); // ==> 'AndrewAndrew'
// userName.trim().toUpperCase();

// //Template Literals//
// let product = 'apple';
// let quantity = 5;
// let price = 2.00;

// let total = `You bought ${quantity} ${product}. Total is ${quantity * price}`; // ==>
// // ==> 'You bought 5 apple. Total is 10.00';

// //**null**//
// // - Intentional (преднамеренный) absence of ny value (we can set something to null, like let userName = null)
// // - Must be assigned

// //**undefined**/
// // - Variables that do not have an assigned value are undefined, like let x; (x is variable, but it is undefined)

// // ** Comparisons ** //
// // (>), (<), (>=), (<=), (==), (!=), (===), (!==)

// // == (equality)
// // - check for equality of value, but NOT equality of type
// // - It coerces both values to the same type and then compares them.
// // - This can lead to some unexpected results (like when comapring two strings letters)

// // === (strict equaluty)
// // - check for equality of value and type
// // - try to ALWAYS use === equality!

// // =======================================

// let userInput = prompt("please enter your name"); // Enter 35 // promprt returns string!!

// parseInt(userInput) // will convert string to number

// //=======================================

// let rating = 3;

// if (rating === 3) { // <=== true of false condition
//     console.log("You won gold medal!");
// } else if (rating === 2) {
//     console.log('You won silver medal!')
// } else if (rating === 1) {
//     console.log('You won bronze!')
// } else {
//     console.log('Sorry, you lose!')
// }

// //** if statement shortened version!**//

// let accessAllowed = (age >= 18) ? true : false;
// // - if (age >= 18) is true? ==> run true;
// // - else (:) ==> run false;

// //**Nested conditions **//
// let password = prompt('Enter a password');

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         console.log('Valid password!')
//     }
//     else {
//         console.log('Password cannot contain spaces!')
//     }
// } else {
//     console.log('Password must be 6+ characters long!')
// }

// //** Truthy % Falsy**/

// // - All JS values have an inherent trytheness or falsyness about then!
// // Falsy values: (false) (0) ('' / empry string) (null) (undefined) (NaN)
// // Trythy - everything else is truthy!

// if (userInput) { // <== if userInput value is booleand true - run this code, if it is boolean false - run another code
//     console.log('Truthy!')
// } else {
//     console.log('Falsy!')
// }

// //** Logical operator AND (&&)**//

// // - Both side need to be true, for the entire thing to be to true!

// // (1 <= 4 && 'a' === 'a') <== true
// // (9 > 10 && 9 >= 9) <== false
// // ('abc'.length === 3 && 1 + 1 === 4) < == false

// let usersInput = prompt('Enter your password here');

// if (usersInput.length >= 6 && usersInput.indexOf(' ') === -1) {
//     console.log('Valid password!')
// } else {
//     console.log('Password is invalid!')
// }

// let mysteryString = 'Please7';

// if (mysteryString[0] === 'P' && mysteryString.length >= 5 && mysteryString.indexOf('7') !== -1) {
//     console.log('Mystery String is revealed!');
// }

// //** Logical operator OR (||)**/

// // - If one side is true, the entire thing is true
// // (1 !== 1 || 10 === 10) <== true
// // (10/2 === 5 || null) <== true
// // (0 || undefined) <== false

// let age = 10;

// if (age >= 0 && age <= 5 || age >= 65) {
//     console.log('You get in for free!')
// } else if (age >= 6 && age <= 10 || age === 'veteran') {
//     console.log('You het in for a fee $10')
// } else {
//     console.log('You get in for a fee $20')
// }

// //** Logical operator NOT (!) **/

// // - !expression return true if expression is false
// // (!null) - true (НЕ null)
// // (!(0 === 0)) - false
// // (!(3 <= 4)) - false

// if (!(age >= 0 && age <= 5 || age >= 65)) {
//     console.log('You are not a baby of a senior!')
// } // <=== the (age >= 0 && age <= 5 || age >= 65) part runs first and an output will the TRUE
// // <=== then ! will turn it around and get it FALSE, so (NOT THIS (age >= 0 && age <= 5 || age >= 65))

// //** Switch statement**//

// const day = 5;

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//     case 7:
//         console.log('Weekend!');
//         break;
//     default:
//         console.log('The wrong number!');
// }

// **DEFAULT PARAMS ** // - Default parametrs.
// If you user don't put in some specific parametr, we want to some default parametrs are aused.

function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(6)); // returns numbers from 1 to 6
console.log(rollDie(20)); //return numbers from 1 to 20
// In this case user decidec how much random number would be, but what if we would like to put some default parametr in the 'numSides', for example 6, so parametr would always be 6

//To do this we can set a parametr INSIDE a function!

// function rollDie(numSides = 6) {    // <=== if no parametr is passed it will always be 6! rollDie() // rollDie(6)
//     return Math.floor(Math.random() * numSides) + 1;
// }

function summary(a, b = 1) {
    return a + b;
}

console.log(summary(20)); // output 21, a is passed by user, but b will always be 1, if don't pass something else!

// ** SPREAD FUNCTION CALLS ** //

// Expands (распостряняет, 'размазывает')) an ITERABLE (like array, string etc. into a list of arguments)

let nums = [2, 3, 4, 5, 9];

console.log(Math.max(nums)); // output NaN
console.log(Math.max(...nums)); // same as Math.max(2,3,4,5,9);

// **SPREAD WITH ARRAY LITERALS ** //

// Spread IN array literals creates a new array using an existing array.
// Spreads an elements from one array into a new array.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const newArr = [...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6];
const anotherArr = ['a', 'b', ...nums2]; // ['a', 'b', 4, 5, 6];
const anotherTwo = [...nums1, 10, 20, ...nums2] // [1, 2, 3, 10, 20, 4, 5, 6];

// ** SPREAD IN OBJECT LITERALS ** //

// Copies properties from one object into another object literals

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true };
// output {family: 'Caninae', furry: true, isPet: true};

const catDog = { ...feline, ...canine };
// output: { legs: 4, family: 'Felidae', family: 'Caninae', furry: true }

const arrExample = { ...[1, 2, 3, 4] }; // indexes are printed out as a properties
// 0: 1, 1: 2, 2: 3, 3: 4
console.log(arrExample);

const strExample = { ...'hello' }; // same with ana array, indexies are printed out as a properties of the string
// 0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o';
console.log(strExample);

// ** REST PARAMS ** //
// Looks like a SPREAD (because it also uses ... synday), but is is completely different!

// We are gacing here an ARGUMENTS object! What is it? ===>
// It's:
// == Available insede every function
// == It's an ARRAY-LIKE object:
// ===== Has a length property,
// ===== Does NOT have array methods like push/pop
// == Contains all the arguments passed to the function
// == Not available insede of arrow functions!

function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

sumAll(8, 4, 5, 2); // 19
sumAll(2, 3); // 5

// ARGUMENTS keyword will automaticaly holds all argument passed into our function! (8, 4, 5, 2) in fist case!

// as ARGUMENTS holds all the parametrs passed to the function, might be seen, that ARGUMENTS will act like an array, BUT IS DON'T! (we cannot use any array methods with ARGUMENTS) and this is when the REST PARAMS come in ===>

// REST PARAMS actually collects all remainingarguments into an actual array!

function summa(nums) {
    console.log(nums);
};

summa(3) // nums will only holds 3
summa(3, 5); // nums still holds only 3, as it is an only parametr in the function!

// But if we use function summa(...nums) {..} ===> it will collect ALL the parametrs and actualy CONVERT THEM INTO ARRAY, and we will be able to use an array method now!

function raceResults(gold, silver, bronze, ...restParticipants) {
    console.log(`The Gold medal goes to ${gold}`),
        console.log(`The Silver medal goes to ${silver}`),
        console.log(`The Bronze medal goes to ${bronze}`),
        console.log(`And a Big Thanks to all the participants: ${restParticipants}`)
};

console.log(raceResults('Yura', 'Andrew', 'Bebo', 'Tim', 'Clarry', 'Larry', 'Cappy', 'Sissy'));

// ** DESTRUCTURING ARRAY, OBJECTS, PARAMS ** //

// A short, clear syntax to 'unpack':
// == values from arrays,
// == Propertis from objects,
// Into distinct (отчётливый, определённый) variables.

// ** Destructuring Array ** //

//For example we have an array of game scores
const scores = [927712, 887261, 822131, 761121, 541121, 311921];

// And we want to 'put' every score to a separate variable, like:
const highScore = scores[0]; // highScore = 927712
const secondScore = scores[1]; // secondScore = 887261

//The shorter and cleaner syntax to do it would be:
const [gold, silver] = scores;
// gold: now holds gold = 927712
// silver: now holds silver = 887261

const marathonResults = ['Yura', 'Andrew', 'Coco', 'Bebo', 'Sammy', 'Lizzy'];

const [goldy, silvery, ...everyOneElse] = marathonResults;
//goldy: 'Yura',
//silvery: 'Andrew',
//everyOneelse: ['Coco', 'Bebo', 'Sammy'];

// ** Destructuring an Objects ** //

const newUser = {
    firstName: 'Andrew',
    lastName: 'Komor',
    email: 'komorkomor@gmail.com',
    isAdmin: true,
    age: 36,
    sex: 'male',
    graduate: 1999,
    contry: 'Latvia'
};

// If we would like to store a name, lastname and an email in a separate varianbles, we could do following:

// const firstName = newUser.firstName; // firstName = 'Andrew',
// const lastName = newUser.lastName // lastName = 'Komor'
// const userEmail = newUser.email // userEmail = 'komorkomor@gmail.com'

//But we could do something more compact and convenient:

const { firstName, lastName, email } = newUser;

// Basically - this is an equivalent:

// const firstName = newUser.firstName;
// and
// const { firstName } = newUser // <==== this 'says' make me a variable called firstName, from newUser.firstName

// We can even take a property name from an object and save it to variable and call this variable different, for example. if I want to store graduate value in a varianble, but not 'graduate' variable, but 'learningFinished' variable we can do following:

const { graduate: learningFinished } = newUser // now the property of 'graduate' value (which is 1999) will be stored in a variable 'learningFinished'

// We can even assing a new value

const { firstNames, lastNames, region = 'Oklahoma' } = user2
// But if region property already is used in an Object region will hold a property from an object, not what we call him

// ** Destructuring params ** // (most commonly used with an objects!)

const fullName = ({ first, last }) => { // <=== Basically we are destructiong object to a variables INSIDE functions parametrs already

    // not doing something like this ==>
    // == > const {first, last} = runner

    return `${first} ${last}`
};
// not doing something like this ==>
// ==> and then fullName(runner);

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    contry: 'Kenya',
}

fullName(runner); // 'Eliud Kipchoge';




























