const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(2));
console.log(balance.toString().length);

const num1 = 25.896
const num2 = 125.897
console.log(num1.toPrecision(3));
console.log(num2.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// To get random num in range [Remember]
const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 