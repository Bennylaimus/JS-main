// //** FOR Loop**//

for (let i = 1; i <= 10; i++) {
    console.log(i);
} // <=== prints numbers form 1 to 10


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
} // <=== prints out all even (чётные) numbers from 1 to 20

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
} // <=== decreasing order! Prints 100, 90, 80 etc., finishing at 0

//** Looping (itirating) over an array**//

let animals = ['dogs', 'cats', 'birds', 'horses', 'cows'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
} // <=== will print the list of the array values starting from index 0 to the end

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(animals[i]);
} // <=== will go backwards and print everithing from the end to the start

//** Nested loops (for loop)**//

for (let i = 1; i < 5; i++) {
    console.log(`This OUTER loop runs ${i} times`);
    for (let j = 1; j < 3; j++) {   // <=== j runs all the loops (3 times) for every one single i iteration
        console.log(`This INNER loop runs ${j} times`);
    }
}

const seatingChart = [
    ['Kristen', 'Eric', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erica']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`This is ROW# ${i + 1}`);
    console.log('=====================')
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//** The WHILE loop  **//

let num = 0;
while (num < 0) {   // <=== The while loop continue to running while (conditions) is true
    console.log(num);
    num++;
}

let secretWord = 'BabbyHippo';

let guess = prompt('Enter the secret word!...');
while (guess !== secretWord) {                 // <=== while this is true..
    guess = prompt('Not correct! Try again!')  //.. <=== this part will always run
}

console.log('Congratulations! You guessed a secret word!');

//** BREAK key word **//

let input = prompt('Hey there, just say a word');
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === 'stop copying me!') break;
}

console.log('Ok! You Won!');

for (let i = 1; i <= 1000; i++) {
    console.log(i);
    if (i >= 100) break;
}




