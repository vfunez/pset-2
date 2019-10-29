const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("Students: "));
const teachers = Number(readlineSync.question("Teachers: "));
const busCapacity = Number(readlineSync.question("Bus capacity: "));

let totalPassengers = students + teachers;
let buses = totalPassengers / busCapacity;
let totalBuses = Math.ceil(buses);
let lastBus = totalPassengers % busCapacity;

console.log("\n" + totalBuses + " bus(es) is (are) needed, with " + lastBus + " passenger(s) on the last bus.");
