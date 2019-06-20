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

















