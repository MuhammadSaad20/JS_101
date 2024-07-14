//Nested if else
let num = 15;
if (num > 0) {
    if (num % 2 === 0) {
        console.log("Positive and Even");
    } else {
        console.log("Positive and Odd");
    }
} else {
    console.log("Not a positive number");
}

//if-elseif 
let grade = 75;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}


//switch exp
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
