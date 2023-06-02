// function User(name) {
//     this.name = name;
//     this.admin = false;
// };

// let newUser = new User('Andrew');
// console.log(newUser);

function One(name) {
    this.name = name;
};

function One(name) {
    this.name = name
};

let userOne = new One('Andrew');

let userTwo = new One('Andrew');

console.log(userOne);
console.log(userTwo);

console.log(userOne == userTwo);