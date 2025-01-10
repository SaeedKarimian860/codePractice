const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

numbers.filter((n) => {
  return n === 4;
});

// numbers.filter(n => {
//     return n < 10
// })

const movies = [
  {
    title: "Men in Black",
    score: 90,
    year: 1997,
  },
  {
    title: "A Clockwork Orange",
    score: 88,
    year: 1972,
  },
  {
    title: "Mean Machine",
    score: 80,
    year: 2001,
  },
  {
    title: "A Fistful of Dollars",
    score: 98,
    year: 1964,
  },
  {
    title: "Master of the Flying Guillotine",
    score: 78,
    year: 1976,
  },
];

// const goodMovies = movies.filter(movie => {
//     return movies.score > 80
// })

//using implicit one-liner
const goodMovies = movies.filter((m) => m.score > 80);
const goodTitles = goodMovies.map(m > m.title);

movies.filter((m) => m.score > 80).map((m) => m.title);
const badMovies = movies.filter((m) => m.score < 80);

//Every
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 76];

exams.every((score) => score >= 75);
