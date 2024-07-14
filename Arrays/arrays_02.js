//while loop
let fruits = ['apple', 'banana', 'cherry'];
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

//Use Case: Similar to other while loops, useful when you need more control over iteration based on specific conditions.

//for of Loop
//For...of Loop: Iterates over the iterable objects (e.g., arrays, strings, maps, sets) and gives access to the values of each iteration.
//Use Case: Best used when you want to iterate over the values of an array without needing the index.
let fruits1 = ['apple', 'banana', 'cherry'];
for (let x of fruits1) {
    console.log(x);
}

//for in Loop
//For...in Loop: Iterates over the enumerable properties of an object, including array indices. 
//It's typically used for iterating over object properties
//Use Case: While primarily used for objects, it can iterate over arrays, 
//but it's less common for arrays due to potential issues with unexpected prototype properties.

let fruits2 = ['apple', 'banana', 'cherry'];
for (let index in fruits2) {
    console.log(fruits2[index]);
}

//Array destruturing
//Array Destructuring: Allows you to unpack values from arrays or properties from objects into distinct variables.
//Use Case: Useful when you want to extract specific values from an array quickly and assign them to variables.

let fruits3 = ['apple', 'banana', 'cherry'];
let [first, second, third] = fruits;
console.log(first); // 'apple'
console.log(second); // 'banana'
console.log(third); // 'cherry'

