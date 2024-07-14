/*
Template strings (also known as template literals) are string literals that allow embedded expressions. 
They are enclosed by backticks ( ) instead of single or double quotes.
*/

// Variable Interpolation: Embed variables and expressions inside the string.

let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, Alice!


//Multi-line Strings: Create strings that span multiple lines without using escape characters.

let multiLine = `This is a
multi-line string.`;
console.log(multiLine);
// Output:
// This is a
// multi-line string.

//Expression Interpolation: Embed any JavaScript expression within the string.

let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.
