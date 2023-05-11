// Fetch function and getting API with Fetch function example
// API we are working with (getting): 'https://swapi.dev/api/people/1/'

//1 step:
// fetch("https://swapi.dev/api/people/1/"); // after we run this we get bacj a Promise (pending, fulfilled, response)

//2 step:
// As this is a Promise, we can actually use .then and .catch methods on it:
// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {                     // res is Promise Response
//         console.log('Resolved', res);
//         // But we need to use .json method on the resolve (res) and it will also return to us a Promise
//         // so we are using .then once again!
//         res.json().then((data) => console.log(data)); // and only now we finnaly get our json object
//     })
//     .catch((err) => {
//         console.log('Error!', err);
//     })

// This code above can be refactoring like this:

// fetch("https://swapi.dev/api/people/1/")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('Not Loaded!', error)
//     })

// In case if we have a nested / multiple requests - we can just use Promise syntax with return / .then

// In this example above we are actually getting one API and only then another
// Some time we MUST to it (for example, when we getting a full movie list first),
// and only then an information about some specific movie

// But we can actually make another refactoring using async fucntion!

// Example:

// const loadStarWarsInfo = async () => {
//     try {                                  // remember to use try - catch construction to catch any error in async functions!
//         const response1 = await fetch("https://swapi.dev/api/people/1/")
//         const data1 = await response1.json();
//         console.log(data1);
//         const response2 = await fetch("https://swapi.dev/api/people/2/")
//         const data2 = await response2.json();
//         console.log(data2);
//     }
//     catch (error) {
//         console.log(error)
//     }
// };

// loadStarWarsInfo();

