// API we are working with: "tvmaze.com/api" //
// API endpoint: "https://api.tvmaze.com/search/shows?q=girls" //

const form = document.querySelector('#searchForm'); // <=== HTML element 'form' selected and stored in a variable
form.addEventListener('submit', async function (event) {  // <=== adding event listened 'submit' on the form
    event.preventDefault();  // <=== preventing default form-submit behavior of 'submit' event with preventDefault()                 
    // console.log(form.elements.query.value);   // value we typed in form's input field is kept in form.element.query('name' in HTML form).value
    const searchItem = form.elements.query.value // <=== saving form's 'input' into a variable
    const config = { params: { q: searchItem } }; // <=== setting an axios 'get' config with 'params', now q will be equal to seachTerm, so we can  even search for multiple words
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config); // <=== (config is now actually 'q=searchItem' and it goes right after shows), otherwise we can just hardcode it with ${searchItem}
    addImages(response.data); // <=== response.data (which is an array will be passed in 'shows' argument)
    form.elements.query.value = ''; // <=== emptying and input value of 'input' field adter each input we typed
    // console.log(response.data); // <=== checking what will we get back with API, via .data
    // console.log(response.data[0].show.image.medium) // <=== checking what we will get from 1st item in the array [0] under .show.medium
    // we are getting back an image URL
    // Now, we want to display taht image!

    // ===== we want to loop through every image in the response.data array, so we will put this in a separate funtion! ====
    // const img = document.createElement('img'); // <=== creating a new 'img' element (<img> tag) on the page
    // img.src = response.data[0].show.image.medium //<=== adding an image from API to <img> source img.src
    // document.body.append(img); // <=== adding (appending) our 'filled' image to a body
    // ===== will be putted in a separate function called 'addImages' =================================
});

// addImages function:

const addImages = (shows) => {       // <=== 'shows' is now response.data array (see above)
    for (let singleShow of shows) {  // <=== singleShow reffering to everu single element of the array
        if (singleShow.show.image) {   // <=== проверка на null (if some of the image: 'null' (то есть нет катринки) то есть if(true)) - делай 'всё, что в if', если 'нет' (if(false)) - не делай всего этого
            const img = document.createElement('img'); // <=== creating a new 'img' element (<img> tag) on the page
            img.src = singleShow.show.image.medium //<=== adding an image from API to <img> source img.src
            document.body.append(img); // <=== adding (appending) our 'filled' image to a body
        }
    }
}


