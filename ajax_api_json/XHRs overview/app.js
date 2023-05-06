// An example of XHRs (an 'original', 'old' version of getting requests with JS)

// API we are working with (trying to get):
// "https://swapi.dev/api/people/1/"

// 1 step - making a new XHR Request and savi it to a variable
const request = new XMLHttpRequest();

// 2 step 
// Before sending a request - we need to prodive 2 callback (one - for 'positive' GET request (same as resolve),
// second - with 'negative' result (same as reject)) - they looks following:

// .onload - will run, when there is no Errors!
request.onload = function () {
    console.log('LOADED!'); // will console.log the request object - this
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
}
// .onerror - will run, when there is an Error
request.onerror = function () {
    console.log('ERROR!');
    console.log(this); // will console.log the request object - this
}
//3 step - use .open method on it and privide two parametrs (1. reguest type: "GET" 2. API URL)
request.open('GET', 'https://swapi.dev/api/people/1/');

//4 step - after .open it - we need to send it:
request.send();

//5 step (step 2.1)
//* But what we are 'after' is actually a ResponseText object part
//* So we can print that out with this.responseText
//* As we get back a TEXT to access some specific part of the text we actually
//  need to parse it to a JS object! (we are parse responseText content to JS object)
// so final step is:
// const data = JSON.parse(this.responseText); ===> now it is a JSON object
// and we can extract some 'parts', for example:
// console.log(data.height, data.age) etc




