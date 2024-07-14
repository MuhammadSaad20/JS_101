/*

String Indexing: Access individual characters in a string using zero-based indices.
Useful String Methods: A variety of built-in methods to manipulate and interact with strings.
Template Strings: Use backticks to create strings with embedded expressions, multi-line content, and variable interpolation.

*/

let str = "Hello, World!";
console.log(str[0]);  // Output: H
console.log(str[7]);  // Output: W

//String Methods
//length: Returns the length of the string.

let str1 = "Hello, World!";
console.log(str.length); // Output: 13

//toUpperCase() and toLowerCase():Converts the string to uppercase or lowercase.

let str2 = "Hello, World!";
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!

//charAt(index):Returns the character at the specified index.
let str3 = "Hello, World!";
console.log(str.charAt(1)); // Output: e

//indexOf(substring): Returns the index of the first occurrence of the specified substring, or -1 if not found.
let str4 = "Hello, World!";
console.log(str.indexOf('o')); // Output: 4
console.log(str.indexOf('x')); // Output: -1

//substring(start, end): Returns a substring between the start and end indices.
let str5 = "Hello, World!";
console.log(str.substring(0, 5)); // Output: Hello

// slice(start, end): Similar to substring, but can also accept negative indices.

let str6 = "Hello, World!";
console.log(str.slice(0, 5));    // Output: Hello
console.log(str.slice(-6, -1));  // Output: World

//replace(searchValue, newValue):Replaces occurrences of searchValue with newValue.
let str7 = "Hello, World!";
console.log(str.replace('World', 'JavaScript')); // Output: Hello, JavaScript!

//split(separator):Splits the string into an array of substrings based on the specified separator.

let str8 = "Hello, World!";
console.log(str.split(',')); // Output: ["Hello", " World!"]

// trim():Removes whitespace from both ends of the string.
let str9 = "   Hello, World!   ";
console.log(str.trim()); // Output: Hello, World!



