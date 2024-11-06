/*
Lag en karakter-kalkulator som printer karakter ut fra poengsummer:
90–100: A
80–89: B
70–79: C
60–69: D
Below 60: F

85 // Skal printe B
63 // Skal printe D
*/

const points = 10002;

if (points > 100 || points < 0) {
  console.log(points, "not within range of 0 - 100");
} else if (points >= 90) {
  console.log("A");
} else if (points >= 80) {
  console.log("B");
} else if (points >= 70) {
  console.log("C");
} else if (points >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// else - 5
// else if - 1

// else, else if, if - 1
