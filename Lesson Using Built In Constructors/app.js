/**************************************************** */
//            Using Built In Constructors
/**************************************************** */

//String - returned as an object, each character is fixed like an array item.
//Not primitve, typeof returns an object as I suspected.
// === does not work well with new String created objects since you are comparing the type instead of the value; in other words, == would work.

let name = 'Johnny Bravo'
let johnny = new String('Johnny');
johnny.lastName = 'Bravo';

//Number

let number = 24;
let numberFunnierThan24 = new Number(25);

//Boolean
let bool = true;
let boolObj = new Boolean(true);

//Function
let getSum = function (x, y) {
    return x + y;
}

//Might be the weirdest syntax I've seen for creating a function expression.
//The last arg must be the function body, all must be in encapsulated in strings.
console.log(getSum(1, 1))
const getSumV2 = new Function('x', 'y', 'return 1 + 1');

//Objects
let person = { name: 'Kareem', isHungry: false };
let clone = new Object({
    name: 'Kareem', isHungry: false
})

//Arrays
let arr = [1, 2, "hello world"];
let arr2 = new Array(1,2,3,4);

//RegEx
//word char that occurs 1 or more times.
let regx = /\w+/
//Must escape characters with backslash.
let regx2 = new RegExp('\\w+');