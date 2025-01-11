const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//using for...of
// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);


//using the reduce method
const total = prices.reduce((total, price) => {
    return total + price;
});


const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});