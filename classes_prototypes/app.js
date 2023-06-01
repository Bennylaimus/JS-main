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
// Basically, the function, that will create us such object is calling a factory function

// - this function will create an object, which will store:
// 1. and 'r', 'g', 'b' as an object values
// 2. will have hex() method inside of this object
// 3. will have rgb() method inside of this object

// function makeColor(r, g, b) {       // 1. We are creating a fucntion()
//     const color = {}                // 2. inside a fucntion we are creating an empty object {}  
//     color.r = r                     // 3. we are adding 'r' from the function argument to object (with standart syntax: color.r = r)
//     color.g = g                     // 4. Same with 'g'
//     color.b = b                     // 5. Same with 'b'
//     // At this point: makeColor(255, 100, 20) ===>
//     // ===> {r: 255, g: 100, b: 20}; - we have an object with this keys / values

//     // Now we can add an rgb() method inside our object:
//     color.rgb = function rgb() {    // 6.adding an rgb() method to our object
//         const { r, g, b } = this;   // 7.because we need to access to some values of an object inside a method, we are using 'this' keyword (this in our case in 'color' object) - we can use 'destruction method' and assign this.r, this.g, this.b that way (check destruction objects lesson) it is same as return `rgb(${this.r}, ${this.g}, ${this.b})`;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     // Now we are also adding hex() method inside our object
//     color.hex = function hex() {
//         const { r, g, b } = this;  // or you can 'hard-code' it this.r, this.g, this.b
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color                   // 8. and in the end we want to return this object {} (color)
// };

// Now we need to create a variable and store our makeColor() in that variable
// We need to do it, because we will need to call .rgb and .hex methods on this variable
// We can't just to it directly in makeColor()

// const myColor = makeColor(100, 200, 250);

// console.log(myColor); // ====>
// // ====> myColor in this case is an object, that contains keys r: g: b: and .rgb() method and hex() method
// // and we pass 100 to r, 200 to b and 250 to g at the moment we assiging myColor to = maleColor(100, 200, 250)

// console.log(myColor.rgb()); // it's looks the same as makeColor().rgb()
// // It's like we would wrire maleColor(100, 200, 250).rgb() and call an .rgb method on it
// console.log(myColor.hex());

// ============================ 3rd Lesson: Constructor function ===================================== //

// Another, more preferable approach, than "Factory Function"
// Why?
// In our previous example with "factory function" everytime we created a method inside a makeColor function (like .rgb() and .hex()) -
// the UNIQUE method is created EVERY TIME and added to a 'color' object! But it's actually no reason to have a unique copy of function
// (.rgb(), hex() ) every time!
// If we would create a function rgb() {
// return `rgb(${r}, ${g}, ${b})`
//}
// we could use this one function everytime with different parametrs, no need to create a new function rgb2(), function rgb3 ()
// everytime we pass in different parametrs. But this is NOT whar happening in the previous example (Fuctory funtion) - we actually
// creating a 'new unique copy' of function every time and adding it to a 'color' object every time!

// So here's where anothe approach comes in - a "Constructor Functions":

// The idea of Constructor function is to put a method (a function inside an object) into a Prototype, so this method will be the sane
// for all other objects it will be used with (it's like 'hi'.slice === 'bye'.slice // true), because slice is a method for ALL strings
// 'kept' as a Protorype

// Syntax of Constructor function:

// The 'new' operator let's developers create an instance of a user-defined object of of one of the
// build-in object types that has a construction function. The 'new' keyword does the following things:

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from 'Step 1' as the 'this' context;
// 4. Returns 'this' if the function doesn't return its own object.

// 1st Step: (creating a function, that creates an object for us):

// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };
// If we will call Color() function - in the scope of Color() function 'this' is not revering to any object, it will refers to 'window' object
// But if we will call it with a 'new' keyword it will behaive defferently!
// let result = new Color() - basically 'Step 1' & 'Step 3' are happening when we are calling function with 'new' keyword
// 1) it will created a new blanc object and 3) it will set 'this' to that new created object, so 'this' will now refers to this object
// so with this.r = r, this.g = g, this.b = b we will be adding 'r', 'g' and 'b' to that new object
// and then it 4) returns 'this' at the end.

let result = new Color(255, 50, 200);
console.log(result);

// What it also did - it 'created' a constructor function under the Protorype! And it is the second thing it does ('Step 2')

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    // this.rgb = function () {
    //     const { r, g, b } = this;
    //     return `rgb(${r}, ${g}, ${b})`
    // }
};

// Right now .rgb is still nod defined under Prototype - it is still as an unique copy of Color object
// To make this work - we need to define this medhot OUTSIDE our Color obejct via .prptotype ===>
// ===>
Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// We can also create an alpha-chanel rgba

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

let color1 = new Color(200, 250, 40);
console.log(color1) // an .rgb method now defines under the 'prototype'! and can we used by anothe objects!

color1.rgb(); // and 'color1' object now have an access to .rgb() method via prototype

let color2 = new Color(240, 200, 100);
color2.rgb(); // and 'color2' object also now have an access to .rgb() method via prototype

let color3 = new Color(100, 50, 20,)


// document.body.style.backgroundColor = color1.rgb(); // <=== standard color from color1 variable (which is new Color(200, 250, 40))
document.body.style.backgroundColor = color1.rgba(0.5); // <=== now we are using .rgba() method and passing (3) as an 'a' parametr

// ============================= 4th Lesson: Classes ==================================================================== //
