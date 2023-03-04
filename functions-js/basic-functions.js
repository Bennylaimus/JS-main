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

const add = function (x, y) { // ===> this type of function declaration called FUNCTION EXPRESSION! Function is stored in a variable!
    return x + y;
};

add(3, 4); // ===> 7 (to call a function we use variable it's stored in)
















