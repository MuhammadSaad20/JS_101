/*
While Loop: Use when the number of iterations is not known beforehand and depends on a changing condition.
For Loop: Use when you know the number of iterations in advance or need to iterate over elements in an array or collection.
Break and Continue: Use break to exit a loop prematurely based on a condition, and continue to skip the current iteration and move to the next one.
Do-While Loop: Use when you want to guarantee that the loop body executes at least once, even if the condition is initially false.
*/

//while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

let sum = 0;
let number = 1;
while (number <= 10) {
    sum += number;
    number++;
}
console.log(sum); // Outputs: 55 (sum of numbers from 1 to 10)


//for loop
for (let count = 10; count > 0; count--) {
    console.log(count);
}
console.log("Liftoff!");


let colors = ['red', 'green', 'blue'];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


//break continue

// Break example
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exits the loop when i reaches 5
    }
    console.log(i);
}

// Continue example
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // skips iteration when i is 2
    }
    console.log(i);
}
