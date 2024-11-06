const day = 1;

//
if (day == 0) {
  console.log("Mandag");
} else if (day == 1) {
  console.log("Tirsdag");
}

//Den over og under gjør det samme.

switch (day) {
  case 0:
    console.log("Mandag");
    break;
  case 1:
    console.log("Tirsdag");
    break;
}

const dayTyped = "Mandag";

switch (dayTyped) {
  case "Mandag":
    console.log(0);
    break;
  case "Tirsdag":
    console.log(1);
    break;
}
