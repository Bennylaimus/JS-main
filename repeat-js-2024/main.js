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











