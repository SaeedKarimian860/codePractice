const testScores = {
  Marvin: 75,
  Sara: 83,
  Kyle: 68,
  Sammy: 90,
  Robert: 88,
  Jesse: 93,
  Alex: 100,
  Christine: 95,
  Rebecca: 80,
};

// for (let person in testScores) {
//     console.log(`${person} scored: ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
