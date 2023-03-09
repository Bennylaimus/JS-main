//** Functions basics **//

// 1. Defining functions:

// function funcName() {
//  do something
//};

function ungryGrumpus() {
    console.log('I am an angry Grupmus');
    console.log('I will eat you!');
    console.log('Muahhahha!!!');
}

// 2. Run function:
//ungryGrumpus();

//** ARGUMENTS **//

function greed(firstName) { // <=== this is a PARAMETR
    console.log(`First Name is ${firstName}`);
};

greed('Elvis'); // firstName now holds 'Elvis', when we call function and pass something in - this is an ARGUMENT!

function rant(message) {
    console.log(message.toUpperCase());
};

rant('i hate beets'); // Output - I HATE BEETS

// ** MULTIPLE ARGUMENTS ** //

function repeat(word, repeatTimes) {
    console.log(word.repeat(repeatTimes));
}

repeat('hi!', 3);

// ** RETURN Keyword ** //

function add(num1, num2) {
    console.log(num1 + num2);
};

add(3, 4) // we will just PRINT OUT 7
let total = add(3, 4) // total is UNDEFINED!

function summ(num1, num2) {
    return num1 + num2
};

summ(3, 4) // will RETURN 7
let summary = summ(3, 4) // and 7 now can be stored in a variable!
summary // 7

//*Important* - ETURN Keyword returns a value and actualy stops an execution of a function!

function addingNums(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 + num2
}

console.log(addingNums(5, 5)); // Output 10;
console.log(addingNums(5, 'hi')); // Output false; (as one RETURN worked (false returned)) function stops running and RETURN 10 will never runs

//** Capitalize string first letter **// - my code
function capitalize(str) {
    let strToArr = str.split(''); // ['y', 'u', 'r', 'a'];
    let arrFirstLetter = strToArr.splice(0, 1); // ['y'] // srtToArr => ['u', 'r', 'a'];
    let arrFirstLetterCap = arrFirstLetter[0].toUpperCase(); // 'Y' (string) // strToArr => ['u', 'r', 'a'];
    strToArr.unshift(arrFirstLetterCap); // strToArr => ['Y', 'u', 'r', 'a'];
    return strToArr.join('');
}

console.log(capitalize('yura'));
console.log(capitalize('andrew'));

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sumArray([50, 50, 1])); // 101

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function dayOfTheWeek(number) {
    if (number <= 0 || number >= 8) {
        return null
    }
    return weekDays[number - 1];
}

console.log(dayOfTheWeek(7));

let dayOfWeeks = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

function returnDay(day) {
    if (day <= 0 || day >= 8) {
        return null;
    }
    return dayOfWeeks[day];
};

console.log(returnDay(7));

//** SCOPE **//
//Variable 'visibility', where actually we have an access to taht varianble!

//*Function scope*//

let bird = 'Scarlet Macaw';

function birdWatch() {
    let bird = 'Blue Royal Haron';
    console.log(bird) // ===> 'Blue Royal Haron' (but if we remove bird variable (Blue Roya Haron) from the function it will find and 'take' bird variable from outside the function ('Scarlet Macw'));
};
birdWatch();
console.log(bird); // ===> 'Scarlet Macaw';


//*Block skope*//

let radius = 8;
if (radius > 0) {
    const PI = 3.146612;
    let message = 'Hello';
}
console.log(radius) // ===> 8;
// console.log(PI) // ===> Error, variable NOT defined (it's in an if BLOCK!)
// console.log(message) // ===> Error, varianble NO defined (it's in an if BLOCK!)


for (let i = 0; i < 3; i++) {
    let message = 'Hello world!'
}

// console.log(message); // Error, varianble NOT defined (it's in an for BLOCK!)

//!!IMPORTANT!!//
// An old var variable don't have a block scope (but it has a function scope)

//*Lexical scope*//

function bankRobbery() {
    const heroes = ['Batman', 'Spiderman', 'Superman', 'Catwoman'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Please help us ${hero.toUpperCase()}`);
        }
    }
    cryForHelp(); // 1. We need to RUN this function first!
}

bankRobbery(); // 2. Only after running cryForHelp() function we will be able to run bankRobbery() function.

// 1. bankRobbery() function starts running, nothing happens, until it goes till the end and fing cryForHelp() function
// 2. ctyForHelp() function starts running, it has access to heroes and everythin is executed

//** FUNCTION EXPRESSION **//

const summarize = function (x, y) { // ===> this type of function declaration called FUNCTION EXPRESSION! Function is stored in a variable!
    return x + y;
};

summarize(3, 4); // ===> 7 (to call a function we use variable it's stored in)

//** HIGHER ORDER FUNCTIONS **//

//This is functions, that operate on/with other functions.
// 1) Accept other function as an argument
// 2) Return a function

//*Acepting function as an argument*//

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie) // Now, we are passing a rollDie function as an ARGUMENT to callTwice (rollDie now is func)

// callTwice(rollDie()) // DON'T do this, as this will first EXECUTE rollDie() and return 5 and then 5 will be passed as a parametr to cakllTwice(), so it will end up with callTwice(5)!

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

callTenTimes(rollDie);

//*Returning a function*//

function makeMisteryFunc() {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
        return function () {
            console.log('Sorry, this is a lose finction, ahaha!');
        }
    } else {
        return function () {
            console.log('Yey! You won! tHis is a very good function!');
        }
    }
}

const mystery = makeMisteryFunc(); // now a variable mustery HOLD INSIDE what makeMisteryFunc function RETURNS (and it returns function() with good result or function() with bad results)

mystery(); // now this will run only function() - thst is what makeMisteryFunc() returns


// // 1 step - simple function, that is checking is passed number is between for example 50 and 100:

// function isBetween(number) {
//     return number >= 50 && number <= 100 // if number is between 50 to 100 it will return true!
// };

// 1 step - create a factory function:

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

makeBetweenFunc(100, 200); // we are calling a functions with 100 and 200 parametrs

// 2 step makeBetweenFunc(min, max) after calling is going to return ===>

//function (num) {
//return num >= 100 && num <= 200
//}

// step 3 - but to RUN function (num) we nned to save it in a variable!

// step 4 - so we are goind this:
// const isBetween = makeBetweenFunc(min, max) - we are saving the RETURN of the makeBetweenFunc(min, max) (which is function (num)....) to varianble isBetween!

// step 5 - isBetween(10) - function(num) will now looks like this (function(10)) amd it WILL USE (min and max from the previous, higher function)

//** Object methods **//

// We can add functions as properties in an objects - this functions are called object medhods

const math = {
    multiply: function (x, y) { // this is called object method
        return x * y
    },
    devide: function (x, y) { // this funtion is called object method
        return x / y
    },
    summ: function (x, y) { // and this function is called object method
        return x + y
    }
};

math.multiply(2, 5); // we will access multiply function AND will run it // output: 10;
console.log(math.multiply(2, 5)); // output 10;

//*Shorthand way of adding methods to an objects*//

const info = {
    phrase: 'Hello',
    total(x, y) {     // shorthand option, you don't need to write keyword function
        return x + y
    }
}

info.total(5, 7)// output 12;

//** Keyword THIS**//

//*Use the keywprd THIS to access other properties on the same object*//

const person = {
    first: 'Robert',
    last: 'Pattison',
    fullName() {
        return `${this.first} ${this.last}`
    }
};

person.fullName(); // Robert Pattison (we can access other object properties, because of keyword this!)
person.last = 'Plant'; // we can change some object proberty
person.fullName(); // Robert Plant (and the access changed propertie once again by using keyword this) 

//!! IMPORTANT !!//

// The value of THIS depends on the invocation context (контекст вызова!) of the function it is used in!

const personTwo = person.fullName()

// person.fullName() ===> the keyword this REVERS to the object person (on left side of the dot)

//personTwo() // we called the same function, but keyword this is NOT referring to a person object.

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG'
    }
};

console.log(hen.name); // 'Helen'
console.log(hen.eggCount); // 0,
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);

// hen.layAnEgg();
// console.log(hen.eggCount);

//** TRY/CATCH **//

// hello.toUpperCase() // will cause an Error as hello is NOT defined

// 1. If we anticipate (предполагаем) that something will cause an error, we can wrap (обернуть) it in a TRY block:

// try {
//     hello.toUpperCase();
// }

// 2. Catch - it this part we define what will happen, if the code putted in TRY will cause an error:

try {
    hello.toLowerCase(); // <=== this will cause an error
} catch {
    console.log('Warning! An Error Detected!'); // <=== sothis part will run
}

// 3. The error in try {} will be defined and code will CONTINUE to run!

//*Trying to catch an error in a function*//

function yell(message) {
    console.log(message.toUpperCase().repeat(3));
}

yell('Hello!'); // <=== everything works here
// yell(142344); // <=== but what if a number is passed as an argument, it will not work with strings methods like .toUpperCase() and .repeat()!

// We can wrap this error by using try/catch approach //

function yelll(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch {
        console.log('Please pass a string next time!');
    }
};

yelll('Hi!'); // <=== function works
yelll(1231231); // <==== try/catch works

//**ARRAY CALLBACK  METHODS **//

// ** forEach Method ** // (also refer to array-methods.js file)

// forEach() method accepts a callback function.
// Calls the function once per element in the array.

const arrOfNums = [1, 2, 3, 4, 5, 6, 7];

arrOfNums.forEach(function (number) {
    console.log(number * number);
}); // 1. 4. 3. 16, 25, 36, 49,

arrOfNums.forEach(function (number) {
    if (number % 2 === 0) {
        console.log(number); // 2, 4, 6;
    }
});

const movieList = [
    {
        title: 'Back to The Future',
        score: 99
    },
    {
        title: 'Matrix',
        score: 90
    },
    {
        title: 'Avatar',
        score: 85
    }
];

movieList.forEach(function (el) {
    console.log(`${el.title} ${el.score} / 100`);
});

// ** Map() method ** //

// Similar as forEach() method, but it generates a new array!
// It's like the way to pass array elements from one state to another

const texts = ['rofl', 'lol', 'kekw', 'rly?'];
const caps = texts.map(function (el) {
    return el.toUpperCase();
})

console.log(texts); // ['rofl', 'lol', 'kekw', 'rly?'];
console.log(caps); // ['ROFL', 'LOL', 'KEKW', 'RLY?'];

const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (el) {
    return el.first;
});

console.log(firstNames);

//** ARROW FUNCTIONS **//

const square = (num) => {
    return num * num
};

//If there is only ONE SINGLE PARAMETR you can pass it without ()!
// const square = num => {
// return num * num
//}


square(5); // 25

const summOfTwo = (num1, num2) => {
    return num1 = num2
};

summOfTwo(5, 7); // 12

const rollingDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

rollingDie(); // random number from 1 to 6

//** */ ARROW FUNCTIONS IMPLICIT RETURNS **//

const isEven = num => (
    num % 2 === 0         // <=== implicit return
);

const isOdd = num => num % 2 === 1; // <=== one-line implicit return

//!!** ARROW FUNCTION SYNTAX (including implicit returns) **!!//

// (num1, num2) => {statement};
// (num1, num2) => expression;
// (num1, num2) => {return expression};

// (num1) => {statement};
// num1 => {statement};

// () => {statement};
// () => expression;
// () => {return expression};

// (num1, num2, num2) => expression

// ** setTimeout & setInterval ** //

setTimeout(() => { // <=== will complete any function, passed as an argument(callback function)
    console.log('...are you still there?') // this will be executed ...
}, 3000); // <=== after 3000 miliseconds (3 seconds)

// If you have console.log() BEFORE setTimeout() function
// And console.log() AFTER setTimeout() function..
// BOTH console.log() will be executed immideately and only what is inside setTimeout() function will be executed after 3 seconds

const id = setInterval(() => {
    console.log(Math.random()) // <=== works same as setTimeout()...
}, 3000); // .. but will return callback function EVERY 2000 miliseconds (2 sec)

clearInterval(id);

// To STOP setInterval() function we need to use clearInterval() <=== and pass and id as a parametr
// clearInterval(id); // will stop this ONE PARTICOLAR id = setInterval () function

// ** filter() method ** // (also refer to array-methors.js)

// Creates a NEW ARRAY with all elements that PASS the test implemented by the provided function.

const numberss = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const smallNumbers = numberss.filter(number => number < 5);
// [4,3,2,1];

console.log(smallNumbers);













































