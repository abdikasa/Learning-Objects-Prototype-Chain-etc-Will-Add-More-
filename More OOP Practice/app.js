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































