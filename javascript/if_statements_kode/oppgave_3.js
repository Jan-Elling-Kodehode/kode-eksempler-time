/*
Sjekk om ett år er et skuddår eller ikke,
tips: les opp hva som definerer at år er et skuddår https://no.wikipedia.org/wiki/Skuddår
2024 // Skal printe True
1620 // Skal printe True
1993 // Skal printe False
1900 // Skal printe False
*/

// %
console.log(1900 % 400);

let year = 1200;

if (year % 400 == 0) {
  // Skuddår i århundre må være delelige på 400
  console.log(year, "er et skuddår");
} else if (year % 100 == 0) {
  console.log(year, "er IKKE et skuddår");
} else if (year % 4 == 0) {
  // Skuddår skal være delelige på 4
  console.log(year, "er et skuddår");
} else {
  console.log(year, "er IKKE et skuddår");
}
