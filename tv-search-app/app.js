const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const searchItem = form.elements.query.value
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchItem}`);
    addImages(response.data)
});

const addImages = function (shows) {
    const image = document.createElement('img');
    for (let i = 0; i >= 0; i++) {
        // if (shows.data.image) {
        //     image.src = shows[i].show.image.medium
        //     document.body.append(image)
        // }
    }
};




// const image = document.createElement('img');
// image.src = response.data[0].show.image.medium
// document.body.append(image);