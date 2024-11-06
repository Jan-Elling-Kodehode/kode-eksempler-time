let x = 10;
let y = 9;

if (x > 18) {
  console.log("X is over 18");
} else {
  console.log("X is under 18");
}

if (x === "10") {
  console.log("x er en string");
} else if (x === 10) {
  console.log("x er et tall");
} else {
  console.log("Usant");
}
// == Compare
// = Assign
// === Strict Compare - Samme datatyper

x = 10;
y = 9;

// && AND - Begge Stemme

console.log(x === 10);
console.log(y === 10);
if (x === 10 && y === 10) {
  console.log("Begge er 10");
}

// || OR -
if (x === 10 || y === 10) {
  console.log("sann");
}

x == 10
  ? console.log("x == 10") //If true
  : console.log("x =! 10"); //If false

if (x == 10) {
  console.log("x == 10");
} else {
  console.log("x =! 10");
}

let userAge = 18;
let userDrink = userAge >= 18 ? "Beer" : "Juice";

// > gt, >= gt or like
//

console.log(userDrink);

//Sjekke om en verdi eksisterer
let username = "";
let number = 1;

if (username) {
  console.log("Hei");
}

/*
Lag en conditional som sjekker om userName eksisterer (har innhold), at brukeren er over 18, og at user ikke er blocked.
Hvis en eller flere av disse ikke oppfylles, skal du console.log() en feilmelding.
Hvis alle kriterier er oppfylt, sett variabelen goToPage til "/home", og endre userIsLoggedIn til true.
Hvis brukeren er admin, endre variabelen goToPage til "/admin" istedenfor "/home".

console.log(goToPage) til slutt for å se at bruker har blitt sendt til rett side.

endre på verdiene i variablene for å se at din conditional kan håndtere alle cases
*/
