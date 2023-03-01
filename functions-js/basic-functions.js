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

let num = [1, 2, 3];





