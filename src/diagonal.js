const readlineSync = require("readline-sync");

let userWidth = readlineSync.question("\nWidth: ");
let userLength = readlineSync.question("Length: ");

let width = userWidth;
let length = userLength;
let diagonal = Math.sqrt(length ** 2 + width ** 2);
diagonal = diagonal.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nA(n) " + userWidth + "-by-" + userLength + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es).\n");
