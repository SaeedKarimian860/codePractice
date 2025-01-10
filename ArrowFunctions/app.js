// const add = function(x,y) {
//     return x + y;
// }

// function add(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//   return x + y;
// };

// const square = (num) => {
//     return num * num;
// }
//another way to square a number
const square = (x) => {
  return x ** 2; // or x * x
};

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
//     //this goes from 1 - 5, the + 1 gets it to be 1 - 6.
// }

//implicit returns
const rollDie = () =>(
     Math.floor(Math.random() * 6) + 1
)
//uses parentheses instead of curly braces


const add = (a, b) => a + b; //one-liner implicit return
//this only works if there is one and only one expression in the body of a function 


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

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score / 10} `
// })


//this could also be written on one line
const newMovies = movies.map(movies => (
    `${movie.title} - ${movie.score / 10}`
))



//setTimeout & setInterval
// console.log("HELLO!!....")
// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000);
//after 3000 ms (3 seconds) this will print out HELLO!


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(id);
//use clearInterval calling id to stop this from continuously running!