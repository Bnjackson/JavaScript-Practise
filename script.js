//Variables - Named storage for data

var oldVariable = 0; //Var is used less in ES6 than let and const.

let changeVariable = 1; //Let creates variables that can change.

const constantVarible = 2; //Const variables are unchangeable and remain constant. Commonly used in functions.

//conditional Statements

const randomNumber = Math.floor(Math.random() * 5); //Math.floor rounds down a number, Math.random gets a random number between 0 and 1.
console.log(randomNumber);

//conditional statements - Will perform different actions for different conditions.

if (randomNumber === 0) { //If randomNumber = 0 the code will run.
  console.log('The number is 0');
} else if (randomNumber === 1) { //A new condition to test.
  console.log('The number is 1');
} else if (randomNumber === 2) {
  console.log('The number is 2');
} else if (randomNumber === 3) {
  console.log('The number is 3');
} else if (randomNumber === 4) {
  console.log('The number is 4');
} else { //Will run if no other conditions run.
  console.log('!ERROR!')
}
