/*

Null: Represents the intentional absence of any object value. It's a primitive value.
Example: let myVar = null;
Use Case: Often used to initialize a variable that may later hold an object or a value

Undefined: Represents a variable that has been declared but has not been assigned a value yet. It's also a primitive value.
Example: let myVar; // undefined
Use Case: Typically indicates that a variable has not been initialized or a function has no return value.

BigInt: A numeric primitive in JavaScript that can represent integers with arbitrary precision. It's used when integers exceed the Number type's safe integer limit.
Example: const bigNum = 123456789012345678901234567890n;
Use Case: Useful when working with very large integers that may exceed the limits of regular JavaScript numbers.

*/

//typeof: A unary operator in JavaScript that returns a string indicating the type of the operand
//Use Case: Often used to dynamically check the type of a variable or operand in code.
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"


//Booleans: Represents a logical entity, either true or false.

//Comparison Operators: Used to compare values and return a boolean result (true or false).

10 > 5; // true
'apple' === 'orange'; // false
!(3 <= 2); // true (negation of false)

//Use Case: Essential for decision-making in control structures like if statements and loops.


//Truthy: Values that evaluate to true in a boolean context. These include non-empty strings, numbers other than zero, objects, arrays, etc.
//Falsy: Values that evaluate to false in a boolean context. These include false, 0, '' (empty string), null, undefined, and NaN.


if ('hello') {
    console.log('Truthy!'); // This will be logged
}


//If else

let hour = 10;
if (hour < 12) {
    console.log('Good morning!');
} else {
    console.log('Good afternoon!');
}
//Ternary Operator A shorthand for the if-else statement, providing a compact way to write conditional expressions

condition ? exprIfTrue : exprIfFalse
let age = 20;
let status = (age >= 18) ? 'Adult' : 'Minor';
console.log(status); // Outputs: 'Adult'

//Logical Opt
//&& (Logical AND): Returns true if both operands are true, otherwise returns false.
//|| (Logical OR): Returns true if at least one of the operands is true, otherwise returns false.

true && false; // false
true || false; // true
