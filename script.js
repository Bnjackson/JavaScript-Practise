//Variables - Named storage for data - JavaScript is "dynamically typed" meaning that there exist data types but variables are not bound to any of them.

var oldVariable = 0; //Var is rarely used since let and const were introduced in ES6. var is function scoped.

let changeVariable = 1; //Let creates variables that can be reassigned.

const constantVarible = 2; //Const variables remain constant and cannot be reassigned. Commonly used in functions.

//Type coercion
const firstName = 'john';
let age = 28;

console.log(firstName + ' ' + age);//Type coercion JavaScript automatically converts types from one to another when needed. The number is converted into a string.

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);

//Variable Mutation - Variable mutation is when you modify a variables original value.
age = 'twenty eight';//The age variable is mutated from a number to a string.

/*Primitive Data types - their values can only contain a single thing.
Number - Floating point, numbers for decimals and integers
String - Sequence of characters, used for text. By using backticks(``) and ${} we can create a "extended functionality" quotes they allow us to embed variables and expressions into a string by wrapping them in `${}`
Boolean - Logical data type that can be true or false rsult of comparisons.
undefined - Data type of a variable that does not have a value yet
Null - Also means 'non-existenet' empty or value unknown.
BigInt - Represents numbers larger than the JavaScript limit.

We can use the typeof operator to return the data type.
console.log(typeof 42) //number
*/

//Operators are used to assign values, compare values, perform arithmetic operations and more.

/* Math Operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/

/*
Increment and decrement operators can be applied both before and after the operator. Both postfix and prefix increase or decrease the value by 1. The ++ or -- can be applied both before and after the variable .

Postfix - counter++ - The postfix form returns the original value of the variable of the variable before the increment/decrement

let counter = 2;
console.log(counter++); //2 Returns the original value prior to the increment.

Prefix - ++counter - The prefix form returns the value after the increment/decrement.

let counter = 2;
console.log(++counter); //3 Returns the incremented value.
*/

/*Comparison Operators
1 < 2 //Less than
2 > 1 //Greater than
1 <= 2 //Less than or equal too
2 >= 1 //greater than or equal too
5 == '5'//Equal value, type coercion, data types do not have to match
1 === 1 //Equal value, same type
1 !== 2 //Not equal too
*/

/*Logical Operators - Boolean Logic
&& - The and operator checks if the conditions are true before running
|| - The or operator Only requires one condition to be true
!  - The not operator inverts true or false values.
*/

/*Assignment operators
Assignment operators are used to assign values to variables
= - Assigns a value to a variable
+= - Adds a value to a variable
-= - Subtracts value from a variable
*= - Multiplies a variable
/= - Divides a variable
%= - Assigns a remainder varable
*/

/*String Operators
+ - Used to concatenate (add) strings.
+= - Also used to add strings together.
*/

//Truthy and Falsy - Each value has an inherent boolean value known as a truthy or falsy.

//Falsy Values: undefined, null, false, 0, '' or "" (empty string), NaN. - Values considered false when evaluated in an if else statement.

//Truthy Values:'0', 'false', [](an empty array), {}(an empty object), function(){}(an empty function) - Values considered true when evaluated in an if else statement.

//Operator Precedence - Determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

//conditional statements - Will perform different actions for different conditions.

const colour = 'red', hexCode = '#f00', secondColour = 'blue';
if (colour === 'blue' && hexCode === '#f00' && secondColour === 'blue') {
  console.log('They are all true');
}else if (colour === 'blue' || hexCode === '#f001' || secondColour === 'blue') {
  console.log('Atleast one of the three is true');
}else {
  console.log('!ERROR!')
};

const randomNumber = Math.floor(Math.random() * 5); //Math.floor rounds down a number, Math.random gets a random number between 0 and 1.
console.log(randomNumber);

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
  console.log('!ERROR!');
};

//Ternary Operators - Is the only JavaScript operator that takes three operands a condition followed by a question mark (?) then an expression to execute if the condition is truthy follwed by a colon (:) and finally the expression to execute if the conditon is falsy. This operator is used as a shortcut for the if statement.

const drinkingAge = 18;
const johnsAge = 17;

johnsAge >= drinkingAge ? console.log('John can drink') //conditon ? expression if true
:console.log('John cannot drink');//expression if false

let drink = johnsAge >= 18 ? 'beer' : 'water';// The result will be assigned to the drink variable


//Switch Statements provide an altenrative syntax that is easier to read and write. A switch statement is useful when having to write many else if statements.

const groceryItem = 'tomato';
switch (groceryItem) {
  case 'onion':
    console.log('Onions are £0.30');
    break;
  case 'lime':
    console.log('Limes are £0.60');
    break;
  case 'pepper':
    console.log('Peppers are £0.45');
    break;
  case 'tomato':
    console.log('Tomatos are £0.50');
    break;
  default:
    console.log('Invalid Item');
    break;
}

/*
A JavaScript function is a block of code designed to perform a particular task. A function is executed when something evokes it. Functions can be reused as many times as you like after defining them. They can be used with different arguments, to produce different results.
Functions can access external data but the opposite isnt true. Other code can not look insdie a function.
*/

function showMessage() { //Function keyword, function name and parameters between the ().
  alert('Hello World!')
}

showMessage(); //We have to call the function to run it.

//Local Variables - A variable declared in a function is only visible in that function.

//Outer variables - A function can access an outer variable it can also edit external variables. To make code clean it is recommended to use mainly local variables and parameters in the function not outer varibles.

//Parameters (function arguments) - A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions. If a parameter value is not provided then its value becomes undefined. Parameters are seperated by a comma.

//Returning (calling) a function - A function can return a value by using the return keyword in a function and then calling the function e.g.

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
age = prompt('How old are you', 18);

if(checkAge(age)) {
  console.log('Acess granted')
} else {
  console.log('Acess denied')
}

/*Naming a function - Functions are actions so their name is usually a verb. It should be brief as accurate possible and describe what the function does, so that someone who reads the code gets an indication of what the function.
For instance....
show - shows something
get - return a value
calc - calculate something
create - create something
check - check something and retun a boolean, etc
*/

//Functions should be short and do one thing sometimes it is good to split the function into smaller functions. Seperate functions are easier to test and debug.

//Function expressions - Is another syntax for creating functions.

const sayHi = function() {
  alert( "Hello" );
};

//Here the function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, its just a value stored in the variable sayHi.

//Expressions vs Statements vs Declarations - An expression is a piece of code that always produces a value and can be written wherever a value is expected.
// A statement is a standalone unit of execution it does not return anything.
// A declaration is a statement in which a value is assigned to a variable. All declarations are statements but not all statements are declarations.


//Function expression vs function declaration

function functionDeclaration(a, b) {
  return a + b;
}
//Function declaration: a function declared as a seperate statement in the main code flow.

const functionExpression = function(a, b) {
  return a + b;
};
//Function expression: a function created inside an expression or another syntax construct.

//Arrow Functions: Theres another simple and concise way to create functions. Its called "arrow functions".

let arrowFunction = (argument1, argument2) => {
  expression;
};
//its a shorter version of this

let func = function(arg1, arg2, ...argN) {
  return expression;
};

//Higher-Order Functions - A Higher-Order function is a function that either accepts functions as parameters, returns a function or both. We call the function that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.


/* Blocks - A block is the code found inside a set of {}. Blocks help us group one or more statements together

Scope - Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

Global Scope - Variables are declared outside of blocks. These variables are called global variables. Global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Block Scope - When a variable is defined inside a block. That variable has block scope because it is only accesible to the lines of code within that block. Variables that are declared with block scope are known as local variables.

Scope Pollution - Having too many global variables can cause problems in a program. Scope pollution is when we have too many global variables that exist in the global namespace. Scope pollution makes it difficult to keep track of our different variables and sets up potential accidents.
*/

/*Arrays - Are JavaScripts way of making lists. Arrays can store any data type. Array elements are numbered starting from 0. The difference between arrays and objects is that arrays are ordered. Arrays are created using []. Arrays are useful for storing a list of something: users, goods, HTML elements etc. Arrays provide ways to manage the order of elements unlike objects.

Arrays can store elements of any type including strings, numbers, booleans, functions, objects
*/
let hobbies = ['running', 'reading', 'coding'];

//Each element in array has a numbered position known as its index. We can access individual items using their index which is referencing an item in a list based on its position.

console.log(hobbies[0]);

hobbies[3] = 'cooking'; //We can add or update elements in an array.
console.log(hobbies.length); //The length propety will return the number of items in an array.
hobbies.push('gaming');// .push allows us to add elements to the end of an array. Like a function .push must be called. .push mutates the array
const removed = hobbies.pop(); //.pop removes the last item from an array .pop mutates the array
hobbies.shift();// .shift removes the first element in an array.
hobbies.unshift('Films');//.unShift adds an element to the start of the array.
hobbies.splice(0, 0, 'Travel', 'Music');//Splice is used to add and remove items from an array. The first parameter(0) defines the position where new elements should be added, the second parameter defines how many elments should be removed (0). The rest of the parameters ('Travel', 'Music') define the new elements to be added.

let mixedArray = ['Apple', 'Bannana', 1, { name: 'john'}, true, function sayMelon() {console.log('Melon')}];//Arrays can store any element type.

mixedArray[5]();//Calling the function from the array.

console.log(mixedArray);

//Nested arrays - We can store arrays in other arrays. When an array contains another array it is known as a nested array. To access arrays we use the [] with the index value.

let nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3] nestedArr[1] will grab the element in index 1 which is array [2, 3].

console.log(nestedArr[1][0]); // Output: 2 We can chain on more index values.

/*OBJECTS - Objects in Comparison to primitive data types are used to store collections of various data types and more complex entities such as arrays and functions.
Objects are created using {} a propety is a 'key value' pair and the value can be anything. key: value.
*/
const ben = { // an object
  firstName:'Ben', //by key 'firstName' value 'ben'
  lastName:'Jackson', //by key 'lastName' value 'jackson'
  age:24,//by key 'age' store value 30
  family: ['Jane', 'Mark', 'Emily'],//Objects can store arrays
  'is Married': false, //We can create multiword propety names they must be quoted.
};
console.log(ben);
/*
console.log(ben.firstName); //We can access objects using the . method
const x = 'age';
console.log(ben[x]); //Will print 24 useful logic for accessing data from an array.
ben.job = 'programmer';//We can add to the object using name.key = value
ben.age = 29;//We can also mutate
ben["Favourite Film"] = Big Lebowski; //We use [] to create multiword propety names.
*/
/*this keyword - Refers to the object it belongs to.
This has different values depending on where it is used
  In a method this refers to the object owner.
  Alone this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
  In an event, this refers to the element that received the event.
  Methods like call(), and apply() can refer this to any object.
*/
//Methods - A function that is the property of an object is called a method

const car = {
  carName: 'kia',
  price: 500,
  year: 1990,
  condition: 'poor',
  calcAge: function() {//Method
    this.age = 2020 - this.year;//The this keyword refers to the object the method belongs to.
  }
}

car.calcAge();
console.log(car);


//Method Borrowing - Is a very common practise which allows us to use the methods of one object on a different object without having to copy and maintain it in two seperate places.
let matthew = {
  name: 'matthew',
  yearOfBirth: 1990,
  calcAge: function() {
    console.log(this);
    console.log(2020 - this.yearOfBirth)
  }
}
matthew.calcAge();

let mike = {
  name: 'mike',
  yearOfBirth: 1984
}


mike.calcAge = matthew.calcAge;//We are copying the calcAge function from the matthew method to the mike method without having to copy the code.
mike.calcAge();
console.log(mike);//The mike method now contains the calcAge function from the matthew method.


/*Loops - A loop is a programming tool that repeats a set of instructions until a specified condition called a stopping condition is reached. Loops iterate or repeat an action until a specific condition is met. When the condition is met, the loop stops and the computer moves on.

The for loop - A typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is intialized checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but its best practise to use a descriptive names.

A for loop contains three expressions seperated by ; inside the ()
1 - An intialization starts the loop and can also be used to declare the iterator variable.
2 - a stopping condition is the condition that the iterator variable is evaluated against - if the condition evaluates to true the code block will run, and if it evaluates to false the code to stop.
3 - an iteration statement is used to update the iterator variable on each loop.
*/

for (let = counter = 0;// intialization start of the loop and declared as variable.
   counter < 4;//Stopping condition iterator is evaluated against this.
   counter++) {//iteration statement used to update the iterator.
  console.log(counter);
}
//It is a naming convention to name our counting variables i

const animals = ['bear', 'sea lion', 'sloth'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);//Looping through arrays is one of the most common uses of loops.
}

/*Nested loops - When we have loops running inside another loop that is called a nested loop. One use for a nested loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

While loop - While the condition is true the loop will execute. while loops are used when we dont know how many times the loop should run. While loops can create infinite loops that should be avoided as they can use too much processing power.
let i = 0;
while (i < 4) {
console.log(i);
i++;
}

do...while statements - In some cases you want a piece of code to run at least once and then loop based on specific condition after its intial run. A do...while statement will run until a specified condition is no longer met.

let i = 0;
do {
  alert(i);//The body of the loop will execute at leat once regardless if true.
  i++;
} while (i < 3);

looping backwards -
const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = nick.length - 1; i >= 0; i--) {
  console.log(nick[i]);

break - The break keyword allows programs to break("end") out of the loop from within the loops block. Break allows us to stop a loop even if the stopping condition is not met.

const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = 0; i < nick.length; i++) {
  if (typeof nick[i] !== 'string') break;//The loop will break(end) when a non string element is looped
  console.log(nick[i]);//Will print 'Nick', ' Smith'

continue - The continue statement skips one iteration in the loop if a specified condition occurs, and continues with the next iteration in the loop.
const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = 0; i < nick.length; i++) {
  if (typeof nick[i] !== 'string') continue;//The loop will skip one iteration if element is not a string
  console.log(nick[i]); //'nick', 'smith', 'designer'

*/
