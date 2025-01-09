const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubles = numbers.map(function(num) {
    return num * 2;
})



const movies = [
    {
        title: '1917',
        score: 100
    },
    {
        title: 'All Quiet on the Western Front',
        score: 95
    },
    {
        title: 'The Magnificent Seven',
        score: 80
    },
    {
        title: 'The Hateful Eight',
        score: 93 
    }
]

// const titles = movies.map(function(movie) {
//     return movie.title;
// })

//writing same code as above but printing all titles uppercase
const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
})
