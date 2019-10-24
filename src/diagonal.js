const readlineSync = require("readline-sync");

const w = readlineSync.question("Width: ");
const l = readlineSync.question("Length: ");

let width = w;
let length = l;
let diagonal = Math.sqrt(length ** 2 + width ** 2);
diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + w + "-by-" + l + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).");
