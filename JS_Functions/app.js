function singSong() {
    console.log('lalalala');
    console.log('DO');
    console.log('RE');
    console.log('MI');
}

// singSong();
// singSong();

// function greet(person) {
//     console.log(`Hi, ${person}`);
// }

// greet('Tim');
// greet('Anya');
// greet('Steve');

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

greet('Wayne', 'Rooney');


function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }
    console.log(result);
}