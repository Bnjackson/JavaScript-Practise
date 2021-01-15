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
*/
console.log(typeof 42) //number

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
1 != 2 //Not equal too, with type coercion
1 !== 2 //Not equal strict without type coercion
*/

/*Logical Operators - Boolean Logic
&& - The and operator checks if the conditions on its left and right are true before running
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

const colour = "blue";
if (colour === "red") {
  console.log("The colour is red!");
}
else if (colour === "blue") {
  console.log("The colout is blue!");
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

let drink = johnsAge >= 18 ? 'beer' : 'water';// The result will be assigned to the drink variable

//Ternary operators can be used as alternatives to if and else statements.
function equilibrium (x) {
	return (x > 0) ? "positive"
	:(x < 0) ? "negative"
	: true;
}

//Switch Statements provide an altenrative syntax that is easier to read and write. A switch statement is useful when having to write many else if statements. If a break is ommited from a case the following case statements are executed until a break is encountered.

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

/*
A JavaScript function is a block of code designed to perform a particular task. A function is executed when something evokes it. Functions can be reused as many times as you like after defining them. They can be used with different arguments, to produce different results.
Functions can access external data but the opposite isnt true. Other code can not look insdie a function.
A function should do exactly what is suggested by its name and no more. Two independent actions requires two functions.
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

//Function declaration: a function declared as a seperate statement in the main code flow. Declarations have global scope declarations are visible throughtout the code. They can be called before they are declared. Declarations are usually used more than expressions as they more readable and provide more freedom.

const functionExpression = function(a, b) {
  return a + b;
};
//Function expression: a function created inside an expression or another syntax construct. Expressions can be useful for callback functions and have the benefits of being contained in a variable.

/*Anonymous Functions - An Anonymous function is a function without a name it wont do anything on its own. You generally use an Anonymous function with an event handler, so the function runs in response to an event such as a button being clicked.
*/
const myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}

//Arrow Functions: Theres another simple and concise way to create functions. Its called "arrow functions". If a arrow function has a single parameter the parentheses can be omitted.

const myFunction = item => item;
//When there is no function body, and only a return value we can omit the return keyword as well as the brackets surrounding the code.


let arrowFunction = (argument1, argument2) => {
  expression;
};


//its a shorter version of this

let func = function(arg1, arg2, ...argN) {
  return expression;
};

//Higher-Order Functions - A Higher-Order function is a function that either accepts functions as parameters, returns a function or both. We call the function that get passed in as parameters and invoked callback functions because they get called during the execution of the higher-order function.

//Callback Function = a callback function is a function that is passed as a parameter to another JavaScript function, and the callback function is run inside of the function it was passed into.

/* Blocks - A block is the code found inside a set of {}. Blocks help us group one or more statements together

Scope - Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

Global Scope - Variables are declared outside of blocks. These variables are called global variables. Global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Block Scope - When a variable is defined inside a block. That variable has block scope because it is only accesible to the lines of code within that block. Variables that are declared with block scope are known as local variables.

Scope Pollution - Having too many global variables can cause problems in a program. Scope pollution is when we have too many global variables that exist in the global namespace. Scope pollution makes it difficult to keep track of our different variables and sets up potential accidents.

Closures: A closure is the combination of a function and the lexical enviroment which that function was declared. In other words a closure gives you access to an outer functions scope from an inner function.
Closures are created every time a function is created, at function creation time.
To use a closure define a function inside another function and expose it. To expose a function return it or pass it to another function.
The inner function will have access to the variables in the outer function even after the outer function has returned.

Closures are commonly used to give objects data privacy.
*/

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



/*OBJECTS - Objects in Comparison to primitive data types are used to store collections of various data types and more complex entities such as arrays and functions.
Objects are created using {} a propety is a 'key value' pair and the value can be anything. key: value.

Objects can be used to organize code better instead of using multiple variables we can store things in a single object.
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
console.log(ben.firstName); //We can access objects using dot notation
const x = 'age';
console.log(ben[x]); //Will print 24 useful logic for accessing data from an array.
ben.job = 'programmer';//We can add to the object using name.key = value
ben.age = 29;//We can also mutate
ben["Favourite Film"] = Big Lebowski; //We use [] to create multiword propety names.
delete ben.job; //We can delete a property from an object with the delete operator.
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

/*OBJECT PRIVACY - When discussing privacy in objects we define it as the idea that only certain properties should be mutable or able to change in value. Certain langauges have privacy inbuilt for objects but JavaScript does not have this feature. Rather JavaScript developers follow naming conventions that signal to other developers how to interact with a property.

One common convention is to place an underscore _ before the name of a property to mean that property should not be altered.

We can use the Object.freeze(obj) to freeze an object preventing new properties from being added to it and existing properties from being removed.

*/
/*GETTERS - Getters are methods that get and return the internal properties of an object. They can also do more than just retrieve an object.

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
}
// To call the getter method:
person.fullName; // 'John Doe'

We use the get keyword followed by a function. We use a conditional to see if both exist.

We can use getters to perform an action on the data when getting a property. Getters can return different values using conditionals. In a getter we can access the properties of the calling object using this.
Getter and setter methods cannot share the same name as the properties. It will cause a infinte call stack error.

SETTERS - are methods which reassign values of existing properties within an object.

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
person.age = 40;
console.log(person._age); // Logs: 40

Like getter methods there are similar advantages that include checking input, performing actions on properties and displaying a clear intention for how the object is supposed to be used.

OBJECT CONSTRUCTORS - If we were creating a online shopping site with a large inventory manually typing out all those objects is not feasible. A better way to create them is using an object constructor which is a function that looks like this:

function Player(name, score) {
  this.playerName = name;
  this.playerScore = score;
}

The object constructors name should begin with a capital.
you call using the keyword new

const player = new Player("steve", 24);

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

Prototypes are shared  objects that have properties and methods that can be accessed via a range of different objects.

Prototypes allow us to save space and use less code, instead of having the same methods or properties in each instance we can add the methods or properties directly to the constructor prototype. So the methods and properties are stored in one place but can be accessible by all tthe objects created by the constructor.

All JavaScript objects inherit properties and methods from a prototype.
    Date objects inherit prototypes from Date.prototype
    Array objects inherit protoypes from Array.prototype
    Objects inherit prototypes from Object.prototype

The Object.prototype is on the top of the prototype inheritance chain:
Date objects and Array objects inherit from Object.protot ype.

We can modify the prototype property of a constructor function methods added to the object are then availible on all object instances created from the constructor.
*/
Book.prototype.authorNationality = () => {
    console.log("English");
}
janeEyre.authorNationality();

console.log(janeEyre.info());

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
FACTORY FUNCTIONS - allow us to create many instances of an object quickly. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions have parameters to customise the object that gets returned.

const factoryFunction = (name, age) => {
	const person = {
		name: name,
    age: age
    }
  return this.ojectName.push(person);
}

const ben = factoryFunction("Ben", 24)

ES6 introduced shortcuts for assigning properties to variables known as destructuring. Instead of assigning ecah property with a key and value even though they share the same name. One shortcut we can use is the destructuring technique called propety value shorthand.

const factoryFunction = (name, age) => {
	return {
		name,
    age
    }
}

Another destructuring technique is called destructured assignment. In destructured assignment we create a variable with the name of an objects key that is wrapped in {} and assign it to the object.

const {age} = ben; //Would return 24.

We can even use destructured assignment to grab nested properties of an object.

BUILT IN OBJECT METHODS

There are many inbuilt methods for objects. For example .hasOwnProperty(), valueOf(), Object.keys(), Object.entries(), Object.assign().

THE FOR IN LOOP
The for in loop is a special form of loop used to loop over all keys of an object.

for (key in users) { //key in object
  console.log(key); //will print keys
  console.log(users[key]) //will print key properties
}
*/

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

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}// expected output:// "a: 1"// "b: 2"// "c: 3"
*/

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

ITERATOR ARRAY METHODS

.forEach() method - is used to call a provided function once for each element in an array in order.

const array = ['a', 'b', 'c'];
array.forEach(printArray);
function printArray(element) { //The element parameter refers to the array.
console.log(element)} //Prints ['a', 'b', 'c'];

.map() method = Creates a new array with the results of calling a provided function once for every array element.

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(divideNumbers);
function divideNumbers(num) {
	return num/100;
}
console.log(smallNumbers); //Prints [1, 2, 3, 4, 5]

.filter() = Like .map() this method returns a new array. However .filter() returns an array of elements after filtering out certain elements from the original array. filter() calls a fallback function for each elememt in array and constructs a new array of all the values for which the callback returns true.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(lessThan);
function lessThan (num) {
  return num < 250;
}
console.log(smallNumbers) //Print 200, 3.14, 7, 13

.findIndex() = this method helps us find the location of an element in an array. Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. If there isnt a single element that satisfies the condition in the callback then findIndex() will return -1.

const animals = ["hippo", "giraffe", "tiger", "lion", "seal", "monkey", "elephant"]

const elephantPosition = animals.indexOf(indexOfAnimals);

function indexOfAnimals(animal) {
  return animal === "elephant";
}
console.log(elephantPostion); //Prints 6 position of elephant in array.

.sort() = this method sorts arrays alphabetically.
The .reverse() method reverses the elements in an array you can use it to sort an array in descending order.

Numeric Sort - By default the sort() method sorts strings. However when we try to sort numbers like strings 25 is sorted higher than 100 because 2 is greater than 1. Because of this sort() method will produce incorrect results when sorting.  We can use a compare function to fix this.

let numbers = [100, 45, 62 , 76, 909, 23, 97, 53, 32, 16, 36, 111];

function sortNumeric(arr) {
    const sorted = arr.sort(function (a, b){
        return a - b;
    });
    return sorted;
}

console.log(sortNumeric(numbers));

The compare function compares all the values in an array two at a time.
e.g. 40 - 100 = -60 so 40 is sorted at a lower value than 100.

.reduce() = is a method that returns a single value after iterating through the elements of an aray, thereby reducing the array. The callback function takes two values the accumulator and the current value. The value of the accumulator starts off as the value of as the value of the first element in the array and the current value starts as the second value. As reduce() iterates through the array the accumulator value becomes the return value of the callback function for the next iteration.

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount);
sum // 118.11

Other iterators include .some() and .every.
.some() = tests whether at least one element in an array passes the test implemented by the problem. It returns a boolean value.

.every() = Method tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value.

*/
