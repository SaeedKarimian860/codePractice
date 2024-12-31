//Just some more practice work learning JavaScript Fundamentals

// Nested Array
//Was messing around with .shift, .unShift, .push, .pop, .sort, .reverse, and indexOf in the browser console.
let shoppingCart = [
  ["Chicken", "Beef", "Turkey"],
  ["Pasta", "Noodles", "Rice"],
  ["Ketchup", "Mustard", "Mayo"],
  ["Napkins", "Spoons", "Forks"],
  ["Water", "Juice", "Soda"],
];

// Objects
const exerciseData = {
  totalExercises: 7,
  maxBenchPress: 205,
  totalCurls: 40,
  totalMiles: 3.5,
  avgHeartRate: 120,
};

let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5!!");
  console.log(random);
}

//if, else if, else statements
//Just a user score and associated message depending on user score.
let userScore = 5;
if (userScore === 5) {
  console.log("You are a Mastermind!!");
} else if (userScore === 4) {
  console.log("You are very Skilled!!");
} else if (userScore === 3) {
  console.log("You did it!");
} else if (userScore === 2) {
  console.log("You might need a little practice");
} else {
  console.log("GAME OVER!!!");
}

// switch statements
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
//Had to look up days.forEach to get everything to run in the console.
days.forEach((day) => {
  switch (day) {
    case "Monday":
      console.log("It's the start of the week");
      break;
    case "Tuesday":
      console.log("Today is Tuesday");
      break;
    case "Wednesday":
      console.log("HUMP DAAYYYY!");
      break;
    case "Thursday":
      console.log("The day...is Thursday..");
      break;
    case "Friday":
      console.log("The weekend is almost here!!");
      break;
    case "Saturday":
      console.log("It's the start of the weekend!!!");
      break;
    case "Sunday":
      console.log("Time to start the week again..");
      break;
    default:
      console.log("INVALID DAY");
  }
});

//template literals
let userName = "Eddie Van Halen";
let item = "Guitar";
let price = 1500.0;
let quantity = 1;

`${userName} bought ${quantity} ${item} for $${price}!!`;
//Eddie Van Halen bought 1 Guitar for $1500!!

let userInput = "   hello there!! ";
let msg = userInput.toUpperCase().trim();

let movie = "The Good, The Bad, and The Ugly";
console.log(movie.indexOf("Bad"));
console.log(movie.indexOf("Ugly"));

let word = "skateboard";
let facialHair = word.slice(5).replace("o", "e");

const die1 = Math.floor(Math.random() * 6) + 1;
const die2 = Math.floor(Math.random() * 6) + 1;

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;


const dayOfWeek = 'Monday';

if (dayOfWeek === 'Monday') {
  console.log("Ugh, I hate Mondays!")
}else if (dayOfWeek === 'Saturday') {
  console.log('Hooray!! I love Saturdays!')
}