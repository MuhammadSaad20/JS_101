function greet(callback) {
    console.log('Hello!');
    // Invoke the callback function
    callback();
}

function sayName() {
    console.log('My name is John.');
}

greet(sayName); // Here, sayName is the callback function
/*
Passing Functions as Arguments: In JavaScript, functions are first-class citizens, 
meaning they can be passed around just like any other value (string, number, etc.). 
When you pass sayName to greet, greet can then call sayName as callback().

Executing the Callback: callback() inside greet directly executes whatever function was passed to it (sayName in this case).

Flexibility: This pattern allows you to define different behaviors (sayName, or any other function) 
and pass them dynamically to functions like greet, making your code more flexible and modular.

In summary, callback() knows to call sayName() because sayName is explicitly passed as an argument to greet,
and greet is designed to call whatever function is passed to it as callback. 

*/

function runTask(addQueue,priority=2){

console.log("run task... base on priority");
if(priority>1){addQueue();}

}

function addQueue(){
    console.log("running queed task")
}

runTask(addQueue);
