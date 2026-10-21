// Q3: Math Utility Dashboard

// Input number
const x = 16.75;

// Perform the math operations
const rounded = Math.round(x);                        // nearest whole number
const squareRoot = Math.sqrt(x);                      // square root of x
const power = Math.pow(x, 3);                         // x raised to the power 3
const randomNumber = Math.floor(Math.random() * 41) + 10; // random integer between 10 and 50

// Show a formatted summary using a template literal
console.log(`
Math Utility Summary
--------------------
Number        : ${x}
Rounded       : ${rounded}
Square Root   : ${squareRoot.toFixed(2)}
Power (x^3)   : ${power.toFixed(2)}
Random (10-50): ${randomNumber}
`);