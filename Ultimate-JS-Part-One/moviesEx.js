const movies = [
    {
        title: 'a',
        year: 2018,
        rating: 4.5,
    },
    {
        title: 'b',
        year: 2018,
        rating: 4.7,
    },
    {
        title: 'c',
        year: 2018,
        rating: 3,
    }
];

const title = movies.filter(movie => movie.rating >= 4)
    .sort((a, b) => a.year - b.year)
    .reverse()
    .map(movie => movie.title)
    .forEach(movie => console.log(movie));

console.log(title);
