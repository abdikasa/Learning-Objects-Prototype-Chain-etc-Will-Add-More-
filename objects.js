
//Object Literal
let john = {
    name: 'John',
    job: 'teacher',
    yearsOfBirth: 1996
};

//Function Constructor
let Person = function (name, teacher, yearsOfBirth) {
    this.name = name;
    this.teacher = teacher;
    this.yearsOfBirth = yearsOfBirth;
    // this.calcAge = function () {
    //     console.log(2019 - this.yearsOfBirth);
    // }
}
//Instantiation or instances of the person object. 
//New === empty object created, function is called, which has a this a varaible.
//Instead of the 'this' pointing to the global scope, the new keyword points to the new empty object.
//Since there is no return for the person object, our johnV2 has only the three parameters.

//Remember, propertie listed with the constructor.property belongs to the ones who inherit it (johnV2, lisa, etc), not the parent (Person).
//Inheritance
Person.prototype.calcAge =
    function () {
        console.log(2019 - this.yearsOfBirth);
    }

Person.prototype.isTorontonian = true;

let johnV2 = new Person('John', 'teacher', 1990);
johnV2.calcAge();

//Another Person instance
var lisa = new Person('Lisa', 'olympian swimmer', 2000);

//Check to see if john prototype === the same as the Person.prototype
console.log(johnV2.__proto__ === Person.prototype)

//To check if an instance of the person class has its own property
console.log(lisa.hasOwnProperty("isTorontonian"));

//Check to see if x is an instance of y.
console.log(lisa instanceof Person)


//Object.create
//Define object that acts as the prototype, then create a new object based on that prototype. 
//Not a function constructor, so no capital first letter.
//The difference between the obj.create and the function constructor is the former builds an object that inherits the one we directly passed through, whereas the latter inherits directly from the prototype property.


let personProto = {
    calcAge: function () {
        console.log(2019 - this.yearsOfBirth);
    }
}

//JohnV.3 inherits the created object above. John uses one argument Object.create().
let johnV3 = Object.create(personProto);
john.name = "John";
john.yearsOfBirth = 'swimmer';

//Lisa uses two arguments in Object.create();
let lisaV2 = Object.create(personProto, {
    name: { value: 'Lisa' },
    yearsOfBirth: { value: 2002 },
    job: { value: 'Chef' }
})

//Callback functions Examples

//define array
let years = [1996, 2000, 2005, 1999, 1956, 2012];

//simple function
function calculateAge(year) {
    return 2019 - year;
}


function calculateAgeV2(array, fnc) {
    let inner = [];
    for (let i = 0; i < array.length; i++) {
        inner.push(fnc(array[i]));
    }
    return inner;
}

let inner = calculateAgeV2(years, calculateAge);
//inner returns [23,19,14,20,63,7]

//*************************************************** */
//              Returning functions
/*****************************************************/

function interviewQs(career) {
    if (career === "chef") {
        return function (name) {
            console.log(name + ", what type of cooking are you specialized in?")
        }
    } else if (career === "swimmer") {
        return function (name) {
            console.log(`${name}, won any medals?`);
        }
    } else {
        return function (name) {
            console.log(`Sorry ${name}, what do you do?`);
        }
    }
}

//Functions the same as a function expression
let swimmerQuestion = interviewQs('swimmer');
swimmerQuestion('Tom Cruise');

// let swimmerQs = function (name) {
//     console.log(`Sorry ${name}, what do you do?`);
// }

//'chef' returns a function 
//think interviewQs('chef')  ==== function
//then add the param for the name variable.
interviewQs('chef')("mike");

//******************************************* */
//                  IIFE
//******************************************* */

//Trick the compiler to parsing the anonymous function as a function expression by wrapping it in ();
//Remember things wrapped in parathesis in JS cannot be a statement.
//Create new hidden scope, safely store variables, no  interference with global variables.

(function (x) {
    console.log(x);
})(5);


//******************************************* */
//                  CLOSURES
//******************************************* */

function retirement(retiredAge) {
    let phrase = ` years left till retirement.`
    return function (yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log((retiredAge - age) + phrase);
    }
}

let andy = retirement(65)(1996);















