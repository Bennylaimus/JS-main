// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1', function (response) {
//     console.log('It worked!');
//     console.log(response); // <=== in this case 'response' is a success() function

//     // we can have nested function calls, for example fakeRequestCallback() function call for page 2

//     fakeRequestCallback('books.com/page2', function (response) {
//         console.log('It worked again!');
//         console.log(response);
//     })

// }, function (error) {
//     console.log('ERROR!');
//     console.log(error);   // <==== in this case 'error' is a failure() function
// });


//THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Running promise functions://

// 1 step: save promise in a variable:
// const request = fakeRequestPromise('yelp.com/api/coffee');

// 2 step: if the promise is 'resolved' run this:
// request  // <=== request in an object and we run object methods (.then, .catch) on it
//     .then(() => {
//         console.log('It worked!') // <=== .then represents something, that worked
//     })
//     .catch(() => {               // <==== .cathc represents something, that didn't worked
//         console.log('Error')
//     });

// Nested .then .catch promises:

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('Worked, page 1 displayed')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('Worked, page 2 displayed')
//             })
//             .catch(() => {
//                 console.log('Error, didnt worj for page 2')
//             })
//     })
//     .catch(() => {
//         console.log('Error, didnt work for page 1')
//     })

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('It worked for page 1');
        console.log(data);  // ***в зависимости от исхода 'data' становится либо 'reject'(наверху), либо 'resolved'(наверху)***!
        // Мы как бы скипаем и перепрыгиваем сразу на следующий шаг
        // Вместо тога, чтобы писать .then мы сразк 'говорим' верни (return) нам сразу следующее ДЕЙСТВИЕ
        return fakeRequestPromise('yelp.com/api/coffee/page2') // we use return and return out promise withing .then and now we don't need to nest .then, we can write it outside!
    })
    .then((data) => {
        console.log('It worked for page 2');
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('It worked for page 3');
        console.log(data)
    })
    // And we can use SINGLE .catch in this case for whole construction
    .catch((error) => {  // ***error becomes 'rejected' from the top ****
        console.log('Oh no, served down!')
        console.log(error);
    })

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



