/**
 
Hoisting is a JavaScript mechanism where variable and function declarations are moved (or "hoisted") 
to the top of their containing scope during the compile phase,
before the code execution begins. This means that you can use variables and functions before they are actually declared in the code.

 1-Variable Hoisting:
Only the declarations are hoisted, not the initializations.
Variables declared with var are initialized with undefined.
Variables declared with let and const are hoisted but not initialized, leading to a "Temporal Dead Zone" until the declaration is encountered.

2- Function Hoisting:
Function declarations are hoisted along with their definitions, meaning the entire function is available before its declaration in the code.
Function expressions and arrow functions are not hoisted.



 */

console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5


console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // Output: 10

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
console.log(c); // Output: 20



foo(); // Output: "Hello"
function foo() {
  console.log("Hello");
}


bar(); // TypeError: bar is not a function
var bar = function() {
  console.log("Hi");
};
