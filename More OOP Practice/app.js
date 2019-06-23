/******************************************* */
//  Understanding Objects Under The Hood
/********************************************* */

//Create object, sits in memory
let person = new Object();

//Computed member access operator ["nameOfProperty"]
//Doesn't exist yet, the '=' creates the space in memory
//Object gets that reference in memory.
person["firstName"] = "Tony"

//Alternative way to access [""]
//Takes the object and looks for the property defined.
let firstName = "firstName";
console.log(person[firstName])

//Other alternative: dot operator
console.log(person.firstName);

person.address = new Object();
person.address.street = "Smithfield Ave"
person.address.city = 'Toronto'
person["address"]["province"] = "Ontario";

//Object literal
//no '=' for obj literals {}, use ':'. 
const missingMan = {
    first: 'John',
    last: 'Doe',
    address: {
        street: 'City Side Street',
        city: 'Toronto'
    }
}

//This function expects an object with the 'first' property. 
function greet(name) {
    console.log(`hello ${name.first}`);
}

//We can create objects on the fly.
//The {} signifies an object being passed during execution, now we need a property named 'first'.
greet({
    first: 'Katana'
})

//Namespacing
//Doesn't exist in JS, so we use objects as a unique container.
const english = {
    greetings: {
        basic: 'Hello there!'
    }
};

const spanish = {};
spanish.greet = 'Hola'

/*

History Lesson: XML
Date used to  be sent like this below

<object>
<first>John</first>
</object>

Really Wasteful, lots of characters being repeated and unnecessarily slowing down speeds.

Now we use JSON, looks like object literals but properties are wrapped with quotations like strings. 
Think subset of object literal but stricter.
*/

//Convert Object to JSON String
console.log(JSON.stringify(english));
const jsonValue = JSON.parse('{"firstname: "JSON"}')


/****************************************** */
///             First Class Functions
/****************************************** */

function sayHello() {
    console.log('hello');
}

//We can add properties to functions; they function like objects, they are objects.
greet.welcome = true;

//Expressions return a value
//However an if statement is not an expression; it doesn't return a value
//Nor is it stored in a variable

//All variables before execution are set to undefined in memory.
//anonymousGreet(); returns undefined is not  a function

let anonymousGreet = function () {
    console.log("Anon hi")
}



//This function (sayHello) is stored in memory, but doesn't return anything.
//The function can be called before you declare the function statement.
// function sayHello() {
//     console.log('hello');
// }

function log(a) {
    a();
}

//We can pass functions as parameters since they are objects, it is valid.
log(function () {
    console.log("hi")
})

//Note: ewuals operator sets up new memory space aka a new address.

let a = { greeting: 'hello' };
let b = a;
a.greeting = 'Bonjour';

//spoiler alert: they have the same address, so their values are the same.
console.log(a);
console.log(b);

//a and b are different when a or b = to a different value, not it's property.
//a and b are no longer the same, a new memory location is created.
a = { hasInsurance: false };


//When a function is invoked, a new execution context is created.
//Each context has a variable object, a reference to the lexical environment (where it sits physically in the code), till it reaches the global  environment, and the variable 'this' (depends on how function is invoked).

console.log(this) //reference to the window object or the global object.

function thisRef() {
    console.log(this);
    //this.newVar = 'new variable created'
}

thisRef();
//Window object if you invoke a function expression/statement.
//console.log(newVar) //This works because this pointed to the window object; so window.newvar has been created.

const c = {
    greetings: function () {
        let that = this;
        //Solution to problem, replace all 'this' with variable that.
        //that variable points to the object, so now we can reference the object even inside inner functions.

        this.name = 'updated'; //creates name property  if not created, otherwise it updates it when called.
        console.log(this); //Returns the object

        let diffName = function (newName) {
            this.name = newName;
        }
        diffName('updated again');
        //Problem: This will actually create/modify the global name property, not the object. Crazy, why I have no idea, but this is one of the answers I was looking for awhile. It's inside the greetings method, I know it creates a new execution context, likewise I knew if a function was created in the global scope, it would  return the global object if the 'this' variable was called. Yet for some reason, the inner function this reference points to  the global object and the outer this refers to the object.

        console.log(this); //Returns the object
    }
}

c.greetings() //Returns the object.


/****************************************** */
///              Syntax Parser
/****************************************** */
//Parses character by character.
//for the keyword return, it will automatically add the semicolon and end the function.
//Example below of automatic semicolon insertion.

function returnObject() {
    return  //JS engine puts semicolon here, returns undefined    
    {
        skyColor: 'blue'
    }
}

/****************************************** */
///              IIFE Again
/****************************************** */

const anotherGreet = function (name) {
    console.log(`Hello, ${name}`)
}

console.log(anotherGreet)

//The code above outputs the commented code below, after all we are printing it not calling it.
//function(name){
//console.log(`Hello, ${name}`)
//}


//IIFE, runs imediately after creating the function expression.
const anotherGreet = function (name, timeOfDay) {
    console.log(`Hello, ${name}, good ${timeOfDay}`)
}("Kareem", "afternoon");

//print the results with console.log(anotherGreet);

//READ THIS KAREEM
// 3; "this is a string"; {hello: 'hello'}; are all valid.
// Howerver, function (name) {return name;} is not, why??
//Because the parser sees the function at the beginning of the line when it executes char by char. So it deems that part of the code as a function statement, while we are attempting to create a function 'on the fly'.
//Solution: Make sure that the line does not begin with the word function, enclose in paranthesis to tell the parser that this is not a function statement.

/****************************************** */
///              Closures
/****************************************** */

function greetMe(whattosay) {
    return function (name) {
        console.log(`${whattosay}, ${name}`);
    }
}

//greetMe('Hola')('Kareem');
//Due to thelexical environment/positioning of the code, whattosay is still stored in memory even when the greetMe function is popped off the execution stack. "Closing in" on the outer variables that it still should have access to.

function buildArray() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(function () { console.log(i) })
    }
}

const builder = buildArray();
builder[0](); //Prediction: 0       Result = 3 ?????
builder[2](); //Prediction: 1       Result = 3 ????

//Thought Process (Realization)
//In the execution context: when the loop is finished, arr = [func0, func1, func2], i = 3.
//Im an idiot, the function never runs until the () is invoked, thus when we call the function,
//it will always be 3, since the loop is finished.
//buildArray() has an i value which it stores in memory is 3.
//When builder[0] runs, it has no i value, it goes up the chain and in memory, i = 3.


//To get what I expected when builder[0] = 0, builder[1] = 1, ...
// function buildArray(){
//     let arr = [];
//     for(let i = 0; i < 3; i++){
// arr.push(
//     (function (j) {
//         console.log(j)
//     }(i))
// )
// }

/****************************************** */
///              Callback Function
/****************************************** */

function executeLater(callback) {
    let a = 1000; let b = 2000;
    callback();
    console.log(a, b)
}

executeLater(function () {
    console.log('All done.....')
})


/****************************************** */
///              Arrays
/****************************************** */

const arr = [1,
    false,
    {
        name: 'Kareem', age: '19'
    },
    function (name) {
        console.log(`Hello ${name}`)
    },
    "It's a collection of things"
]

//To access the method.
//arr[3]()

//To access the name variable we want to plug into the method.
//arr[3](arr[2].name)


/****************************************** */
///          Call, Apply, Bind
/****************************************** */

const micheal = {
    first: 'Micheal',
    last: 'Scott',
    getFullName: function () {
        let full = `${this.first} ${this.last}`;
        return full;
    }
}

const logName = function () {
    console.log(`Logged user: ${this.getFullName()}`)
}

//What did we do here
//All functions objects have access to bind, apply, call
//We are not invoking the function aka ().
//Bind returns a new function, makes a copy of logName and replaces the 'this' variable with the micheal object.
//If we wanted shorter code we could add to  the paranthesis on logname expression .bind(micheal)() to have the same effect.

const logPersonName = logName.bind(micheal)

//call
//Executes the function unlikes bind()
logName.call('micheal')

//apply
//does exactly the same thing as call but needs an array.
logName.apply('micheal')

//Borrowing functions

const jim = {
    first: 'jim',
    last: 'halpert'
}

//Take micheal's method, execute it, with jim details/properties, finally log it to see the results.
console.log(micheal.getFullName.apply(jim));

//Function Currying

function multiply(a, b) {
    return a * b;
}

//Variable a will have a permanenet value of 2.
const multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3)  //6
multiplyByTwo(100) //200


function mapForEach(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

let arr2 = mapForEach([1, 2, 3], function (item) {
    return item * 2;
});

let checkLimit = function (limiter, item) {
    return item > limiter;
}

const limitBy5 = checkLimit.bind(this, 5);
const arr4 = mapForEach([1, 2, 3], limitBy5);

let checkLimitBind = function (number) {
    return checkLimit.bind(this, number);
}

let arr5 = mapForEach([1, 15, 30, -5, 6], checkLimitBind(10));
console.log(arr5) // [false, true, true, false, false];


/****************************************** */
///          Prototype
/****************************************** */

let obj = {
    name: 'obj',
    siblings: 'none',
    isHungry: false
};


//To  loop through an object's properties
Object.keys(obj).forEach(function (key) {
    console.log(key, obj[key])
});


//This also returns the same thing as above + the prototpe's properties
//If we don't want that, we can use the built in hasOwnProperty(prop) inside the for loop.

// for(let prop in obj){
//     console.log(`${prop} : ${obj[prop]}`);
// }


//If you are building objects with a function's constructor, prototype can be used.
//prototype refers to the prototype of any object created by it.

function TheAvatar(masteredElements) {
    this.masteredElements = masteredElements;
}

let avatarAang = new TheAvatar(['air', 'fire', 'earth', 'water']);

TheAvatar.prototype.getMasteredElements = function(fnc){
   let array = [];
  for(let i = 0; i < this.masteredElements.length; i++){
    array.push(fnc(this.masteredElements[i]));
  }
  return array;
}

console.log(avatarAang.getMasteredElements(bigger));

function bigger(item) {
  return item.toUpperCase();
}


























