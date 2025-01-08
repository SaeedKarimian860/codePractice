// const myMath = {
//     PI: 3.14159,
//     square: function(num) {
//         return num * num;
//     },
//     cube: function(num) {
//         return num ** 3;
//     }
// }

//Shorthand Method
const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

//'This' keyword in Methods
const cat = {
  name: "Oscar",
  color: "Cookie Swirl",
  breed: "Wirehair",
  meow() {
    console.log(`${this.name} says Meeeoooowwww`);
  },
};
