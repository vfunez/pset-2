const readlineSync = require("readline-sync");

const w = readlineSync.question("Width: ");
const l = readlineSync.question("Length: ");

const IN_TO_CM = 2.54;

let width = w * IN_TO_CM;
let length = l * IN_TO_CM;
let perimeter = 2 * (length + width);
perimeter = perimeter.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has a perimeter of " + perimeter + " centimeter(s).");
