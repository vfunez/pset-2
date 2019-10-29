const readlineSync = require("readline-sync");

const hourlyWage = Number(readlineSync.question("\nHourly wage: "));

let monday = Number(readlineSync.question("\nMonday: "));
let tuesday = Number(readlineSync.question("Tuesday: "));
let wednesday = Number(readlineSync.question("Wednesday: "));
let thursday = Number(readlineSync.question("Thursday: "));
let friday = Number(readlineSync.question("Friday: "));
let saturday = Number(readlineSync.question("Saturday: "));
let sunday = Number(readlineSync.question("Sunday: "));

let salary = hourlyWage * (monday + tuesday + wednesday + thursday + friday + saturday + sunday);
salary = salary.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYou'll make $" + salary + " this week.\n");
