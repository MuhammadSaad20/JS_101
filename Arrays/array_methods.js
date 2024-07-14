//Array Methods

//ForEach
//forEach: Executes a provided function once for each array element.
//UseCase: Useful when you want to perform a simple operation (like logging or updating elements) on each element of an array.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

//MAP
//map: Creates a new array populated with the results of calling a provided function on every element in the calling array.
//UseCase: Ideal when you want to transform each element of an array and get a new array of the same length.
let numbers1 = [1, 2, 3, 4, 5];
let doubledNumbers = numbers1.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//FILTER
//filter: Creates a new array with all elements that pass the test implemented by the provided function.
//UseCase: Best used when you want to extract elements from an array based on a condition
let numbers2 = [1, 2, 3, 4, 5];
let evenNumbers = numbers2.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//REDUCE
//reduce: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
//UseCase: Useful for aggregating values, calculating totals, or transforming data into a different format.
let numbers3 = [1, 2, 3, 4, 5];
let sum = numbers3.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15 (sum of all elements)

//SORT
//Sort: Sorts the elements of an array in place and returns the sorted array.
//UseCase: Used when you want to arrange elements in ascending or descending order based on a condition.
let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

//FIND
//find: Returns the first element in the array that satisfies the provided testing function.
//UseCase: Ideal when you need to find a specific element in an array based on a condition.
let numbers4 = [1, 2, 3, 4, 5];
let found = numbers4.find(function(number) {
    return number > 3;
});
console.log(found); // 4 (first element greater than 3)

//EVERY
//every: Checks if all elements in an array pass a test implemented by the provided function.
//UseCase: Useful for validating whether all elements meet a certain condition.
let numbers5 = [1, 2, 3, 4, 5];
let allGreaterThanZero = numbers5.every(function(number) {
    return number > 0;
});
console.log(allGreaterThanZero); // true (all numbers are greater than 0)

//SOME
//some: Checks if at least one element in the array passes a test implemented by the provided function.
//UseCase: Helpful when you want to check if any element satisfies a particular condition.
let numbers6 = [1, 2, 3, 4, 5];
let hasNegativeNumber = numbers6.some(function(number) {
    return number < 0;
});
console.log(hasNegativeNumber); // false (no negative numbers)

//FILL
//fill: Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
//UseCase: Useful when you want to initialize or reset all elements in an array to a specific value.
let numbers7 = [1, 2, 3, 4, 5];
numbers7.fill(0, 2, 4); // fill with 0 from index 2 to 3 (exclusive)
console.log(numbers7); // [1, 2, 0, 0, 5]

//SPLICE
//splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
//UseCase: Versatile method for modifying arrays by adding, removing, or replacing elements based on specific indices.
let numbers8 = [1, 2, 3, 4, 5];
numbers8.splice(2, 1); // remove 1 element at index 2
console.log(numbers8); // [1, 2, 4, 5]

