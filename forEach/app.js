// forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// numbers.forEach(function(el) {
//     console.log(el);
// })

// using forEach to get all even numbers
numbers.forEach(function(el) {
    if (el % 2 === 0) {
        console.log(el);
    }
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

movies.forEach(function(movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})