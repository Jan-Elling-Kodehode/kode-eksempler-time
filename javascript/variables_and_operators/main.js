// console.log("Hello World");

// Hello, dette er en kommentar

/*
Dette er en multiline kommentar
:)
*/

let thisIsX = 2 + 5;
const THIS_IS_Y = 3;
let thisIsZ = "2";

// console.log(thisIsX + thisIsZ);

// console.log(thisIsX + THIS_IS_Y);

//thisIsCamelCase
//thisiscamelcase

let thisIsFloat = 3.14; //Float
let myText = "a String"; // shift 2
let myTextTwo = "aaa"; // '
let myTextThree = `${thisIsX} ss`; // shift + (til venstre for backspace)

// console.log(myTextThree);

let darkModeToggle = false; //Boolean

let fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];
fruits[3] = "Cherries"; //array[i]
// console.log(fruits);

let myPerson = {
  firstName: "Bengt",
  lastName: "Leiknes",
  age: 43,
  eMail: "bengt@leiknes.no",
};

// console.log(myPerson.firstName);

myPerson.age = 23;
// console.log(myPerson);

let myObj = {
  text: "Hei",
};

const combined = { ...myObj, ...myPerson };
// console.log(combined);
// CTRL + '

//OPERATORS!!!
// + - / * % ** ++ --
let x = 11;
let y = 3;
x--;
console.log(x);

// < > <= >=
const comparison = x < y;
console.log(comparison);
