const readlineSync = require("readline-sync");

let name = readlineSync.question("\nHi! What's your name?\n");
console.log("\nHello, " + name + "!\n");
