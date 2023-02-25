let maxNum = parseInt(prompt('Enter a maximum number to start a game'));

while (!maxNum) {
    maxNum = prompt('Enter a valid numeric value!');
};

const secretNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt('Enter your first number!'));

let count = 0;

while (parseInt(guess) !== secretNum) {
    count++;
    if (guess > secretNum) {
        guess = prompt('Your number is too high! Enter a number!');
    } else if (guess < secretNum) {
        guess = prompt('Your number is too low! Enter a number!');
    } else if (guess.toLowerCase() === 'quit') {
        break;
    }
}

console.log(`Congratulation! You won! It took you ${count} guesses`);

