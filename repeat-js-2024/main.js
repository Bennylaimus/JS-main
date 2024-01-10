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

const delayedColor = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.body.style.backgroundColor = color)
        }, 1500)
    })
};

delayedColor('red')
    .then(() => {
        return delayedColor('blue')
    })
    .then(() => {
        return delayedColor('orange')
    })
    .then(() => {
        return delayedColor('blue')
    })
    .then(() => {
        return delayedColor('aquamarine')
    })
    .then(() => {
        return delayedColor('orange')
    })
    .then(() => {
        return delayedColor('olive')
    })
    .then(() => {
        return delayedColor('yellow')
    })





