let fruits = ['apple', 'banana', 'cherry'];

//Push, Pop, Shift, Unshift
// Push: Adds one or more elements to the end of an array and returns the new length of the array.
let fruits1 = ['apple', 'banana'];
fruits1.push('cherry');
console.log(fruits); // Outputs: ['apple', 'banana', 'cherry']


//Pop: Removes the last element from an array and returns that element.
let fruits2 = ['apple', 'banana', 'cherry'];
let lastFruit = fruits2.pop();
console.log(lastFruit); // Outputs: 'cherry'
console.log(fruits2); // Outputs: ['apple', 'banana']

//Shift: Removes the first element from an array and returns that element. This operation shifts all subsequent elements to a lower index.
let fruits3 = ['apple', 'banana', 'cherry'];
let firstFruit = fruits3.shift();
console.log(firstFruit); // Outputs: 'apple'
console.log(fruits3); // Outputs: ['banana', 'cherry']

//Unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
let fruits4 = ['banana', 'cherry'];
fruits.unshift('apple');
console.log(fruits4); // Outputs: ['apple', 'banana', 'cherry']

/*
Primitive vs Reference Data Types
Primitive Data Types: Store single values and are immutable. Examples include number, string, boolean, null, undefined, and symbol.
Reference Data Types: Store references to complex objects stored elsewhere in memory. Examples include arrays, objects, and functions.
*/


//Clone Array & Spread Operator

//Clone Array: Creating a copy of an array so that modifications to the copy do not affect the original array.
let originalArray = [1, 2, 3];
let cloneArray = originalArray.slice(); // using slice method
console.log(cloneArray);


//Spread Operator (...): A modern JavaScript feature used to expand elements of an array or object.
let originalArray1 = [1, 2, 3];
let cloneArray1 = [...originalArray1];
console.log(cloneArray1);

//for loop in array
let fruits5 = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits5.length; i++) {
    console.log(fruits5[i]);
}







