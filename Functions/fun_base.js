//Function Declaration: Declares a function that can be called later in your code. 
//Function declarations are hoisted, meaning they are available throughout the scope in which they are declared.

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("saad"));


//Function Expression: Assigns a function to a variable or constant. 
//Function expressions are not hoisted and must be defined before they are used.
const greet1 = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet1("mike"));

//Arrow Functions: A concise way to write functions in JavaScript, with implicit return and lexical this binding.
const greet2 = (name) => `Hello, ${name}!`;
console.log(greet2("rafey"));


//Function Inside Function: Functions can be nested within other functions. 
//Inner functions have access to variables and parameters of their outer function, creating closures.

function outerFunction() {
    let outerVar = 'outer';

    function innerFunction() {
        let innerVar = 'inner';
        console.log(`${outerVar} ${innerVar}`);
    }

    innerFunction();
}

outerFunction(); // Outputs: 'outer inner'



//Lexical Scope: Determines the visibility of variables within nested functions based on their position in the code.
//Block Scope: Variables declared with let and const have block scope, meaning they are only accessible within the block { ... } where they are defined.
//Function Scope: Variables declared with var have function scope, meaning they are accessible throughout the function in which they are defined.


//Default Parameters: Allows parameters to have default values if no argument or undefined is passed.
function greet5(name = 'Guest') {
    return `Hello, ${name}!`;
}
console.log(greet5());
console.log(greet5("XYZ"));
//Rest Parameters: Allows a function to accept an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3));


//Parameter Destructuring: Allows you to extract properties from objects or elements from arrays as function parameters.
function greetX({ firstName, lastName }) {
    return `Hello, ${firstName} ${lastName}!`;
}

let person = { firstName: 'John', lastName: 'Doe' };
console.log(greetX(person)); // Outputs: 'Hello, John Doe!'



