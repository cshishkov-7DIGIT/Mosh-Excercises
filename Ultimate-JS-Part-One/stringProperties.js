const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(movie) {
    for (let key in movie) {
        if (typeof movie[key] === 'string') {
            console.log(key, movie[key]);
        }
    }
}