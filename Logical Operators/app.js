const password = prompt("Enter Your Password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Valid Password');
} else {
    console.log('Invalid format for password!');
}