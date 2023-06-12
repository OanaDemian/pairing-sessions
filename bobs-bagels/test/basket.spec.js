
const basket = require('../src/basket');
const { assertEquals, assertNaN } = require('./testingFramework.js')

let input = {id: 'bagel1'};
let expected, actual, result; // Initially undefined

// Test 1 - [{id: bagel1}] [] Length of array is shorter by 1

console.log(`Test 1`);
console.log(`==================================================`);
console.log(``);

// Length of array is shorter by 1
// input = ;
expected = 0;

// Act
// basket = [input]
basket.removeItem(input);
actual = basket.basketItems.length;
console.log("🚀 ~ file: basket.spec.js:18 ~ actual:", actual);
console.log(``);

// Assert
result = assertEquals(actual, expected);

// Report
console.log(`Test 1 - {} gives count of 0: ${result ? `PASS` : `FAIL`}`);

// Clean up
input, expected, actual, result = undefined; // Initially undefined

