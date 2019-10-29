const readlineSync = require("readline-sync");

let homeworkOne = Number(readlineSync.question("\nEnter three homework grades. \n"));
let homeworkTwo = Number(readlineSync.question(""));
let homeworkThree = Number(readlineSync.question(""));

let quizOne = Number(readlineSync.question("\nEnter three quiz grades. \n"));
let quizTwo = Number(readlineSync.question(""));
let quizThree = Number(readlineSync.question(""));

let testOne = Number(readlineSync.question("\nEnter three test grades. \n"));
let testTwo = Number(readlineSync.question(""));
let testThree = Number(readlineSync.question(""));

const HOMEWORK_TO_WEIGHT = 0.15;
const QUIZ_TO_WEIGHT = 0.35;
const TEST_TO_WEIGHT = 0.50;

let homework = (HOMEWORK_TO_WEIGHT * (homeworkOne + homeworkTwo + homeworkThree)) / 3;
let quiz = (QUIZ_TO_WEIGHT * (quizOne + quizTwo + quizThree)) / 3;
let test = (TEST_TO_WEIGHT* (testOne + testTwo +testThree)) / 3;

let grade = homework + quiz + test;
grade = grade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYour marking period grade is " + grade + "%.\n");
