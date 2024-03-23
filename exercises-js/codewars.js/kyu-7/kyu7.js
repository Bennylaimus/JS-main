//1 Exercise:

//You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     return -1;
//   }

// My solution:
// function findNextSquare(sq) {
//     if ((Math.ceil(Math.sqrt(sq)) * Math.ceil(Math.sqrt(sq))) == sq) {
//         return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
//     } else {
//         return -1
//     }
// }
// console.log(findNextSquare(114));
// console.log(Math.ceil(Math.sqrt(144))); <===== checking

// Best practices:
// function findNextSquare(sq) {
//     return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }
// For those, who still wondering about this part of code: Math.sqrt(sq)%1 - as I understand simply "truthy" / "falsy" is used here to check if square is perfect. Math.sqrt(114) % 1 results in 0.6770782520313112, but this result(value) is "truthy", so this part of code runs: "-1" Math.sqrt(121) % 1 results in 0 and 0 is "falsy", so this part of code runs Math.pow(Math.sqrt(sq)+1,2) Cool!

// ====================================================================================================

// 2. Exercise:
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//     //Code here
//   }

// MySolution:

// let arr = [1, 3, 4, 2, 5, 8];

// function sumTwoSmallNumbers(numbers) {
//     if (numbers.length >= 4) {
//         numbers.sort((a, b) => a - b);
//         return numbers[0] + numbers[1];
//     }
// }

// console.log(sumTwoSmallNumbers(arr));

// ***.sort() explanation on freecodecamp

//======================================================================================================

