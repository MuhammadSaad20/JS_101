//help us to give correct error if soemthng went wrong in js file
/**
 * 
 * use strict is a directive introduced in ECMAScript 5 (ES5) that allows you to opt into a restricted variant of JavaScript. 
 * It can be used at the beginning of a script or a function to enforce 
 * stricter parsing and error handling in your code.
 */
"use strict"

console.log("Hello World");


//use camelCase or snake_case
//if we declare a var again with same name it re dealare and nothg happen
var firstName = "Saad";

console.log(`Hello ${firstName}`);


//let keyword
// we used let bcz (block scope vs functional scope)
// also var can redeckare with same name but let can not
let last_name="Mike"
console.log(`Hello ${last_name}`);


// var VS let VS const
/**
var: Function-scoped, hoisted, can be reassigned and redeclared.
let: Block-scoped, hoisted but not initialized, can be reassigned but not redeclared within the same scope.
const: Block-scoped, hoisted but not initialized, cannot be reassigned or redeclared within the same scope.
 */
// VAR
console.log(x); // undefined //WHENE THERE IS VRIABLE WITH NO VALUE ITS UNDEFINE
var x = 10;
console.log(x); // 10

//LET
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20
{
  let y = 30;
  console.log(y); // 30
}
console.log(y); // 20


//CONST
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // 30
{
  const z = 40;
  console.log(z); // 40
}
console.log(z); // 30

/*
While const prevents reassignment, 
it does not make the variable immutable. 
If the variable is an object or an array, its properties or elements can still be modified.
*/
const obj = { a: 1 };
obj.a = 2;
console.log(obj.a); // 2

