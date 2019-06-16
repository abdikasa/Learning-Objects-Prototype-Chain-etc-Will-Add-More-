
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
Person.prototype.calcAge = {
    function() {
        console.log(2019-this.yearsOfBirth);
    }
};

Person.prototype.isTorontonian = true;

let johnV2 = new Person('John', 'teacher', 1990);
johnV2.calcAge();

//Another Person instance
var lisa = new Person('Lisa', 'olympian swimmer', 2000);