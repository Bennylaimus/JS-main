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

const getStarWarsInfo = async (id) => {
    try {
        const person = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(person.data)
    } catch (error) {
        console.log('Error', error)
    }
}

getStarWarsInfo(1);
getStarWarsInfo(2);
getStarWarsInfo(10);
getStarWarsInfo(11);
