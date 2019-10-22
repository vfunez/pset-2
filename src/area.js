const readlineSync = require("readline-sync");

const w = readlineSync.question("Width: ");
const l = readlineSync.question("Length: ");

const IN_TO_MM = 25.4;

let width = w * IN_TO_MM;
let length = l * IN_TO_MM;
let area = length * width;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
