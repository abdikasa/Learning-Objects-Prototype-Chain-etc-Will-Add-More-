/**************************************** */
//              Prototype
/**************************************** */
//Each Object has a prototype.
//All objects inherit their properties and methods from prototypes.
//If you use object literals, then you are inheriting from Object.prototype.
//Through constructors, it will come from the created class object like Person.prototype.

function Person(first, last, dob) {
    this.first = first;
    this.last = last;
    this.birthday = new Date(dob);
    // this.calcAge = function () {
    //     const diff = Date.now() - this.birthday().getTime();
    //     const age = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
}

//calcAge although a useful method but it has the same calculation for all objects it creates.
//If that is the case, it's better to use prototypes than explicitely writing it in the function constructor.

Person.prototype.calcAge = function () {
    const diff = Date.now() - this.birthday().getTime();
    const age = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const bruce = new Person('Bruce', 'Takeahike', '1986-02-06')
const julia = new Person('Julia', 'McGinnis', '1992-04-05');
Person.prototype.isMarriedTo = function (lastName) {
    this.last = lastName;
}

//Check properties
console.log(julia.hasOwnProperty('isMarriedTo')); // returns false
console.log(julia.hasOwnProperty('first')); // returns true

/**************************************** */
//              Inheritance
/**************************************** */

//Athlete
//Person is a function, we use call to instantiate the already defined properties.
function Athlete(first, last, dob, gpa, sport, position) {
    Person.call(this, first, last, dob);
    this.gpa = gpa;
    this.sport = sport;
    this.position = position;
}

//To inherit prototype methods from Person.
Athlete.prototype = Object.create(Person.prototype);
Athlete.prototype.constructor = Athlete;

const molly = new Athlete('olly', 'smith', '2000-05-09', '3.0', 'baseball', 'pitcher');

//Overwrite Person prototpe with Athlete Objects.
Athelete.prototype.isMarriedTo = function () {
    return `Congratulations on your marraige, ${this.first}`;
}

/**************************************** */
//              Object.create
/**************************************** */

//Alternative Way to create objects
//Create protos inside of parent objects and have different properties and methods/functions.

const personProto = {
    greeting: function () {
        return `Hello there ${this.first} ${this.last}`
    },
    witnessProtection: function (firstName, lastName) {
        this.first = firstName;
        this.last = lastName;
        console.log(`Your new name is ${this.first} ${this.last}.`)
    }

}

//Note: takes prototype inside create paranthesis.
const jerome = Object.create(personProto);
jerome.first = 'Jerome';
jerome.last = "McDonald";
jerome.witnessProtection('john', 'doe');

//Another way of creating objects
const notJerome = Object.create(personProto, {
    first: { value: 'DonaldMC' },
    last: { value: 'Emorej' }
})


/**************************************** */
//          ES6 Classes
/**************************************** */

//no commas
//Commented out static method, this functions exactly  like java fortunately.
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greeting() {
        return `Hi, my name is ${this.first}, what's your name?`
    }
    // static addition(x, y) {
    //     return x + y;
    // }
}

const julieV2 = new Person('Julie', 'Carmicheal');
//let add = Person.addition(665, 1);
//console.log(add);


/**************************************** */
//          ES6 Subclasses
/**************************************** */

class Student extends Person {
    constructor(first, last, school, gpa) {
        super(first, last);
        this.school = school;
        this.gpa = gpa;
    }

    static getPaid(){
        return Math.floor(Math.random()*500 + 1);
    }
}

//proto person --> but the constructor will be Student
const dick = new Student('Dick', 'Grayson', 'Gotham High', 4.0);

console.log(dick.greeting());
let amount = Student.getPaid();































