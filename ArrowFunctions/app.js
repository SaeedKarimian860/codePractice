// const add = function(x,y) {
//     return x + y;
// }

// function add(x,y) {
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

// const square = (num) => {
//     return num * num;
// }
//another way to square a number
const square = (x) => {
    return x ** 2; // or x * x
}


const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
    //this goes from 1 - 5, the + 1 gets it to be 1 - 6.
}

