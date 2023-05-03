const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 1000) {
                reject('Connection Timeout :(')
            } else {
                resolve('resolved');
            }
        }, delay)
    })
};

// We can CAPTURE a value returned in resolve in variable and the worj with that variable

// async function receivingData() {
//     let data = await fakeRequestPromise('myhouse/page1');
//     console.log(data);
// };

// receivingData(); // prints resolved

// How do handle errors in async functions? (.catch / reject)

// We can actually do it with a try - catch:

// async function receivingData() {
//     await fakeRequestPromise('myhouse/page1');
//     try {
//         erororr.log('hello') //  some error appears
//     }
//     catch (error) {
//         console.log('An Error appeared', error) // error is the value of the error in try itself (erororr.log('hello') in or case)
//     }
// };

// receivingData();

// How it will work with our fakeRequestPromise()

async function receiveData() {
    try {
        await fakeRequestPromise('myhomepage/page1');
        await fakeRequestPromise('myhomepage/page2'); // if at some point error (reject) will appear it will be caught 
        await fakeRequestPromise('myhomepage/page3'); // in catch and we will see it and will be able to check what exactly this erro is!
    }
    catch (error) {
        console.log('Error is caught');
        console.log(error);
    }
};

