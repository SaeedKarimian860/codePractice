//function scope
// let game = 'Path of Exile';
// function playGame() {
//     let game = 'Dark Souls';
//     console.log(game);
// }
// playGame();


//block scope
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'Hi!'
// }
// console.log(radius);
// console.log(PI);
//^ PI throws an error because it is scoped to the block!!!


//lexical scope
function bankRobbery() {
    const heroes = ['Batman', 'Spiderman', 'Superman', 'Thor'];
    function helpMe() {
        for (let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
    }
    helpMe();
}
//only works if you call the parent function bankRobbery()!!
//nested functions have access to the same stuff as the parent function