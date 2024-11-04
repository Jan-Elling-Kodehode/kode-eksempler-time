/*
Definer en variabel for hver av disse datatypene:
String
Integer
Float

Hva skjer om du tar 2 - “1”? Hva med +?


Lag to objekter for bøker som inneholder informasjon om:
Utslippsår, Boknavn, Forfatter, Sjanger og ISBN
Så lag en console.log som printer 
informasjon fra boken i følgende format:
`Boken ${} ble sluppet ut av ${}  i ${}`
*/

let myString = "Hello World";
let myInt = 10;
let myFloat = 2.62;

let myBook = {
  releasedYear: 2000,
  bookName: "The great 2000's",
  author: "Jan Elling",
  genre: "Fantasy, Crime",
  ISBN: 789137991,
};

let myBookTwo = {
  releasedYear: 2012,
  bookName: "What is Social Media, for people born before 1980",
  author: "Jan Elling",
  genre: "Whatever",
  ISBN: 7277711,
};

// `Boken ${} ble sluppet ut av ${}  i ${}`
console.log(
  `Boken ${myBook.bookName} ble sluppet ut av ${myBook.author} i ${myBook.releasedYear}`
);
