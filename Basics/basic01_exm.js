function handleUserInput() {
var userInput = prompt("Enter your name:"); // 'var' works here but not recommended
console.log("Hello, " + userInput);
}

function calculateScore(scores) {
let totalScore = 0; // 'let' because totalScore changes as we add scores
for (let score of scores) {
    totalScore += score;
}
return totalScore;
}

const maxScore = 100; // 'const' because the max score value should not change

let scores = [10, 20, 30];
let total = calculateScore(scores);
console.log("Total Score: " + total);

if (total > maxScore) {
console.log("Congratulations! You've exceeded the maximum score.");
} else {
console.log("Keep trying! You need more points to reach the max score.");
}
  