//previous way of writing function
// function add(x, y) {
//     return x + y;
// }

//Function Expression
const add = function(x, y) {
    return x + y;
}




//Higher Order Functions
// - Can pass functions as arguments
// - Can return a function
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);