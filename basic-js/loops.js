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


