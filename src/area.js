const readlineSync = require("readline-sync");

let userWidth = readlineSync.question("\nWidth: ");
let userLength = readlineSync.question("Length: ");

const IN_TO_MM = 25.4;

let width = userWidth * IN_TO_MM;
let length = userLength * IN_TO_MM;
let area = length * width;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + userWidth + "-by-" + userLength + "-inch sheet of paper has an area of " + area + " square millimeter(s).\n");
