//COMMENTS
// Single line comments
/*Multi
line
comments
*/

//"use strict" was introduced in ES5, the purpose of "use strict" is to indicate that code should be executed in "strict mode". Strict mode allows us to write secure JavaScript code and changes previously accepted "bad syntax" into real errors. "use strict" should be located at the top of the script but it can also be used in a local scope such as in a function.

/***********************************
VARIABLES, DATA TYPES AND OPERATORS
***********************************/

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

Methods of primitives -
JavaScript allows us to work with primitive data types as if they were objects. This allows us to access a number of useful methods. These methods work via tempoary objects that are destroyed after the method runs.
*/

Number - /*
Represents both integer and floating point numbers. There are also special numeric values including Infinity, -Infinity and NaN.

Math object:
Math is a built-in object that has a library of properties and methods for mathematical use. Unlike other global objects, Math is not a constructor. All properties and methods of Math are static.
A few useful methods include.*/


//Math.random() - Returns a random number between o and 1(not including 1).
const randomNumber = Math.random();

//Math.floor - Returns a rounded down integer
Math.floor(3.6);//returns 3

//Math.ceil - Returns a rounded up integer
Math.ceil(3.6);//returns 4

//Math.round - Returns a integer rounded to the nearest integer 0.5 rounds up to 1
Math.round(3.3);//returns 3

//Math.trunc - Removes anything after the decimal point without rounding
Math.trunc(3.6)//returns 3

/*Number conversion
We can use a + or Number() to convert to a number. However if it is not exactly a number it fails.
*/
console.log(+"100px");//Will return NaN

//We often have to deal with values in units like "100px", "100£" etc. We can use parseInt and parseFloat to "read" a number from a string until they can't. Both are methods of the Number object.

parseInt("100px")//parseInt returns a integer - 100
parseFloat("12.5rem")//parseInt returns a floating point number - 12.5

String -/*
 Sequence of characters, used for text. String can be enclosed in ''(single), ""(double ) and ``(backtick) quotes.

 By using backticks(``) and ${} we can create a "extended functionality" quotes they allow us to embed variables and expressions into a string by wrapping them in `${}`

Accessing characters
We can access the characters of a string using square brackets([0]).

We can not change a character like we would a array using bracket notation. As string are immutable
*/
let str = "hi";
str[0] = "H";//error

//The workaround is to create a whole new string and assign it.
str = "H" + str[i];//str = "Hi"

/*
String Methods and properties -
Some useful methods and properties for strings include....
*/
//.length - property returns the length of a string.
str.length// 2

//.indexOf() - method returns the index of the first occurence of a specifc substring, or -1 if string is not found
str.subSting("hi")//0

//.toUpperCase() returns a capitalized string
str.toUpperCase();//HI

//.toLowerCase() - returns a lower case string
str.toLowerCase()//hi

//.split() - divides a string into an ordered list of substrings and returns as a array
const message = "Hello World";
const array = message.string(" ");//[Hello, World];
//The parameter is used to search for a pattern e.g. ("") characters, (" ") words, () whole string.


/*
Comparing strings -
Strings are compared character by character in alphabetical order. If the first character of one string is greater or less than the other strings. Then the first string is greater or less than the second.
If both characters are the same repeat with the rest of the characters, if all are equal then the two strings are equal.
*/

console.log("Z" > "A")//True

console.log("a" > "Z")//true - One oddity is that a lowercase letter is always greater than the uppercase.


Boolean // Logical data type that can be true or false. Boolean values can come as a result of comparisons.



Undefined -// Means a variable that has been declared but has not yet been assigned a value.
Null - //Is an assignment value. It can be assigned to a varaible as a representation of no value.
BigInt - //Represents numbers larger than the JavaScript limit.

/*
We can use the typeof operator to return the data type.

Structural types - Objects unlike primitive data types can store collections of data along and more complex entities.
Object - Data structure containing data and instructions for working with data.
  Array - Arrays are a ordered subclass of object.
  Function - Functions are a subclass of object.
Symbol - The symbol type is used to create unique identifiers for objects.
*/
console.log(typeof job) //string

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
Increment and decrement operators can be applied both before and after the operator. Both postfix and prefix increase or decrease the value by 1. The ++ or -- can be applied both before and after the variable.

Postfix - counter++ - The postfix form returns the original value of the variable of the variable before the increment/decrement
*/
let counter = 2;
console.log(counter++); //2 Returns the original value prior to the increment.

//Prefix - ++counter - The prefix form returns the value after the increment/decrement.

let counter = 2;
console.log(++counter); //3 Returns the incremented value.


/*Comparison Operators
1 < 2 //Less than
2 > 1 //Greater than
1 <= 2 //Less than or equal too
2 >= 1 //greater than or equal too
5 == '5'//Equal value, type coercion, data types do not have to match
1 === 1 //Equal value, same type
1 != 2 //Not equal too, with type coercion
1 !== 2 //Not equal strict without type coercion
*/

/*Logical Operators - Boolean Logic
&& - The and operator checks if the conditions on its left and right are true before running
|| - The or operator Only requires one condition to be true
!  - The not operator inverts true or false values.
*/

//Short-circuit evaluation is when the second argument is executed or evaluated only if the first argument does not suffice to determine the value of the expression. When the fist argument of && is false the overall value must be false and when the first argument of || is true then the overall value must be true.

let trueOrFalse = true || false; //The value will be true because an || operator only requires one true argument.

/*Assignment operators
Assignment operators are used to assign values to variables
= - Assigns a value to a variable
+= - Adds a value to a variable
-= - Subtracts value from a variable
*= - Multiplies a variable
/= - Divides a variable
%= - Assigns a remainder varable
*/

//Operator Precedence - Determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.


/*String Operators
+ - Used to concatenate (add) strings.
+= - Also used to add strings together.


Template literals -
are string literals that allow embedded expressions. Template literals are enclosed by the backtick `` character instead of quotes. Template literals can contain placeholders indicated by ${placeholder}.
*/
`string text ${expression} string text`

//Truthy and Falsy - Each value has an inherent boolean value known as a truthy or falsy. They can be used to check if a variable exists for example to check if a user has a username.

let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

/*Falsy Values: undefined, null, false, 0, '' or "" (empty string), NaN. - Values considered false when evaluated in an if else statement.

/Truthy Values:'0', 'false', [](an empty array), {}(an empty object), function(){}(an empty function) - Values considered true when evaluated in an if else statement.

We can check if a value is truthy or falsey using a conditional.*/

if(value)//will run if value is truthy.
if(!value)//Will run if value is falsey.
value ? /*will run if truthy*/ : /*will run if falsey*/
/*******************************
LOGIC AND CONTROL STRUCTURES
********************************/

//conditional statements - Will perform different actions for different conditions.

const colour = "blue";
if (colour === "red") {
  console.log("The colour is red!");
}
else if (colour === "blue") {
  console.log("The colour is blue!");
}
else {
  console.log("The colour is neither red nor blue.")
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

//Ternary Operators - Is the only JavaScript operator that takes three operands, a condition followed by a question mark (?) then an expression to execute if the condition is truthy follwed by a colon (:) and finally the expression to execute if the conditon is falsy. This operator is used as a shortcut for the if statement.

const drinkingAge = 18;
const johnsAge = 17;

johnsAge >= drinkingAge ? console.log('John can drink'); //conditon ? expression if true
: console.log('John cannot drink');//expression if false

const drink = johnsAge >= 18 ? 'beer' : 'water';// The result will be assigned to the drink variable

//Ternary operators can be used as alternatives to if and else statements.
function equilibrium (x) {
	return (x > 0) ? "positive"
	:(x < 0) ? "negative"
	: true;
}

//Switch Statements provide an alternative syntax that is easier to read and write. A switch statement is useful when having to write many else if statements. If a break is ommited from a case the following case statements are executed until a break is encountered.

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
}

/******************************
FUNCTIONS, SCOPE AND CLOSURES
******************************/

/*
A function is a reusable block of code that groups together a sequence of statements to perform a specific task. A function is executed when something evokes it. They can be used with different arguments, to produce different results.
Functions can access external data but the opposite isnt true. Other code can not look inside a function.
A function should do exactly what is suggested by its name and no more. Two independent actions requires two functions.

In JavaScript functions are first class objects - meaning that they are "things"(values) that can be organized and manipulated just like variables.

Functions are variables for a value of type function.

Functions are special because we can invoke them, but we can still treat them like any other type of data.
*/

function showMessage() { //Function keyword, function name and parameters between the ().
  alert('Hello World!')
}

showMessage(); //We have to call the function to run it.

//Local Variables - A variable declared in a function is only visible in that function.

//Outer variables - A function can access an outer variable it can also edit external variables. To make code clean it is recommended to use mainly local variables and parameters in the function not outer varibles.

//Parameters (function arguments) - A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions. If a parameter value is not provided then its value becomes undefined. Parameters are seperated by a comma.

//Default parameters - The default parameter kicks in when the argument is not specified.

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

//The rest parameter allows us to represent an indefinite number of arguments as an array. A function can be prefixed with ... which will cause all remaining arguments to be placed within a array.

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

//Spread operator - ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

function sum(x, y, z) {
  return x + y + z;
}
const arrayNumbers = [1, 2, 3];

console.log(sum(...arrayNumbers));
//expected output: 6

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

/*Helper Functions - Are functions that are called and return a value for another function. Helper functions are used to make programs easier to read and lets you reuse computations.
*/
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

/*Naming a function - Functions are actions so their name is usually a verb. It should be brief as accurate possible and describe what the function does, so that someone who reads the code gets an indication of what the function.
For instance....
show - shows something
get - return a value
calc - calculate something
create - create something
check - check something and retun a boolean, etc
*/

//Functions should be short and do one thing sometimes it is good to split the function into smaller functions. Seperate functions are easier to test and debug.

function sayHello() {
  alert("Hello");
};

//Here the function is created and assigned to the variable explicitly, like any other value. No matter how the function is defined, its just a value stored in the variable sayHi.

/*When to use a Function Declaration vs a Function Expression -
Function declarations and function expressions are both ways to declare functions and are callable from other code, however they behave in different ways.
Function declarations are hoisted meaning no matter where they are declared they are hoisted to the top of their scope. Function expressions are not hoisted so they are only accessible after their intialization.
Function declarations can also be used as constructors and have a prototype property. Expressions cannot be used as constructors and do not have a prototype property.
Expressions unlike declarations do not have its own this or arguments and instead inherits them from the next non-parent function scope.
Function expressions when using arrow functions can be simple and precise.
Function expressions also resolve into a value whereas declarations simply define the function in the current scope.
*/

//Function declaration: a function declared as a seperate statement in the main code flow. Declarations have global scope declarations are visible throughtout the code. They can be called before they are declared. Declarations are usually used more than expressions as they more readable and provide more freedom.

function functionDeclaration(a, b) {
  return a + b;
}

//Function expression: a function created inside an expression or another syntax construct. Expressions can be useful for callback functions and have the benefits of being contained in a variable.

const functionExpression = function(a, b) {
  return a + b;
};

/*Anonymous Functions - An Anonymous function is a function without a name it wont do anything on its own. You generally use an Anonymous function with an event handler, so the function runs in response to an event such as a button being clicked.
*/
const myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}

//Arrow Functions: Theres another simple and concise way to create functions. Its called "arrow functions". If a arrow function has a single parameter the parentheses and the return keyword can be omitted.

const helloWorld = name => console.log(`${name} Hello World!`)//if there is only one parameter we can omit the round brackets.

helloWorld("John");
//When there is no function body, and only a return value we can omit the return keyword as well as the brackets surrounding the code.

let arrowFunction = (argument1, argument2) => {
  expression;
};

//its a shorter version of this

let func = function(arg1, arg2, ...argN) {
  return expression;
};

//Higher-Order Functions - A Higher-Order function is a function that either accepts functions as parameters, returns a function or both. We call the function that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

//Callback Function = Functions are values so they can be passed as parameters to other functions. A function that is passed into another is commonly reffered to as a callback function: it is an argument that another function will "call back to" and execute when needed. Functions can take more than one callback function as arguments which can be a useful way of composing behaviours. Passing functions as arguments to other functions is at the heart of functional programming. We can define program behavior primarily in terms of behaviors that are run, and less in terms of the data variables used. Callback functions are vital for interactivity: such as when using event listeners.

function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(patHead, rubBelly);

/* Blocks - A block is the code found inside a set of {}. Blocks help us group one or more statements together

Scope - Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

Global Scope - Variables are declared outside of blocks. These variables are called global variables. Global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Block Scope - When a variable is defined inside a block. That variable has block scope because it is only accesible to the lines of code within that block. Variables that are declared with block scope are known as local variables.

Scope Pollution - Having too many global variables can cause problems in a program. Scope pollution is when we have too many global variables that exist in the global namespace. Scope pollution makes it difficult to keep track of our different variables and sets up potential accidents.

Closures: The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope. A inner function has access to everything inside the outer function even if it is called outside of that function.

In the context of factory functions closures allow us to create private variables and functions. Private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in our program. In other words, even though our objects might only do one or two things, we are free to split our functions up as much as we want(allowing for cleaner and easier to read code) and only export the functions the rest of the program is going to use.

The concept of private functions is very useful and should be used as often as possible. For every bit of functionality that you need for your program, there are likely to be several supporting functions that do not need to be used in your program as a whole. Tucking these away and making them inaccessible makes your code easier to refactor, easier to test and easier to read.
*/

function FactoryFunction(string) {
    const capitalizeString = () => string.toUpperCase();
    const printSpring = () => console.log(`----${capitalizeString()}----`);
    return { printSpring };
}

const taco = FactoryFunction("Taco");
taco.capitalizeString();//Is a private function that is accessible to printSpring but will cause an error if we try to call it.
taco.printSpring();//The printString function can be accessed as it is a method on the taco object. pringString being able to access capitalizeString while we cannot is closure.



const sayHello = function (name) {
  const text = "Hello, " + name;
  return function () {
    console.log(text);
  };
};

let a = 1;

function foo() {
  let b = 2; // variable in function scope the parent scope does not have access.
  let a = 2; //Name conflict/ scope conflict a is defined in both the parent and the child scope. Two a variables in existence.
  console.log(a);
}
//Because b is defined in the function and not in the root scope we can not access it outside of the function.

foo(); //2
console.log(a); // runs the a in global scope. //1

sayHello("Adam");
//The closure concept we have used here makes our scope inside sayHello inaccessible to the public scope. Calling the function will do nothing as it returns a function.

sayHello("Adam")();
//We can call a closure using a second set of () to call the returned function. Or by assigning it and then calling it e.g. const helloTod = sayHello("Todd"); helloTod();

/*We can use the methods call(), apply() and .bind() to change scope depending on what you are looking to do.

//Private Variables and Functions

Other languages have public and private scope, in JS there is no such thing. We can emulate public and private scope through things like closures.
*/

/******************************************
ARRAYS
*******************************************/


/*Arrays - Are JavaScripts way of making lists. Arrays can store any data type. Array elements are numbered starting from 0. The difference between arrays and objects is that arrays are ordered. Arrays are created using []. Arrays are useful for storing a list of something: users, goods, HTML elements etc. Arrays provide ways to manage the order of elements unlike objects.

Some programming langauages allow arrays with named indexs, these are called associative arrays (or hashes). JavaScript only has numbered arrays and does not support associative arrays.

Arrays can store elements of any type including strings, numbers, booleans, functions, objects
*/
let hobbies = ['running', 'reading', 'coding'];

//Each element in array has a numbered position known as its index. We can access individual items using their index which is referencing an item in a list based on its position.

console.log(hobbies[0]);

hobbies[3] = 'cooking'; //We can add or update elements in an array.
console.log(hobbies.length); //The length propety will return the number of items in an array.
hobbies.push('gaming');// .push allows us to add elements to the end of an array. Like a function .push must be called. .push mutates the array
const removed = hobbies.pop(); //.pop removes the last item from an array the removed value can be assigned as a variable.
let removedFromArray = hobbies.shift();// .shift removes the first element in an array. The removed value is stored in a variable if used.
hobbies.unshift('Films');//.unShift adds an element to the start of the array.
hobbies.splice(0, 0, 'Travel', 'Music');//Splice is used to add and remove items from an array. The first parameter(0) defines the position where new elements should be added, the second parameter defines how many elments should be removed (0). The rest of the parameters ('Travel', 'Music') define the new elements to be added.

let mixedArray = ['Apple', 'Bannana', 1, { name: 'john'}, true, function sayMelon() {console.log('Melon')}];//Arrays can store any element type.

mixedArray[5]();//Calling the function from the array.

console.log(mixedArray);

//Nested arrays - We can store arrays in other arrays. When an array contains another array it is known as a nested array. To access arrays we use the [] with the index value.

let nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3] nestedArr[1] will grab the element in index 1 which is array [2, 3].

console.log(nestedArr[1][0]); // Output: 2 We can chain on more index values.

/***********************************************
OBJECTS, METHODS, THIS, PROTOTYPES AND FACTORY FUNCTIONS
***********************************************/

/*OBJECTS - Objects in Comparison to primitive data types are used to store collections of various data types and more complex entities such as arrays and functions.
Objects are created using {} (curly bracket).
Objects are unordered sequences of key-value pairs the keys are called "properties" they are arbitary strings and the values are any data type, each property can be used to look up(reference) the value associated with it.

Objects can be used to organize code better instead of using multiple variables we can store things in a single object. Objects are usually created to represent entities of the real world like users, items, orders and so on.
*/

const ben = { // an object
  firstName:'Ben', //by key 'firstName' value 'ben'
  lastName:'Jackson', //by key 'lastName' value 'jackson'
  age:24,//by key 'age' store value 30
  family: ['Jane', 'Mark', 'Emily'],//Objects can store arrays
  'is Married': false, //We can create multiword propety names they must be quoted.
};

console.log(ben.firstName); //We can access objects using dot notation
const x = 'age';
console.log(ben[x]); //Will print 24 useful logic for accessing data from an array.
ben.job = 'programmer';//We can add to the object using name.key = value
ben.age = 29;//We can also mutate
ben["Favourite Film"] = Big Lebowski; //We use [] to create multiword propety names.
delete ben.job; //We can delete a property from an object with the delete operator.

//Methods
/*A method is a function which is a property of an object. We use this to access the information stored in the object. We can access object methods as we would any object property.
There are many built in methods such as toUpperCase() is a method of the string object.
*/

//THIS

/*this keyword - Refers to the object it belongs to.
This has different values depending on where it is used
  In a method this refers to the object owner.
  Alone this refers to the global object.
  In a function, this refers to the global object.
  In a function, in strict mode, this is undefined.
  In an event, this refers to the element that received the event.
  Methods like call(), and apply() can refer this to any object.

Arrow functions should not be used when using this in a method as they inherently bind to an already defined this value such as the global object or another object that exists in the global scope.
*/

const car = {
  carName: 'kia',
  price: 500,
  year: 1990,
  condition: 'poor',
  calcAge: function() {//Method
    this.age = 2020 - this.year;//The this keyword refers to the object the method belongs to.
  }
};

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
};
matthew.calcAge();

let mike = {
  name: 'mike',
  yearOfBirth: 1984
};

mike.calcAge = matthew.calcAge;//We are copying the calcAge function from the matthew method to the mike method without having to copy the code.
mike.calcAge();
console.log(mike);//The mike method now contains the calcAge function from the matthew method.

/*Nested Objects - In application code, objects are often nested - an object might have another object as a property which in turn could have a property thats an array of even more objects.
*/

/*OBJECT PRIVACY - When discussing privacy in objects we define it as the idea that only certain properties should be mutable or able to change in value. Certain langauges have privacy inbuilt for objects but JavaScript does not have this feature. Rather JavaScript developers follow naming conventions that signal to other developers how to interact with a property.

One common convention is to place an underscore _ before the name of a property to mean that property should not be altered.

We can use the Object.freeze(obj) to freeze an object preventing new properties from being added to it and existing properties from being removed.

*/
/*GETTERS - Getters are methods that get and return the internal properties of an object. They can also do more than just retrieve an object.
*/

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
};
// To call the getter method in general getter methods do not need to be called with a set of parentheses.
person.fullName; // 'John Doe'
/*
We use the get keyword followed by a function. We use a conditional to see if both exist.

We can use getters to perform an action on the data when getting a property. Getters can return different values using conditionals. In a getter we can access the properties of the calling object using this.
Getter and setter methods cannot share the same name as the properties. It will cause a infinte call stack error.

SETTERS - are methods which reassign values of existing properties within an object.
*/

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
person.age = 40;//Like getters we do not call with a set of parentheses, it looks syntactically like they are being reassigned.
console.log(person._age); // Logs: 40
/*
Like getter methods there are similar advantages that include checking input, performing actions on properties and displaying a clear intention for how the object is supposed to be used.

OBJECT CONSTRUCTORS - If we were creating a online shopping site with a large inventory manually typing out all those objects is not feasible. A better way to create them is using an object constructor which is a function that looks like this:

*/
function Player(name, score) {
  this.playerName = name;
  this.playerScore = score;
}
/*
The object constructors name should begin with a capital.
you call using the keyword new
*/

const player = new Player("steve", 24);

/*
Constructor for book object we can also add methods to constructor functions.
You can not add a new property to an existing object constructor like you would a object using dot or bracket notation. To add a new property you must add it to the constructor function.
*/

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this;
    }
}

const janeEyre = new Book("Jane Eyre", "Charlotte Bronte", 300, "I have read");

/*The prototype -
Prototypes are unique to JavaScript, JS works with objects in a very specific way.
All objects in JavaScript have a prototype. The prototype is another object that the original object inherits from, which allows the original object to access all the prototypes methods and properties.

If we log an object or object type(arrays) to the console they will all contain the __proto__ property, which inside of we can see all the methods attached to that particular object.

Prototypes allow us to save space and use less code, instead of having the same methods or properties in each instance we can add the methods or properties directly to the constructor prototype. So the methods and properties are stored in one place but can be accessible by all the objects created by the constructor. Methods inherited via prototype can also be changed universally for all instances.

All JavaScript objects inherit properties and methods from a prototype.
    Date objects inherit prototypes from Date.prototype
    Array objects inherit protoypes from Array.prototype
    Objects inherit prototypes from Object.prototype

The Object.prototype is on the top of the prototype inheritance chain:
Date objects and Array objects inherit from Object.prototype.

We can modify the prototype property of a constructor function so methods added to the constructor are then availible on all object instances created from the constructor.
*/

function User(email, username) {
    this.email = email;
    this.username = username;
}

User.prototype.printEmailUsername = function() {
    return `${this.email} ${this.username}`;
};
//We are adding the method directly to the User constructor the new objects will inherit the constructors prototype. This saves

const mark = new User("mark@gmail.com", "mark97");

console.log(mark.printEmailUsername());

/*Recommended Method for Prototypal Inheritance
The recommended way of setting the prototype of an object is Object.create, which very simply returns a new object with the specified prototype and any additional properties you want to add. For our purposes you use it like so:
*/

function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}

function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

/*
Factory Functions vs Constructors
There are many people who argue against using constructors. One issue with using constructors is that if you aren't careful they can introduce bugs into your code when using constructors. Another issue with constructors is that while they look like regular functions they do not behave like regular functions. If you try to use a constructor function without the new keyword, the program will not run as expected but it wont produce error messages that are easy to trace.

A lot of programmers recommend using factory functions instead of constructors. As factory functions are much more flexible than constructors. With factory functions there is also no ambuiguity when it comes to new and this behaves as it would normally.
*/

/*
FACTORY FUNCTIONS - allow us to create many instances of an object quickly. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions have parameters to customise the object that gets returned.
*/

const FactoryFunction = (name, age) => {
	const person = {
		name: name,
    age: age
    }
  return this.ojectName.push(person);
};

const ben = FactoryFunction("Ben", 24);


/*
ES6 introduced shortcuts for assigning properties to variables known as destructuring. Instead of assigning ecah property with a key and value even though they share the same name. One shortcut we can use is the destructuring technique called propety value shorthand.
*/

const FactoryFunction = (name, age) => {
	return {
		name,
    age
    }
};

/*
Another destructuring technique is called destructured assignment. In destructured assignment we create a variable with the name of an objects key that is wrapped in {} and assign it to the object.
*/

const { age } = ben; //Would return 24.
//We can even use destructured assignment to grab nested properties of an object.

/*Inheritance with factories -
 There are a few ways to accomplish inheritance while using factory functions. One pattern is to have factory functions for specific methods you want to include in your objects. Aswell as a main factory function that can use destructured assignment syntax to grab methods and properties from another factory function and pass it to a new object. This pattern is useful as it allows us to pick and choose which functions we want to include in our new object.
*/

const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
};

const Nerd = (name) => {
  // simply create a person and pull out the sayName function with destructuring assignment syntax!
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
};

const jeff = Nerd('jeff');

jeff.sayName(); //my name is jeff
jeff.doSomethingNerdy(); // nerd stuff

/*The Module Pattern -
Modules are very similar to factory functions. The main difference is how they are created.
*/

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5) // 8
calculator.sub(6,2) // 4
calculator.mul(14,5534) // 77476

/*The concepts are exactly the same however instead of creating a factory that we can use over and over again to create multiple objects, the module pattern wraps the factory in an IIFE(Immediately Invoked Function Expression).

In our calculator example above, the function inside the IIFE is a simple factory function, but we can just go ahead and assign the object to the variable calculator since we aren’t going to need to be making lots of calculators, we only need one. Just like the factory example, we can have as many private functions and variables as we want, and they stay neatly organized, tucked away inside of our module, only exposing the functions we actually want to use in our program.

A useful side-effect of encapsulating the inner workings of our programs into objects is namespacing. Namespacing is a technique that is used to avoid naming collisions in our programs. For example, it’s easy to imagine scenarios where you could write multiple functions with the same name. In our calculator example, what if we had a function that added things to our HTML display, and a function that added numbers and operators to our stack as the users input them? It is conceivable that we would want to call all three of these functions add which, of course, would cause trouble in our program. If all of them were nicely encapsulated inside of an object, then we would have no trouble: calculator.add(), displayController.add(), operatorStack.add().
*/

/*
BUILT IN OBJECT METHODS

There are many inbuilt methods for objects. For example .hasOwnProperty(), valueOf(), Object.keys(), Object.entries(), Object.assign().

THE FOR IN LOOP
The for in loop is a special form of loop used to loop over all keys of an object.
*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) { //key in object
  console.log(property); //will print keys
  console.log(object[property]) //will print key properties
}

/*****************************
LOOPS & ITERATORS
******************************/

//ITERATORS - JavaScript provides a number of ways of iterating over a collection, from for loops, while loops, to forEach(), map() etc.

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

/*Looping through Objects: We cannot loop through a object like we would an array becuase the key value pairs in objects are not ordered. The solution for iterating through objects with the for...in syntax
*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}// expected output:// "a: 1"// "b: 2"// "c: 3"

//Nested loops - When we have loops running inside another loop that is called a nested loop. One use for a nested loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

//for...of loop is an alternative to a for loop. It has simpler syntax and is more readable however it is also more limited than for loops for example you can not interate through an array in reverse , access indices of an element, set a counter etc.

const animals = ["Lion", "Wolf", "Frog", "Deer", "Fish", "Squirrel", "Tiger", "Cat", "Dog"];

for(const animal of animals) {//Animal refers to the individaul element.
  if (animal === "deer") {
    continue;//The continue keyword is used to skip one iteration of the loop deer in this example.
  }
  if (animal === "Cat") {
    break;//We can also use the break statement to end a loop. In this example when the loop reaches "cat".
  }
  console.log(animal);//Will print all array elements.
}

// While loop - While the condition is true the loop will execute. while loops are used when we dont know how many times the loop should run. While loops can create infinite loops that should be avoided as they can use too much processing power.

let i = 0;
while (i < 4) {
console.log(i);
i++;
}

//do...while statements - In some cases you want a piece of code to run at least once and then loop based on specific condition after its intial run. A do...while statement will run until a specified condition is no longer met.

let i = 0;
do {
  alert(i);//The body of the loop will execute at leat once regardless if true.
  i++;
} while (i < 3);

//looping backwards -
const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = nick.length - 1; i >= 0; i--) {
  console.log(nick[i]);

//break - The break keyword allows programs to break("end") out of the loop from within the loops block. Break allows us to stop a loop even if the stopping condition is not met.

const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = 0; i < nick.length; i++) {
  if (typeof nick[i] !== 'string') break;//The loop will break(end) when a non string element is looped
  console.log(nick[i]);//Will print 'Nick', ' Smith'

continue - The continue statement skips one iteration in the loop if a specified condition occurs, and continues with the next iteration in the loop.
const nick = ['Nick', 'Smith', 1990, 'designer', false];
for (let i = 0; i < nick.length; i++) {
  if (typeof nick[i] !== 'string') continue;//The loop will skip one iteration if element is not a string
  console.log(nick[i]); //'nick', 'smith', 'designer'

//ITERATOR ARRAY METHODS
/* The array data type consists of a list of elements. There are many built-in methods available to work with arrays. Methods that modify the original array are known as mutator methods, and methods that return a new value or representation are reffered to as accessor methods. Methods that operate on every item in an array, one at a time are known as itteration methods.
*/

.forEach()// method - is used to call a provided function once for each element in an array in order.

const array = ['a', 'b', 'c'];
array.forEach(printArray);
function printArray(element) { //The element parameter refers to the array.
console.log(element)} //Prints ['a', 'b', 'c'];

//Another way to pass a callback function for .forEach() is to use arrow function syntax.

array.forEach(number => console.log(number));//Number refers to the individual array elements.

.map() //method = Creates a new array with the results of calling a provided function once for every array element.

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(divideNumbers);
function divideNumbers(num) {
	return num/100;
}
console.log(smallNumbers); //Prints [1, 2, 3, 4, 5]

.filter()//Like .map() this method returns a new array. However .filter() returns an array of elements after filtering out certain elements from the original array. filter() calls a fallback function for each elememt in array and constructs a new array of all the values for which the callback returns true.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(lessThan);
function lessThan (num) {
  return num < 250;
}
console.log(smallNumbers) //Print 200, 3.14, 7, 13

.find() //The find() method returns the first value in an array that passes a given test.

const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12

.findIndex() //this method helps us find the location of an element in an array. Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. If there isnt a single element that satisfies the condition in the callback then findIndex() will return -1.

const animals = ["hippo", "giraffe", "tiger", "lion", "seal", "monkey", "elephant"]

const elephantPosition = animals.indexOf(indexOfAnimals);

function indexOfAnimals(animal) {
  return animal === "elephant";
}
console.log(elephantPostion); //Prints 6 position of elephant in array.

.includes() //This method determines whether an array includes a certain value among its elements returning true and false as appropriate

.sort() //this method sorts arrays alphabetically.
.reverse() //this method reverses the elements in an array you can use it to sort an array in descending order.

Numeric Sort  //By default the sort() method sorts strings. However when we try to sort numbers like strings 25 is sorted higher than 100 because 2 is greater than 1. Because of this sort() method will produce incorrect results when sorting.  We can use a compare function to fix this.

let numbers = [100, 45, 62, 76, 909, 23, 97, 53, 32, 16, 36, 111];
// 100 - 45 = 55 because it is a positive number JS knows that 100 is greater than 45 so js will swap their places and then compare 100 to the next number.
//1 - 100 = -99 becuase it is a negative number JS knows that 1 is less than 100.
function sortNumeric(arr) {
    const sorted = arr.sort(function (a, b){//pass in the two numbers
        return a - b;// a - b for ascending order, b - a for descending order.
    });
    return sorted;
}

console.log(sortNumeric(numbers));

//The compare function compares all the values in an array two at a time. e.g. 40 - 100 = -60 so 40 is sorted at a lower value than 100.

.reduce()  //is a method that returns a single value after iterating through the elements of an aray, thereby reducing the array. The callback function takes two values the accumulator and the current value. The value of the accumulator starts off as the value of as the value of the first element in the array and the current value starts as the second value. As reduce() iterates through the array the accumulator value becomes the return value of the callback function for the next iteration.

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => {
  return total + amount;
});
console.log(sum) // 118.11

//The .reduce method can also take a optional second parameter to set an intial value for the accumulator.

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {//Accumulator first value is 100 and currentValue first value will be 1.
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117


.some()  //tests whether at least one element in an array passes the test implemented by the problem. It returns a boolean value.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {//Will return boolean if at least one element is less than 6 characters in length.
  return word.length < 6;
}));

.every() //Method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.

console.log(interestingWords.every((word) => {//Will return boolean if all elements are greater than 5 characters in length.
  return word.length > 5;
 } ));



/***************************************
JAVASCRIPT INTERACTIVITY & THE DOM
***************************************/



/* The Document Object Model or DOM for short is a tree-like structure that allows programmers to conceptualize hierarchy and access elements on a web page. The DOM is created when the page is loaded.
The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object. The DOM is seperate from JavaScript and is more of a link between the HTML webpage and the scripting language.

//NODES
The DOM tree is made up of nodes which are intersecting points in a tree that contains data. In the DOM tree the top most node is called the root node and it represents the HTML document starting with the <html> tag followed by the <head>, <body> and <footer> tags. A parent node is the node above the closest connected node. A child node is the same but beneath the closest connected node. There are nine different types of node objects such as element and text. We can use the DOM to access a node's attributes such as its class, id and inline style.

- Everything in an HTML document is a node - nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we use to manipulate our webpage with JavaScript.:
*The entire document is a document node
*Every HTML element is an element node
*The text inside HTML elements are text nodes
*Every HTML attribute is an attribute node(deprecated)
*All comments are comment nodes

/****
 USING THE DOM TO INTERACT WITH ELEMENTS
****/
/*.innerHTML -
 Using the DOM we can modify the contents of an element aswell as it's attributes and properties. We can use the innerHTML property to add or modify elements.
*/

document.body.innerHTML = "We can reassign the inner HTML of the body element.";
document.body.innerHTML = "<h2>We can also assign a h2 element as a child inside of the body element.</h2>"

/*
.querySelector -
If we want to access a specific element we can use the querySelector method to access an element with CSS selectors such as tag, class or an ID. It will return the first element that matches the selector.
*/
document.querySelector("p");
document.querySelector(".class");
document.querySelector("#id");

//.querySelectorAll is a method that returns a static nodeList representing a list of the documents elements that match the specified group of selectors. querySelectorAll can be used with a loop to apply styles, events or edit elements.

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";// This will loop through all paragraph elements and set there color to red.
}

/*
.getElementBy - if we want to access elements directly we can use the getElementBy methods which will return a live HTML element object.
*/

document.getElementById("ID");//The function only returns one ID as ID's should be unique.
document.getElementsByClassName("CLASS");
document.getElementsByTagName('ELEMENT-TYPE')
//.getElementsByClassName and .getElementsByTagName both return an array-like collection of elements. To access individual elements you have to iterate over them.


/*
Modifying elements -
We can modify an elements CSS styles using the .style DOM property. The syntax follows an element.style.property format with the property representing a CSS property. We can use the .style property to change color, backgroundColor, font-size, font-family etc.
*/
let blueElement = document.querySelector(".blue");
blueElement.style.backgroundColor = "blue";//CSS properties are written in camelcase rather than with a -(hyphen).

/*
Traversing the DOM-
Is finding HTML elements on their relation to other elements. In the DOM hierarchy parent and children relationships are defined in relation to the position of the root node. Traversing the DOM is more effecient than previous methods as you do not have to search the entire DOM for an element.
*/
// parentNode;
let itemList = document.querySelector('#items');

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4'; //changes the parent node.

//childNodes - is usually not worth using as it lists text(whitespace) in the nodelist along with the childNodes.
console.log(itemList.childNodes);

//children - Only lists the elements and in a HTML collection instead of in a node list
console.log(itemList.children);
//console.log(itemList.children[1]);//To select a single element.
//itemList.children[1].style.backgroundColor = 'yellow';

//firstChild/lastChild - like the childNodes this includes text(whitespace)
//console.log(itemList.firstChild);

//firstElementChild/lastELementChild - Is the better method as it only list elements not text(whitespace)
console.log(itemList.firstElementChild);
//itemList.firstELementChild[1].style.color = 'blue';

//nextSibling/previousSibling - Includes text(whitespace)
//console.log(itemList.nextSibling);

//nextElementSibling/previousElementSibiling - Choses the next sibling or the previous sibling - Siblings are elements who share the same parent.
let listGroupItem = document.getElementsByClassName('list-group-item');
console.log(listGroupItem[1].nextElementSibling);

/*
Creating Elements and Inserting them -
Just as the DOM allows us to modify existing elements it also allows for the creation of new ones.
The .createElement(tagName) method creates a new element based on the specified tag name passed into it as an argument. We can assign classes, id's, text, attributes etc to a new element. We can then assign a newly created element in javascript to the DOM.
*/

//Creating and inserting elements into the DOM - createElement this only creates the element to add it to the webpage we have to append it or use the insertBefore or appendChild method.

let newDiv = document.createElement('div');

//add class
newDiv.className = 'new-div-class';

//add id
newDiv.id = 'new-div-id';

//add attribute
newDiv.setAttribute('title','New Div');

//create text node
let newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

//Adding div made in JavaScript to the DOM

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);//takes two parameters what we are inserting and what we are inserting before

console.log(newDiv);

//We can remove an element from the DOM using the removeChild method.
parentNode.removeChild(div);

/*
Events -
You can add interactivity to DOM events by assigning a function to run based on an event. Events are user interactions and browser manipulations such as a page loading, a mouse click, a keyboard input etc.
When a user does any of these actions they are causing the event to be fired or be triggered.
After a specifc event fires on a specific element in the DOM an event handler function can be created to run as a response.

.onclick property allows you to assign a function to run on a click event on an element.
*/

const button = document.getElementById("button");
button.onclick = function() {button.style.backgroundColor = "blue"};

/*
.addEventListener() - method sets up a function that will be called whenever the specified event is delivered to the target. The DOM element that listens for the event is called the event target and function that runs is called the event handler.
*/

const eventTarget = document.getElementById("targetElement");

eventTarget.addEventListener("click", function() {
//this block of code will run when the click event happens on eventTarget element.
});

/*
.onevent - is another way to register an event handler to an event target. .onevent is a property that can be set on a DOM element. After the event target the on is followed by the lowercased event type name for instance onclick. Unlike the .addEventListener we can only attach one event handler function to the event target.
*/

eventTarget.onclick = eventHandler;

/*
.removeEventListener() - Is a method used to reverse the addEventListener() method. This method stops the event target from listening for an event to fire. .removeEventListener needs both the exact event type and the name of the event handler to work. If .addEventListener was provided an anonymous function then that event listener cannot be removed.
*/

eventTarget.removeEventListener("click", eventHandler);

/*
Event Object Properties
JavaScript stores events as event objects with their related datd and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.
*/

function eventHandlerFunction(event){////When the click event is triggered the function will run and pass in the event object.
  console.log(event.timeStamp);//The .timeStamp property will return the time when an event was triggered in miliseconds.
}

//Prevent default method cancels the events default action if it is cancelable. For example it will stop a submit button from submitting a form, clicking a link will prevent the link from following the url.

function runEvent(event) {
    e.preventDefault();
}

eventTarget.addEventListener("click", eventHandlerFunction);

/*Some of the properties associated with event objects include...
.target to reference the element that the event is registered to.
.type to access the type of the event.
.timeStamp to access when the event was triggered.
*/

/*
Form Validation - is the process of checking the information submitted through a form adheres to expectations. Most data once submitted is stored in a databse or server side so it is important that the stored data is accurate. Unprotected forms can potentially allow for code injection this can leaves users data or even the site itself at risk. To specify patterns for the computer to recognize we use a special language called regular expressions or regex for short. A regular expression is a sequence of characters representing a pattern, we can use that pattern to match a string to confirm that data is formatted acceptably or even replace parts of strings with different characters. We can have front-end, client and backend validation.
*/
