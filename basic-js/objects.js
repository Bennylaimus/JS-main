// ** OBJECTS**//

// - Objects are collections of PROPERTIES.
// - Properties are a KEY-VALUE pair
// - Rather that acceccsing data using an index, we use KEYS.

// Creating - 1st option: let user = new Object();
// Creating - 2nd option: let use = {}; // an empty shell of an object


// let comment = {
//     userName: 'Mick Jagger',
//     downVote: 19,
//     upVotes: 214,
//     netScore: 195,
//     commentText: 'Tastes like chicken, lol',
//     tags: ['#hilaroius', '#fanny', '#silly'],
//     isGilded: false
// };

//** Accessing data in objects**//

// - 1st option:
// - comment['userName'] // output 'Mick Jagger'
// - comment['tags'][1] // output #funny

// - 2nd option (more common?)
// - comment.userName
// - comment.tags[1];

//IMPORTANT//

// - All object KEYS we make are converted to STRINGS (except symbols)

//** Explanationa, of useing (.) vs [] to access an object value**/
// https://siamwrites.netlify.app/accessing-objects-in-javascript/ //

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};

//** Modofying Objects**//

const midterms = {
    antonio: 79,
    daniel: 68,
    alfy: 96
};

//* Updating *//

midterms.antonio = 'B+' // output antonio: 'B+'
midterms['daniel'] = 'C' // output daniel: 'C'

//* Adding new *//

midterms.andrew = 'A+' // output andrew: 'A+' (new key andrew with value 'A+' is added)
midterms.yury = 'A+' // output yury: 'A+'(new key yury with value 'A+' is added to object midterms)

//** Arrays + Objects and accesing**//

const comments = [
    { userName: 'Tammy', comment: 'lol guys', votes: 9 },
    { userName: 'FishBoi', comment: 'glub glub', votes: 126651 }
];

console.log(comments[1].comment);
console.log(comments[0]['votes']);








