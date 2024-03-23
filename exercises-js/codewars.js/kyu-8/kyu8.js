// 1. Exercise:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//     // moment of truth
// }

// My result:
// function lovefunc(flower1, flower2) {
//     if (flower1 % 2 === 0 && flower2 % 2 === 1 && flower1 >= 0 && flower2 >= 0) {
//         return true
//     } else if (flower1 % 2 === 1 && flower2 % 2 === 0 && flower1 >= 0 && flower2 >= 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(lovefunc(4, 3));

// Best practices:

// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
//   }

// function lovefunc(flower1, flower2){
//     return (flower1 + flower2) % 2 === 1
//   }

// =============================================================================================

// 2.Exercise
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString){
//     // return the girl's correct age as an integer. Happy coding :)
//     }

// My Solution:

// function getAge(inputString) {
//     return `${parseInt(inputString)} years old`
// }

// console.log(getAge(5));

//Another, more detailed solution with string text:
// var inputAge = "5 years old";

// function getAge(inputString){

//   var outAge;
//   outputAge = inputString.split(' ');
//   return parseInt(outputAge[0]);
// }

// getAge(inputAge);

// =====================================================================================================

