/**
 * In JavaScript, 
 * objects are complex data types that allow you to store collections of key-value pairs. Each key (also known as a property) maps to a value.
 */
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'New York',
        country: 'USA'
    }
};

//Dot Notation: Accesses properties of an object using dot . followed by the property name.
console.log(person.firstName); // 'John'

//Bracket Notation: Accesses properties using square brackets [], 
//allowing for dynamic property names or properties that are not valid identifiers.
let propName = 'lastName';
console.log(person[propName]); // 'Doe'


//Iterating Objects: Objects can be iterated using various methods, such as for...in loop or Object.keys, 
//Object.values, and Object.entries methods.
console.log("Iterating Obj")
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


//Computed Properties: Allows you to dynamically compute property names in object literals and classes.
let prop = 'age';
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    [prop]: 30
};
console.log("Computed Properties")
console.log(person1);

//Spread Operator:(...) Copies properties from one object to another object literal.
let defaults = {
    theme: 'light',
    fontSize: 14
};

let userSettings = {
    ...defaults,
    fontSize: 16
};
console.log("spread opt")
console.log(userSettings);


//Object Destructuring: Allows you to extract multiple properties from an object into distinct variables.
let { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

//Objects Inside Array: Arrays can contain objects as elements, allowing for structured data storage.
let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
];
console.log(people);

//Nested Destructuring: Allows you to destructure nested objects or arrays into variables.

let {
    firstName1,
    lastName1,
    address: { city, country }
} = person;
console.log(city); // 'New York'
console.log(country); // 'USA'

