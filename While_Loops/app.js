// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt ("Enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("Congrats you got the secret!!!")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter you first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("Too high!! Enter a new guess:");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
    attempts++;
  } else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
}
if (guess === "q") {
  console.log("Ok, You Quit!!");
} else {
  console.log("Congrats! You Win!!!!");
  console.log(`You Got it!!! It took you ${attempts} guesses`);
}
