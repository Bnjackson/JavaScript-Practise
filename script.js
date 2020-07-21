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

/*Comparison Operators
1 < 2 //Less than
2 > 1 //Greater than
1 <= 2 //Less than or equal too
2 => 1 //greater than or equal too
1 === 1 //Equal too
1 !== 2 //Not equal too
*/

/*
Logical Operators
&& - The and operator checks if the conditions are true before running
|| - The or operator Only requires one condition to be true
*/

const colour = 'red', hexCode = '#f00', secondColour = 'blue';
if (colour === 'blue' && hexCode === '#f00' && secondColour === 'blue') {
  console.log('They are all true');
}else if (colour === 'blue' || hexCode === '#f001' || secondColour === 'blue') {
  console.log('Atleast one of the three is true');
}else {
  console.log('!ERROR!')
}

//Switch Statements provide an altenrative syntax that is easier to read and write. A switch statement is useful when having to write many else if statements.

const groceryItem = 'tomato';
switch (groceryItem) {
  case 'onion':
    console.log('Onions are £0.30')
    break;
  case 'lime':
    console.log('Limes are £0.60')
    break;
  case 'pepper':
    console.log('Peppers are £0.45')
    break;
  case 'tomato':
    console.log('Tomatos are £0.50')
    break;
  default:
    console.log('Invalid Item')
    break;
}

/*
A JavaScript function is a block of code designed to perform a particular task. A function is executed when something evokes it. Functions can be reused as many times as you like after defining them. They can be used with different arguments, to produce different results.
*/

function showMessage() { //Function keyword, function name and parameters between the ().
  alert('Hello World!')
}

showMessage(); //We have to call the function to run it.

//Local Variables - A variable declared in a function is only visible in that function.

//Outer variables - A function can access an outer variable it can also edit external variables.

//Parameters (function arguments) - A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
