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
// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);


// - Can return a function
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log("Congrats, I am a good function! ");
            console.log("You Win!!");
        }
    } else {
        return function() {
            alert("You have been infected by a Computer Virus!");
            alert("Stop trying to close this Window!!!");
            alert("Stop trying to close this Window!!!");
            alert("Stop trying to close this Window!!!");
            alert("Stop trying to close this Window!!!");
            alert("Stop trying to close this Window!!!");
        }
    }
}



function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(50, 100);

// function isBetween(num) {
//     return num >= 50 && num <= 100;
//     }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }
