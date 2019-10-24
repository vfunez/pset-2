const readlineSync = require("readline-sync");

const hw = Number(readlineSync.question("Hourly wage: "));

const mo = Number(readlineSync.question("\nMonday: "));
const tu = Number(readlineSync.question("Tuesday: "));
const we = Number(readlineSync.question("Wednesday: "));
const th = Number(readlineSync.question("Thursday: "));
const fr = Number(readlineSync.question("Friday: "));
const sa = Number(readlineSync.question("Saturday: "));
const su = Number(readlineSync.question("Sunday: "));

let salary = hw * (mo + tu + we + th + fr + sa + su);
salary = salary.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYou'll make $" + salary + " this week.");
