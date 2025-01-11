const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

//using for...of
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

//using the reduce method
const total = prices.reduce((total, price) => {
  return total + price;
});

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
});