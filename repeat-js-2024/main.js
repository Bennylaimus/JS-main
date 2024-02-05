// Call stack, callback hell, making fare request with callbacks


// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);

// const delayedColor = (newColor, delay, nextColor) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor
//     }, delay);
// };

// delayedColor('olive', 2000, () => {
//     delayedColor('yellow', 2000, () => {
//         delayedColor('blue', 2000, () => {
//             delayedColor('aquamarine', 2000)
//         })
//     })
// });

// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 2500) + 500;
//     setTimeout(() => {
//         if (delay > 2500) {
//             failure();
//             // failure(console.log('Connection timeout :('));
//         } else {
//             success();
//             // success(console.log(`Here is you data from ${url}`))
//         }
//     }, delay);
// };

// fakeRequestCallback('books.com/page1', () => {
//     console.log('Success'),
//         fakeRequestCallback('books.com/page2', () => {
//             console.log('Success again!')
//         }, () => {
//             console.log('Error, loading page 2')
//         })
// }, () => {
//     console.log('Error, connection timed out');
// });

// =================================================================

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (2000)) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Connection timeout');
//             } else {
//                 resolve(`Here is your data from ${url}`)
//             }
//         }, delay)
//     })
// }

// fakeRequestPromise('books.com/pag1')
//     .then(() => {
//         console.log('Promise resolved on page 1, .then() applies')
//         fakeRequestPromise('books.com/page2')
//             .then(() => {
//                 console.log('Promise resolved on page 2, .then() applies')
//             })
//         fakeRequestPromise('books.com/page3')
//             .then(() => {
//                 console.log('Promise resolved on page 3, .then() applies')
//             })
//             .catch(() => {
//                 console.log('Promise rejected on page 3, .catch() applies');
//             })
//             .catch(() => {
//                 console.log('Promise rejected on page 2, .catch() applies');
//             })
//     })
//     .catch(() => {
//         console.log('Promise rejected on page 1, .catch() applies');
//     });

// fakeRequestPromise('books.com/page1')
//     .then((data) => {
//         console.log('Resolve of Promise - page 1')
//         console.log(data)
//         return fakeRequestPromise('books.com/page2')
//     })
//     .then((data) => {
//         console.log('Resolve of Promise - page 2')
//         console.log(data)
//         return fakeRequestPromise('books.com/page3')
//     })
//     .then((data) => {
//         console.log('Resolve of Promise - page 3')
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log('Connection timedout, Promise rejected', error)
//     })

// const myRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
// }

// const result = myRequest();

// myRequest('dogs.com/page1')

// const delayedColor = (color) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(document.body.style.backgroundColor = color)
//         }, 1500)
//     })
// };

// delayedColor('red')
//     .then(() => {
//         return delayedColor('blue')
//     })
//     .then(() => {
//         return delayedColor('orange')
//     })
//     .then(() => {
//         return delayedColor('blue')
//     })
//     .then(() => {
//         return delayedColor('aquamarine')
//     })
//     .then(() => {
//         return delayedColor('orange')
//     })
//     .then(() => {
//         return delayedColor('olive')
//     })
//     .then(() => {
//         return delayedColor('yellow')
//     })

// =============================================================================

// async function hello() {

// };

// const singSong = async () => {
//     throw new Error('Promise is rejected');
//     return 'LA LA LA LA LA LA LA'
// };

// singSong()
//     .then((data) => {
//         console.log('Promise resolved with following data:', data);
//     }).catch((error) => {
//         console.log('Promise is rejected with Error:', error);
//     })

// const login = async (username, password) => {
//     if (!username || !password) {
//         throw ('Missing username or password')
//     } else if (password === 'Andrew') {
//         return (`Welcome, ${username}`)
//     } else {
//         throw ('invalid password')
//     }
// };


// login('Anrjusha', 'Andrew')
//     .catch((loginMessageOne) => {
//         console.log('Sorry,', loginMessageOne, 'please, try again')
//     })
//     .then((successLoginMessage) => {
//         console.log(successLoginMessage)
//     })
//     .catch((unSuccessfullLoginMessageTwo) => {
//         console.log('Sorry', unSuccessfullLoginMessageTwo, 'please, try again')
//     })


// const delayedColor = (color) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(document.body.style.backgroundColor = color)
//         }, 1500)
//     })
// };

// delayedColor('red')
//     .then(() => {
//         return delayedColor('blue')
//     })
//     .then(() => {
//         return delayedColor('orange')
//     })
//     .then(() => {
//         return delayedColor('blue')
//     })
//     .then(() => {
//         return delayedColor('aquamarine')
//     })
//     .then(() => {
//         return delayedColor('orange')
//     })
//     .then(() => {
//         return delayedColor('olive')
//     })
//     .then(() => {
//         return delayedColor('yellow')
//     })

// async function rainbow() {
//     await delayedColor('red');
//     await delayedColor('orange');
//     await delayedColor('magenta');
//     await delayedColor('tomato');
//     await delayedColor('aquamarine');
//     return 'ALL DONE'
// };

// async function finisher() {
//     await rainbow().then((messageOne) => { console.log(messageOne) })
//     return 'CONGRATULATIONS!'
// }

// finisher().then((messageTwo) => { console.log(messageTwo) });

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (2000)) + 500;
//         setTimeout(() => {
//             if (delay > 2000) {
//                 reject('Connection timeout');
//             } else {
//                 resolve(`Here is your data from ${url}`)
//             }
//         }, delay)
//     })
// }

// async function makeTwoRequests() {
//     try {
//         let data1 = await fakeRequestPromise('books.com/page1')
//         console.log(data1)
//         let data2 = await fakeRequestPromise('books.com/page2')
//         console.log(data2)
//     }
//     catch (error) {
//         console.log('An Error Occured:', error)
//     }
// }

// makeTwoRequests();

//==================================================================================

// const obj = {
//     dog: 'Alice',
//     age: 22,
//     isAdmin: true,
//     isHere: null,
// };

// const toJson = JSON.stringify(obj);
// console.log(toJson);

// const data = `{
// "lat": 33.44,
//     "lon": -94.04,
//         "timezone": "America/Chicago",
//             "timezone_offset": -18000}`

// const parsedData = JSON.parse(data);

// // console.log(parsedData.timezone);

// const myObject = {
//     name: 'Andrew',
//     age: 24,
//     isAdmin: true,
//     title: undefined
// };

// console.log(myObject);

// const parsedObject = JSON.stringify(myObject);

// console.log(parsedObject);

// =====OLD CLUNKY WAY TO GET API Requests (don't need to remember it!) ======

// "https://swapi.dev/api/people/1" <==== here our API endpoint

// const request = new XMLHttpRequest;

// request.onload = function () {
//     console.log('It loaded!')
//     const data = JSON.parse(this.responseText)
//     console.log(data.name);
// }

// request.onerror = function () {
//     console.log('Error!')
//     console.log(this)
// }

// request.open("GET", "https://swapi.dev/api/people/1")
// request.send();

// ====== NEWER, FUNCIER WAY, TO GET API. FETCH API =======================

// fetch("https://swapi.dev/api/people/1")
//     .then((response) => {
//         return response.json(); /// <=== also return PROMISe, so need one more .then()!
//     })
//     .then((data) => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2")
//     })
//     .then((response2) => {
//         return response2.json();
//     })
//     .then((data2) => {
//         console.log(data2)
//     })
//     .catch(error => {
//         console.log('Error!', error)
//     });

// Doing FETCH API, using async / await function

// const loadStarWarsPeople = async () => {
//     try {
//         const response = await fetch("https://swapi.dev/api/peoplesdddsa/1")
//         const data = await response.json();
//         console.log(data);
//         const response2 = await fetch("https://swapi.dev/api/people/2")
//         const data2 = await response2.json();
//         console.log(data2)
//     }
//     catch (error) {
//         console.log(error)
//     }
// };

// loadStarWarsPeople();

/// ==== Getting (FETCH API) API using AXIOS library (Github - Axios) ====

// axios.get("https://swapi.dev/api/people/1")
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// === Using axios library in async / await function ======

// const getStarWarsPersons = async () => {
//     const response = await axios.get("https://swapi.dev/api/people/1")
//     console.log(response.data)
// };

// getStarWarsPersons();

// === A little bit of refactoring, using persons ID ====

// const getPersonName = async (personId) => {
//     const response = await axios.get(`https://swapi.dev/api/people/${personId}`)
//     console.log(response.data)
// }

// getPersonName(5);
// getPersonName(10);

// === Setting Headers with axios library (using dad joke API) ====

const jokes = document.querySelector("#jokes");
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
};

button.addEventListener('click', addNewJoke)

const getDadJoke = async () => {
    try {
        const configuration = { headers: { Accept: "application/json" } };
        const response = await axios.get("https://icanhazdadjoke.com/", configuration)
        return response.data.joke
    }
    catch (error) {
        return "Sorry, no new jokes available!"
    }
};

getDadJoke();



