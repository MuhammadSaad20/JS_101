//Lexical Scope: Determines the visibility of variables within nested functions based on their position in the code.
//Higher-Order Functions: A function that either takes one or more functions as arguments or returns a function as its result.
function greeter(message) {
    return function(name) {
        return `${message}, ${name}!`;
    };
}

/*
In the greeter function:
It takes message as an argument.
It returns a new function that takes name as an argument and constructs a greeting message using both message and name.

*/

/*
Closures: A closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.
In simpler terms, it means that the inner function (return function(name) { ... } in our example) 
has access to the variables of its outer function (greeter function) even after the outer function has finished executing.
*/
function greeter(message) {
    return function(name) {
        return `${message}, ${name}!`;
    };
}

let sayHello = greeter('Hello');

/*
greeter('Hello') returns a function that remembers the message variable as 'Hello'.
sayHello now holds a reference to this inner function, effectively capturing the message variable in its closure.

Now, sayHello behaves like a function that expects a name parameter, 
which it will use along with the message captured in its closure to generate a greeting.
*/



// let sayHello = greeter('Hello');
// let greeting = sayHello('John');
// console.log(greeting); // Outputs: 'Hello, John!'


function greeter(message) { //greeter is a highh order function (either accept or return function)
    return function(name) {
        return `${message}, ${name}!`; // we can access message inside new function despite its life end closure
    };
}

let sayHello2 = greeter('Hello'); // sayHello2 now hol the inner function 
console.log(sayHello2('Saad')); // Outputs: 'Hello, Saad!'


