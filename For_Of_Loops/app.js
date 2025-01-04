const movies = ['Pulp Fiction', 'Nosferatu', 'Super Bad', 'Gladiator', 'Casino', 'Heat'];

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

//does the same loop as above code
for (let movie of movies) {
    console.log(movie);
}


const numbers = [1,2,3,4,5,6,7,8,9];

for (let num of numbers) {
    console.log(num * num);
}