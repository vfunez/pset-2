const readlineSync = require("readline-sync");

let userWidth = readlineSync.question("\nWidth: ");
let userLength = readlineSync.question("Length: ");

const IN_TO_CM = 2.54;

let width = userWidth * IN_TO_CM;
let length = userLength * IN_TO_CM;
let perimeter = 2 * (length + width);
perimeter = perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + userWidth + "-by-" + userLength + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).\n");
