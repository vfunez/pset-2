const readlineSync = require("readline-sync");

const h = Number(readlineSync.question("Enter three homework grades. \n"));
const h2 = Number(readlineSync.question(""));
const h3 = Number(readlineSync.question(""));

const q = Number(readlineSync.question("\nEnter three quiz grades. \n"));
const q2 = Number(readlineSync.question(""));
const q3 = Number(readlineSync.question(""));

const t = Number(readlineSync.question("\nEnter three test grades. \n"));
const t2 = Number(readlineSync.question(""));
const t3 = Number(readlineSync.question(""));

const H_TO_W = 0.15;
const Q_TO_W = 0.35;
const T_TO_W = 0.50;

let homework = (H_TO_W * (h + h2 + h3)) / 3;
let quiz = (Q_TO_W * (q + q2 + q3)) / 3;
let test = (T_TO_W * (t + t2 +t3)) / 3;

let grade = homework + quiz + test;
grade = grade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is " + grade + "%.");
