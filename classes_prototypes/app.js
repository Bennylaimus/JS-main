// ============================ 1st Lesson: Intro to prototypes ================================ // 

//Defining out own behavior of an array as an example:
// const arr = [1, 2, 3];
// arr.sing = function () {
//     console.log('LA LA LA');
// }

// // arr (which is an array will now have a 'sing' function in array methods)

// const doc = document.body
// console.dir(doc);

// String.prototype.grumpus = () => {
//     alert('Go Away you nasty Grumpus!');
// }

// const cat = 'Blue';
// cat.grumpus() // alert (Go Away ...)

// String.prototype.yell = function () {
//     console.log(this);
// }

// String.prototype.yell = function () {
//     return `OMG! ${this.toUpperCase()} !!! OMGIIIII!`
// }

// Array.prototype.pop = function () {
//     console.log('I will never ever pop it up!');
// }

// const arr3 = [7, 8, 9];

// console.log(arr3.pop()); // output ==> 'I will never ever pop it up!'

// ============================ 2nd Lesson: Intro Into OOP & Factory function ================================ // 

// Example of FACTORY FUNCTION:

//Some ready-function taken from stackoverflow, that accepts x3 rgb value and converts them to a hex:
// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// hex(255, 100, 25); // ==> #ff6432;

// 1. We can write a function, that takes 3 colors (r, g and b) and convert it to a rgb(r, g, b)
// something, that we already did before
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`;
// }
// rgb(200, 50, 100);

// 2. So we have two our functions hex() and rgb(), which are functioning by their own perfectly, but now
// we will try to add them to an object and switch rgb and hex value, without passing numbers to hex() and
// separatety to rgb() each time
// Basically, the function, that will create as such object is calling a factory function

// - this function will create an object, which will store:
// 1. and 'r', 'g', 'b' as an object values
// 2. will have hex() method inside of this object
// 3. will have rgb() method inside of this object

function makeColor(r, g, b) {       // 1. We are creating a fucntion()
    const color = {}                // 2. inside a fucntion we are creating an empty object {}  
    color.r = r                     // 3. we are adding 'r' from the function argument to object (with standart syntax: color.r = r)
    color.g = g                     // 4. Same with 'g'
    color.b = b                     // 5. Same with 'b'
    // At this point: makeColor(255, 100, 20) ===>
    // ===> {r: 255, g: 100, b: 20}; - we have an object with this keys / values

    // Now we can add an rgb() method inside our object:
    color.rgb = function rgb() {    // 6.adding an rgb() method to our object
        const { r, g, b } = this;   // 7.because we need to access to some values of an object inside a method, we are using 'this' keyword (this in our case in 'color' object) - we can use 'destruction method' and assign this.r, this.g, this.b that way (check destruction objects lesson) it is same as return `rgb(${this.r}, ${this.g}, ${this.b})`;
        return `rgb(${r}, ${g}, ${b})`;
    }
    // Now we are also adding hex() method inside our object
    color.hex = function hex() {
        const { r, g, b } = this;  // or you can 'hard-code' it this.r, this.g, this.b
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color                   // 8. and in the end we want to return this object {} (color)
};

// Now we need to create a variable and store our makeColor() in that variable
// We need to do it, because we will need to call .rgb and .hex methods on this variable
// We can't just to it directly in makeColor()

const myColor = makeColor(100, 200, 250);

console.log(myColor); // ====>
// ====> myColor in this case is an object, that contains keys r: g: b: and .rgb() method and hex() method
// and we pass 100 to r, 200 to b and 250 to g at the moment we assiging myColor to = maleColor(100, 200, 250)

console.log(myColor.rgb()); // it's looks the same as makeColor().rgb()
// It's like we would wrire maleColor(100, 200, 250).rgb() and call an .rgb method on it
console.log(myColor.hex());

