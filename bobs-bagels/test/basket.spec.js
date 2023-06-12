
const Basket = require('../src/Basket');
const Bagel = require('../src/Bagel');
const { assertEquals, assertNaN } = require('./testingFramework.js')

let input = new Bagel('Big Bagel');
let expected, actual, result; // Initially undefined

// Test 1 - [Bagel object with Big Bagel name will be added to the array of bagels. Length of array is shorter by 1

console.log(`Test 1`);
console.log(`==================================================`);
console.log(``);

// Length of array is shorter by 1
expected = 1;

// Act
let basket = new Basket();
basket.addBagel(input);
actual = basket.basketBagels.length;
console.log("🚀 ~ file: basket.spec.js:18 ~ actual:", actual);
console.log(``);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1 - {} gives count of 1: ${result ? `PASS` : `FAIL`}`);

// Clean up
input, expected, actual, result = undefined; // Initially undefined

