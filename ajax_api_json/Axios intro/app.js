// Examples working with axios //
// All info about axios installation and methods are available in Github

// API we are working with: "https://swapi.dev/api/people/1/"

// Axios GET:
// axios.get("https://swapi.dev/api/people/1/")  // <=== will return a Promise (same as fetch('...'))
//     .then((response) => {
//         console.log('Here is axios Promise response', response);
//     })
// The biggest improvement is that axios returns us an Object with data key.
// data key already contain parsed JSON file, so we don't need to do an extra step like parse.JSON or response.json()

//Refactored axios get requets (usin async / await function):

// const getStarWarsInfo = async () => {
//     const person1 = await axios.get("https://swapi.dev/api/people/1/")
//     console.log(person1.data) // <=== data is an axios Object key, that contains parsed JSON
// }

// getStarWarsInfo();

//A little bit more refactoring to make our code more flexiable:

// const getStarWarsInfo = async (id) => {
//     try {
//         const person = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(person.data)
//     } catch (error) {
//         console.log('Error', error)
//     }
// }

// getStarWarsInfo(1);
// getStarWarsInfo(2);
// getStarWarsInfo(10);
// getStarWarsInfo(11);

// Setting Headers with axios //
// Some API requires us to include Headers in our GET request

// const getDadjoke = async () => {
//     const response = await axios.get("https://icanhazdadjoke.com/api")
//     console.log(response) // <=== prints out an HTML file, as this is default behavior of this specific API (to get JSON we need to specify Header called 'Accept')
// }

// getDadjoke();

// To specify Headers in axios, we can pass 2nd argunet with a specification, in our case:

// const getDadJoke = async () => {
//     //First we can write this 'setting' on a separate like and save it to a variable, to make it looks cleaner:
//     const config = { headers: { Accept: 'application/json' } }; // we can add as many headers as we want after ','
//     const response = await axios.get("https://icanhazdadjoke.com/", config) // <=== and now we just pass our 'setting' as a second argument as required (.com, without api this time!!!)
//     console.log(response.data.joke) // <=== now we can access to a joke itself using Object access methods => data => joke .data.joke
// }

// getDadJoke();

// Now, let's try to add some DOM manupulation with our axios API requests (also check an HTML section)

//DOM manipulations:

// const jokesList = document.querySelector('#jokes_list');

// const getDadJoke = async () => {
//     //First we can write this 'setting' on a separate like and save it to a variable, to make it looks cleaner:
//     const config = { headers: { Accept: 'application/json' } }; // we can add as many headers as we want after ','
//     const response = await axios.get("https://icanhazdadjoke.com/", config) // <=== and now we just pass our 'setting' as a second argument as required (.com, without api this time!!!)
//     console.log(response.data.joke) // <=== now we can access to a joke itself using Object access methods => data => joke .data.joke
//     const newLI = document.createElement('li'); // <== creating a new <li><li> element on the page using document.createElement('li')
//     newLI.append(response.data.joke) // <=== appending (adding) data (text) to this new created <li><li> (text is from response.data.joke)
//     jokesList.append(newLI) // <=== finnaly appending (adding) this new, filled <li><li> element to out <ul><ul> list
// }

// getDadJoke();

// Next step: we can split this code (function into 2 functions)!
// 1st step - get a random joke, using API
// 2nd step - add this random joke to a webpage


const jokesList = document.querySelector('#joke_list');
const button = document.querySelector('#btn');



const addNewJoke = async () => {
    const jokeText = await getDadJoke(); // first, we are calling getDadJoke() function to receive random joke via API and saving this joke's text to a variable
    const newLI = document.createElement('li'); // <== creating a new <li><li> element on the page using document.createElement('li')
    newLI.append(jokeText) // <=== appending (adding) data (text) to this new created <li><li> (text is from response.data.joke)
    jokesList.append(newLI) // <=== finnaly appending (adding) this new, filled <li><li> element to out <ul><ul> list
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }; // we can add as many headers as we want after ','
        const response = await axios.get("https://icanhazdadjoke.com/", config) // <=== and now we just pass our 'setting' as a second argument as required (.com, without api this time!!!)
        return response.data.joke // remember, async function returns a promise, so to make our addNewJoke() to be able to receive a promise, we can make this function to ne async, and return promise of getDadJoke() by making await getDadJoke()
    } catch (error) {
        return "Sorry! No new joke available!" // this text will be returned (and appended as text, if something will go wrong!)
    }
}


//On click we calling addNewJoke, which calling getDadJoke
// addEventListener should be called after we declared a fucntions it will use!
button.addEventListener('click', addNewJoke);

