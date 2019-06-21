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












