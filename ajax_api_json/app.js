// JSON parse example:
// const data = { "time": { "updated": "May 5, 2023 16:35:00 UTC", "updatedISO": "2023-05-05T16:35:00+00:00", "updateduk": "May 5, 2023 at 17:35 BST" }, "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org", "chartName": "Bitcoin", "bpi": { "USD": { "code": "USD", "symbol": "&#36;", "rate": "29,520.5065", "description": "United States Dollar", "rate_float": 29520.5065 }, "GBP": { "code": "GBP", "symbol": "&pound;", "rate": "24,667.0991", "description": "British Pound Sterling", "rate_float": 24667.0991 }, "EUR": { "code": "EUR", "symbol": "&euro;", "rate": "28,757.2833", "description": "Euro", "rate_float": 28757.2833 } } }

// JSON.parse(data); // ==> JSON file parsed to an object

// const parsedData = JSON.parse(data) // we can the save parsed data to a variable

// parsedData.time.updateduk // "2023-05-05T16:35:00+00:00" // and we can now work with it like with an object and extract data as it is an object

// // Reverse action parse object to JSON file:

let info = {
    animal: 'dog',
    age: 15,
    isHomeless: false,
    owner: undefined,
};

let toJson = JSON.stringify(info);
console.log(toJson); // output: {"animal":"dog","age":15,"isHomeless":false} (no undefined, as JSON do not accept it!)



