// // //** FOR Loop**//

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// } // <=== prints numbers form 1 to 10


// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// } // <=== prints out all even (чётные) numbers from 1 to 20

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// } // <=== decreasing order! Prints 100, 90, 80 etc., finishing at 0

// //** Looping (itirating) over an array**//

// let animals = ['dogs', 'cats', 'birds', 'horses', 'cows'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// } // <=== will print the list of the array values starting from index 0 to the end

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(animals[i]);
// } // <=== will go backwards and print everithing from the end to the start

// //** Nested loops (for loop)**//

// for (let i = 1; i < 5; i++) {
//     console.log(`This OUTER loop runs ${i} times`);
//     for (let j = 1; j < 3; j++) {   // <=== j runs all the loops (3 times) for every one single i iteration
//         console.log(`This INNER loop runs ${j} times`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erica']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`This is ROW# ${i + 1}`);
//     console.log('=====================')
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// //** The WHILE loop  **//

// let num = 0;
// while (num < 0) {   // <=== The while loop continue to running while (conditions) is true
//     console.log(num);
//     num++;
// }

// let secretWord = 'BabbyHippo';

// let guess = prompt('Enter the secret word!...');
// while (guess !== secretWord) {                 // <=== while this is true..
//     guess = prompt('Not correct! Try again!')  //.. <=== this part will always run
// }

// console.log('Congratulations! You guessed a secret word!');

// //** BREAK key word **//

// let input = prompt('Hey there, just say a word');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me!') break;
// }

// console.log('Ok! You Won!');

// for (let i = 1; i <= 1000; i++) {
//     console.log(i);
//     if (i >= 100) break;
// }

//** FOR..OF.. loop **// - a newer loop option (does not supported by IE!)

// let subreddits = ['cringe', 'book', 'animals', 'fanny', 'news', 'pictures', 'movies'];

// for (let subreddit of subreddits) {
//     console.log(`Visit www.reddit.com/r/${subreddit}`);
// };

// const classSeatings = [
//     ['Kristen', 'Eric', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erica']
// ];

// for (let row of classSeatings) {
//     for (let seat of row) {
//         console.log(seat);
//     }
// };

// // * Can we used to iterate over other ITERABLE objects *// (like strings!)

// for (let character of "hello world") {
//     console.log(character);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;

// while (i < numbers.length) {
//     console.log(numbers[i] * numbers[i])
//     i++;
// };

//** FOR .. IN.. loop**// (iterating over an OBJECTS!);
// OBJETS in js are NOT iterables!

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// };

// for (let person in testScores) {
//     // console.log(person); // <=== will give us ONLY the keys (keenan, damon, kim etc!)
//     console.log(`${person} scored ${testScores[person]}`);
// };

// **Secont option to iterate over an Objects **//

// Object.keys(testScores); // <=== will return ['keenan', 'damon', 'kim' .. etc] (ar array of keys)
// Object.values(testScores); // <=== will return ['80', '67', '89'... etc] (ar array of values)
// Object.entries(testScores); // <=== will return arrays with (key: value pairs):
// <==== ['keenan', 80],
// <=== ['damon', 67],
// <=== ['kim', 89],
//etc

// **Summarize all values of the testScores Object and show average value of all scores **//

// let total = 0;
// let scores = Object.values(testScores); // <=== scores now store an ARRAY of values [80, 67, 89, etc]
// // so we can use FOR..OF.. loop to iterate over an ARRAY

// for (let score of scores) {
//     total += score // <=== looping over scores and adding SCORE (80, 67, 89 etc.) each time to toal
// }

// console.log(total / scores.length); // <====
// ====> finding average: total divadd by scores.legth (as score now is ana array)




