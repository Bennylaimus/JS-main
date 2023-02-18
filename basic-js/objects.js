// ** OBJECTS**//

// - Objects are collections of PROPERTIES.
// - Properties are a KEY-VALUE pair
// - Rather that acceccsing data using an index, we use KEYS.

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





