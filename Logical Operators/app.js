// const password = prompt("Enter Your Password");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid Password');
// } else {
//     console.log('Invalid format for password!');
// }

// const age = 22;
// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("Free");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age >= 10 && age < 65) {
//   console.log("$20");
// } else {
//   console.log("Invalid Age!!");
// }

const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
  console.log("You are not eligible for a free pass!");
}




const firstName = prompt("enter your first name");
  if (!firstName) {
    firstName = prompt("Try Again!!");
  }