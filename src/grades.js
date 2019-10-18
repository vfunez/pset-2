const readlineSync = require("readline-sync");

const grade = readlineSync.question("Enter three homework grades.\n");
console.log("\nYour marking period grade is " + grade + "%");
